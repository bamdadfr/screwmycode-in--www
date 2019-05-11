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
  intermediate: 0.25,
  intermediateT: 1,
  front: 0.01,
}

let _mouse = {
  xPos: 0,
  yPos: 0,
  // spring: 0.000002,
  spring: 0.00002,
}

let _camera = {
  angle1: 0,
  angle2: 0,
  xPos_fromAngle1: 0,
  zPos_fromAngle1: 0,
  yPos_fromAngle2: 0,
  zPos_fromAngle2: 0,
  scale: 0.5,
}
_camera.initPosition = new THREE.Vector3( 0, 0, _camera.scale)


let _axis = {
  xAxis: new THREE.Vector3( 1, 0, 0 ),
  yAxis: new THREE.Vector3( 0, 1, 0 ),
  zAxis: new THREE.Vector3( 0, 0, 1 ),
}


let _grad = {
  color: generateColor("0000ff", "ff3300", 1000)
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
