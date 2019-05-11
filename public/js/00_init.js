// these need to be accessed inside more than one function so we'll declare them first
let container
let camera
let controls
let renderer
let scene

/*
  GLOBAL VARIABLES
  format:
  _camelCase
 */

let _scale = {
  default: 1,
  front: 0.01,
}

let _mouse = {
  xPos: 0,
  yPos: 0,
  spring: 0.000002,
}

let _camera = {
  angle1: 0,
  angle2: 0,
  scale: 0.5,
}

const init = () => {

  container = document.querySelector('#threejs-container')

  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x8FBCD4)
  scene.background = new THREE.Color(0x000000)

  createCamera()
  // createControls()
  createLights()
  createMeshController() // Meshes = Materials + Geometries
  createRenderer()

  renderer.setAnimationLoop(() => {
    update()
    render()
  })

}
