function onWindowResize () {

  camera.aspect = container.clientWidth / container.clientHeight

  // update the camera's frustum
  camera.updateProjectionMatrix()

  renderer.setSize(container.clientWidth, container.clientHeight)

}
