import React from 'react'
import ThreeCamera from './ThreeCamera'
import ThreeLights from './ThreeLights'
import ThreeMeshes from './ThreeMeshes'
import ThreeRenderer from './ThreeRenderer'
import { animateBackground, animateCamera } from './ThreeAnimations'

const THREE = require('three')

export default (props) => {
  const { domRef } = props

  let camera; let scene; let renderer; let
    container

  let groups

  let time = 0

  const scale = {
    default: 1,
    front: 0.01,
  }

  let mouse = {
    x: 0,
    y: 0,
    spring: 0.000002,
  }

  const cameraSettings = {
    angle1: 0,
    angle2: 0,
    scale: 0.5,
  }

  /**
   * event listener
   */
  const onWindowResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight
    // update the camera's frustum
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }

  /**
   * event listener
   * @param e: mouse event
   */
  const onDocumentMouseMove = (e) => {
    mouse = {
      ...mouse,
      x: e.clientX - window.innerWidth * 0.5,
      y: e.clientY - window.innerHeight * 0.5,
    }
  }

  const render = () => {
    renderer.render(scene, camera)
  }

  const update = () => {
    time = animateBackground(time, groups.backgroundGroup.children[0])
    animateCamera(camera, cameraSettings, mouse)
  }

  const init = () => {
    container = domRef.current

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    camera = ThreeCamera(container)
    ThreeLights(scene)
    groups = ThreeMeshes(scene, scale)
    renderer = ThreeRenderer(container)

    renderer.setAnimationLoop(() => {
      update()
      render()
    })
  }

  /**
   * This block is executed when page is drawn
   */
  React.useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    document.addEventListener('mousemove', onDocumentMouseMove, false)

    init()
  })

  console.log('render: three')
  return (
    <React.Fragment />
  )
}
