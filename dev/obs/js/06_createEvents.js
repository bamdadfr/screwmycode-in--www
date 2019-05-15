const onWindowResize = () => {

  camera.aspect = container.clientWidth / container.clientHeight

  // update the camera's frustum
  camera.updateProjectionMatrix()

  renderer.setSize(container.clientWidth, container.clientHeight)

}

const onDocumentMouseMove = (e) => {

  /**
   * event listener function
   * e: mouse event
   * @type {{event}}
   * @private
   */

  _mouse = {
    ..._mouse,
    xPos: e.clientX - _screen.xMax,
    yPos: e.clientY - _screen.yMax,
  }
  _mouse.xMove = Math.sign(_mouse.xPos) * (Math.abs(_mouse.xPos) / _screen.xMax)
  _mouse.yMove = Math.sign(_mouse.yPos) * (Math.abs(_mouse.yPos) / _screen.yMax)
}
