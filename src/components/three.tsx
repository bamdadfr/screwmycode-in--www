import React, { useRef, useCallback, useEffect, ReactElement } from 'react'
import * as THREE from 'three'
import { ThreeCamera } from './three.camera'
import { ThreeLights } from './three.lights'
import { ThreeMeshes } from './three.meshes'
import { ThreeRenderer } from './three.renderer'
import { animateBackground, animateCamera } from './three.animations'
import { IScale, ICameraSettings, IMouse, IContainer } from './three.types'

export const Three = (props: any): ReactElement => {

    // props: dom ref

    const { domRef } = props
    const renderer = useRef<any> (null)
    const camera = useRef<any> (null)
    const groups = useRef<any> (null)

    const container = useRef<IContainer> ({
        'clientWidth': 0,
        'clientHeight': 0,
        'appendChild': () => undefined,
    })

    const time = useRef<number> (0)

    const scale: IScale = {
        'default': 1,
        'front': 0.01,
    }

    const cameraSettings: ICameraSettings = {
        'angle1': 0,
        'angle2': 0,
        'scale': 0.5,
    }

    const mouse = useRef<IMouse> ({
        'x': 0,
        'y': 0,
        'spring': 0.000002,
    })

    const handleMouse = useCallback ((x: number, y: number) => {
        
        mouse.current = {
            ...mouse.current,
            'x': x - window.innerWidth * 0.5,
            'y': y - window.innerHeight * 0.5,
        }    
    
    }, [])

    const onDocumentMouseMove = useCallback ((e: any): void => {

        handleMouse (e.clientX, e.clientY)

    }, [handleMouse])
    
    const onWindowResize = useCallback ((): void => {
        
        camera.current.aspect = container.current.clientWidth / container.current.clientHeight
        
        // update the camera's frustum
        camera.current.updateProjectionMatrix ()
        
        renderer.current.setSize (container.current.clientWidth, container.current.clientHeight)
        
    }, [renderer])

    const render = (s: any): void => {

        renderer.current.render (s, camera.current)
    
    }

    const update = React.useCallback ((): void => {

        time.current = animateBackground (time.current, groups.current.backgroundGroup.children[0])

        animateCamera (camera.current, cameraSettings, mouse.current)
    
    }, [cameraSettings])

    const init = useCallback ((): void => {
        
        container.current = domRef.current

        const scene: any = new THREE.Scene ()

        scene.background = new THREE.Color (0x000000)

        camera.current = ThreeCamera (container.current)

        ThreeLights (scene)

        groups.current = ThreeMeshes (scene, { scale })

        renderer.current = ThreeRenderer (container.current)

        renderer.current.setAnimationLoop (() => {

            update ()

            render (scene)
        
        })
    
    }, [domRef, scale, update])

    useEffect (() => {
        
        window.addEventListener ('resize', onWindowResize)

        document.addEventListener ('mousemove', onDocumentMouseMove, false)

        init ()
    
    }, [init, onDocumentMouseMove, onWindowResize])

    return (
        <></>
    )

}
