let container
let camera
let scene
let raycaster
let renderer
const mouse = new THREE.Vector2()
let INTERSECTED
const radius = 100
let theta = 0

init()
animate()

function init () {

  container = document.createElement('div')
  document.body.appendChild(container)

  console.log("texte:", container)

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 200, 10000000)
  scene = new THREE.Scene()

  console.log('scene instanciation', scene)

  scene.background = new THREE.Color(0xf0f0f0)
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)
  const geometry = new THREE.BoxGeometry(20, 20, 20)
  for (let i = 0; i < 2000; i++) {
    const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }))
    object.position.x = Math.random() * 800 - 400
    object.position.y = Math.random() * 800 - 400
    object.position.z = Math.random() * 800 - 400
    object.rotation.x = Math.random() * 2 * Math.PI
    object.rotation.y = Math.random() * 2 * Math.PI
    object.rotation.z = Math.random() * 2 * Math.PI
    object.scale.x = Math.random() + 0.5
    object.scale.y = Math.random() + 0.5
    object.scale.z = Math.random() + 0.5
    scene.add(object)
  }
  raycaster = new THREE.Raycaster()
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)
  document.addEventListener('mousemove', onDocumentMouseMove, false)
  //
  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onDocumentMouseMove (event) {
  event.preventDefault()
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

//
function animate () {


  scene.traverse(node => {
    if (node instanceof THREE.Mesh) {
      node.rotation.x += 0.005
      node.rotation.y += 0.005
      node.rotation.z += 0.005
    }
  })


  requestAnimationFrame(animate)
  render()
}

function render () {
  theta += 0.1
  camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta))
  camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta))
  camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta))
  camera.lookAt(scene.position)
  camera.updateMatrixWorld()
  // find intersections
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
      INTERSECTED = intersects[0].object
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex()
      INTERSECTED.material.emissive.setHex(0xff0000)
    }
  } else {
    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
    INTERSECTED = null
  }
  renderer.render(scene, camera)
}
