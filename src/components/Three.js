import React from 'react'

const THREE = require('three')

export default function () {
  const domRef = React.createRef()

  let camera; let scene; let
    renderer
  let geometry; let material; let
    mesh

  function init () {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
    camera.position.z = 1

    scene = new THREE.Scene()

    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    material = new THREE.MeshNormalMaterial()

    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
  }

  function animate () {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.1
    mesh.rotation.y += 0.2
    mesh.translation.x += 1.00

    renderer.render(scene, camera)
  }

  init()
  animate()

  return (
    <React.Fragment />
  )
}
