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

let spotLight; let lightHelper; let
  shadowCameraHelper

let compteur = 0
let zoom = true

function animate () {
  compteur += 1

  if (compteur / 50 % 2 === 1) {
    zoom = true
  } else if (compteur / 50 % 2 === 0) {
    zoom = false
  }

  const x = 5
  if (zoom) {
    camera.position.x += x
    camera.position.y += x
    camera.position.z += x
  } else {
    camera.position.x -= x
    camera.position.y -= x
    camera.position.z -= x
  }

  console.log('position', camera.position.z)

  requestAnimationFrame(animate)
  render()
}

init()
animate()

function init () {
  container = document.createElement('div')
  document.body.appendChild(container)
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 200

  // scene
  scene = new THREE.Scene()
  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xff0000, 0.8)
  camera.add(pointLight)

  spotLight = new THREE.SpotLight(0xffffff, 1)
  spotLight.position.set(15, 40, 35)
  spotLight.angle = Math.PI / 4
  spotLight.penumbra = 0.05
  spotLight.decay = 2
  spotLight.distance = 200

  scene.add(camera)

  // manager
  function loadModel () {
    object.traverse((child) => {
      if (child.isMesh) child.material.map = texture
    })
    // object.position.y = -95
    scene.add(object)
  }

  const manager = new THREE.LoadingManager(loadModel)
  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total)
  }
  // texture
  const textureLoader = new THREE.TextureLoader(manager)
  var texture = textureLoader.load('texture/default.jpg')
  // let texture = null

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

  const material = new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
  const geometry = new THREE.PlaneBufferGeometry(2000, 2000)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, -100, 0)
  mesh.rotation.x = -Math.PI * 0.5
  mesh.receiveShadow = true
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)
  // document.addEventListener('mousemove', onDocumentMouseMove, false)
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

function render () {
  // camera.position.x += (mouseX - camera.position.x) * 0.05
  // camera.position.y += (-mouseY - camera.position.y) * 0.05
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
