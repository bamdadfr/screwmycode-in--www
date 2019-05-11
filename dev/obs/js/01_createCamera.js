const createCamera = () => {

  camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  )

  camera.position.set(_camera.initPosition.x, _camera.initPosition.y, _camera.initPosition.z)

  camera.lookAt(0, 0, 0,)

}
