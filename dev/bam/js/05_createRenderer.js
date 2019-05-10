function createRenderer () {

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true

  renderer.physicallyCorrectLights = true

  container.appendChild(renderer.domElement)

}

function render () {

  renderer.render(scene, camera)

}
