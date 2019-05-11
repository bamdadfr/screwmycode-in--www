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
    xPos: e.clientX - window.innerWidth * 0.5,
    yPos: e.clientY - window.innerHeight * 0.5,
  }
}
