// First trial
// some suggestions

// Basic variables
let container
let camera
let controls
let renderer
let scene
// let cameras = []

// User variables
// emtpy :(

function init () {

  container = document.querySelector('#scene-container')

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x00000)

  createCamera()
  createControls()
  createLights()
  createMeshes()
  createRenderer()

  renderer.setAnimationLoop(() => {
    update()
    render()
  })

}

function createCamera () {

  camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100)

  // camera quite high for testing purposes
  camera.position.set(0, 20, 0)

}

function createControls () {

  controls = new THREE.OrbitControls(camera, container)
  controls = new THREE.TrackballControls(camera, container)

}

function createLights () {

  const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5)

  const mainLight = new THREE.DirectionalLight(0xffffff, 5)
  mainLight.position.set(10, 10, 10)

  scene.add(ambientLight, mainLight)

}

function createGeometries () {

  const planet = new THREE.SphereGeometry(5, 64, 64)

  return {
    planet,
  }

}

function createMaterials () {

  //const planet = new THREE.LineBasicMaterial()

  const planet = new THREE.LineDashedMaterial({
    dashSize: 0.1,
    gapSize: 0.1
  })

  // const planet = new THREE.MeshBasicMaterial( {color: 0xffff00} )

  return {

    planet,

  }

}

function createMeshes () {

  const Group_1 = new THREE.Group()
  scene.add(Group_1)

  const materials = createMaterials()
  const geometries = createGeometries()

  //const planet = new THREE.Mesh( geometries.planet, materials.planet )
  const planet = new THREE.Line(geometries.planet, materials.planet)
  planet.computeLineDistances()

  Group_1.add(
    planet,
  )

}

function createRenderer () {

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.gammaFactor = 2.2 // seems deprecated, will check docs
  renderer.gammaOutput = true

  renderer.physicallyCorrectLights = true

  container.appendChild(renderer.domElement)

}

// this function is passed as is to renderer.setAnimationLoop() called in init()
// it's a cleaner way to do it than calling an animate() function that loops back on itself with requestAnimationFrame(animate)
function update () {
  moveCamera()
}

function render () {

  renderer.render(scene, camera)

}

function onWindowResize () {
  camera.aspect = container.clientWidth / container.clientHeight
  // update the camera's frustum
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
}

window.addEventListener('resize', onWindowResize)

// ------------------------------------------------------------------------------------------------------------------ //

function moveCamera () {

  const speed = Date.now() * 0.0005

  camera.position.x = Math.cos(speed) * 20
  camera.position.z = Math.sin(speed) * 20
  camera.lookAt(scene.position)
}

init()
