import React, { useRef, useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import * as THREE from 'three'
import { ThreeCamera } from './three-camera'
import { ThreeLights } from './three-lights'
import { ThreeMeshes } from './three-meshes'
import { ThreeRenderer } from './three-renderer'
import { animateBackground, animateCamera } from './three-animations'
import { threeStateVisible } from './three-state'

export const Three = () => {

    const ref = useRef (null)
    const renderer = useRef (null)
    const camera = useRef (null)
    const groups = useRef (null)
    const [isLoaded, setIsLoaded] = useState (false)
    const visible = useRecoilValue (threeStateVisible)

    const container = useRef ({
        'clientWidth': 0,
        'clientHeight': 0,
        'appendChild': () => undefined,
    })

    const time = useRef (0)

    const scale = {
        'default': 1,
        'front': 0.01,
    }

    const cameraSettings = {
        'angle1': 0,
        'angle2': 0,
        'scale': 0.5,
    }

    const mouse = useRef ({
        'x': 0,
        'y': 0,
        'spring': 0.000002,
    })

    const onMouseMove = useCallback ((e) => {

        const x = e.clientX
        const y = e.clientY

        mouse.current = {
            ...mouse.current,
            'x': x - window.innerWidth * 0.5,
            'y': y - window.innerHeight * 0.5,
        }

    }, [])

    const onWindowResize = useCallback (() => {

        camera.current.aspect = container.current.clientWidth / container.current.clientHeight

        camera.current.updateProjectionMatrix ()

        renderer.current.setSize (container.current.clientWidth, container.current.clientHeight)

    }, [renderer])

    const render = (scene) => {

        renderer.current.render (scene, camera.current)

    }

    const update = React.useCallback (() => {

        time.current = animateBackground (time.current, groups.current.backgroundGroup.children[0])

        animateCamera (camera.current, cameraSettings, mouse.current)

    }, [cameraSettings])

    const init = useCallback (() => {

        // container.current = domRef.current
        if (isLoaded !== true) {

            container.current = ref.current

            const scene = new THREE.Scene ()

            scene.background = new THREE.Color (0x000000)

            camera.current = ThreeCamera (container.current)

            ThreeLights (scene)

            groups.current = ThreeMeshes (scene, { scale })

            renderer.current = ThreeRenderer (container.current)

            renderer.current.setAnimationLoop (() => {

                update ()

                render (scene)

            })

            setIsLoaded (true)

        }

    }, [isLoaded, ref, scale, update])

    useEffect (() => {

        window.addEventListener ('resize', onWindowResize)

        document.addEventListener ('mousemove', onMouseMove, false)

        init ()

    }, [init, onMouseMove, onWindowResize])

    useEffect (() => {

        ref.current.hidden = !visible

    }, [visible])

    return <div ref={ref} className="three-container"/>

}