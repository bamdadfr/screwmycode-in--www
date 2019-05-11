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

let _scale = 1
let _scaleFront = 0.07
let _sphereSegments = 21

function init () {

  container = document.querySelector('#threejs-container')

  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x8FBCD4)
  scene.background = new THREE.Color(0x000000)

  createCamera()
  createControls()
  createLights()
  createMeshController() // Meshes = Materials + Geometries
  createRenderer()

  renderer.setAnimationLoop(() => {
    update()
    render()
  })

}
