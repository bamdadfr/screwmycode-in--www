let container
let camera
let scene
let
  renderer
let mouseX = 0
let
  mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let object
init()
animate()

function init () {
  container = document.createElement('div')
  document.body.appendChild(container)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
  camera.position.z = 250
  // scene
  scene = new THREE.Scene()
  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xffffff, 0.8)
  camera.add(pointLight)
  scene.add(camera)

  // manager
  function loadModel () {
    object.traverse((child) => {
      if (child.isMesh) child.material.map = texture
    })
    object.position.y = -95
    scene.add(object)
  }

  const manager = new THREE.LoadingManager(loadModel)
  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total)
  }
  // texture
  const textureLoader = new THREE.TextureLoader(manager)
  var texture = textureLoader.load('js/texture/default.jpg')

  // model
  function onProgress (xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = xhr.loaded / xhr.total * 100
      console.log(`model ${Math.round(percentComplete, 2)}% downloaded`)
    }
  }

  function onError () {}

  const loader = new THREE.OBJLoader(manager)
  loader.load('js/models/pill_bottle.obj', (obj) => {
    object = obj
  }, onProgress, onError)
  //
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)
  document.addEventListener('mousemove', onDocumentMouseMove, false)
  //
  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize () {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onDocumentMouseMove (event) {
  mouseX = (event.clientX - windowHalfX) / 2
  mouseY = (event.clientY - windowHalfY) / 2
}

//
function animate () {
  requestAnimationFrame(animate)
  render()
}

function render () {
  camera.position.x += (mouseX - camera.position.x) * 0.05
  camera.position.y += (-mouseY - camera.position.y) * 0.05
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
