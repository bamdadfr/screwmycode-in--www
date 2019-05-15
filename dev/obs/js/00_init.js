// these need to be accessed inside more than one function so we'll declare them first
let container
let camera
let controls
let renderer
let scene
let shaderMaterial
let clock
/*
  GLOBAL VARIABLES
  format:
  _camelCase
 */

let _start =  Date.now()

let _scale = {
  default: 1,
  intermediate: 1,
  intermediateT: 100,
  front: 0.1,
}

let _screen = {
  xMax: window.innerWidth * 0.5,
  xMin: -window.innerWidth * 0.5,
  yMax: window.innerHeight * 0.5,
  yMin: -window.innerHeight * 0.5,
}


let _mouse = {
  xPos: 0,
  yPos: 0,
  xMove:0,
  yMove:0,
  // spring: 0.000002,
  spring: 0.001,
}

let _camera = {
  theta: 0,
  phi: 0,
  a:0.2,
  b:0.7,
  c:0.5,
  xPos: 0,
  yPos: 0,
  zPos: 0,
  scale: 10,
}
_camera.initPosition = new THREE.Vector3(  _camera.scale, 0,0)

// _camera.scale_t = []
// for (var i = 0.2; i <= 4; i+=0.0001) {
//    _camera.scale_t.push(i)
// }
// _camera.scale_tReversed =  _camera.scale_t.slice().reverse()


let _axis = {
  xAxis: new THREE.Vector3( 1, 0, 0 ),
  yAxis: new THREE.Vector3( 0, 1, 0 ),
  zAxis: new THREE.Vector3( 0, 0, 1 ),
}

let _grad = {
  color: generateColor("0000ff", "ff3300", 1000)
}
_grad.colorReversed =  _grad.color.slice().reverse()


let _frame = 0
let _loop = 0
let _time = 0



const init = () => {
  clock = new THREE.Clock()
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

