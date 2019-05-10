function createCamera () {

  camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100)
  camera.position.set(-5, 5, 7)

}
