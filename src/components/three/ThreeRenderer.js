const THREE = require('three')

export default (container) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true

  renderer.physicallyCorrectLights = true

  container.appendChild(renderer.domElement)

  return renderer
}
