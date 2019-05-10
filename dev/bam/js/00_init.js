// these need to be accessed inside more than one function so we'll declare them first
let container
let camera
let controls
let renderer
let scene

function init () {

  container = document.querySelector('#threejs-container')

  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x8FBCD4)
  scene.background = new THREE.Color(0x000000)

  createCamera()
  createControls()
  createLights()
  createMeshes() // Meshes = Materials + Geometries
  createRenderer()

  renderer.setAnimationLoop(() => {
    update()
    render()
  })

}
