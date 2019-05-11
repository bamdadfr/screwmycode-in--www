let _time = 0

const animateBackground = () => {

  /**
   * incrementing _time
   * @type {number}
   * @private
   */

  _time += 0.025

  /**
   * osc: oscillator
   * @type {number}
   */

  const osc = (Math.sin(_time) + Math.PI) / (Math.PI ** 0.5)

  backgroundGroup.children[0].scale.set(
    osc,
    osc,
    osc,
  )
}

const animateCamera = () => {

  _camera.angle1 += _mouse.xPos * _mouse.spring * Math.PI
  _camera.angle2 -= _mouse.yPos * _mouse.spring * Math.PI

  camera.position.x = _camera.scale * (Math.sin(_camera.angle1) + Math.cos(_camera.angle2))
  camera.position.y = _camera.scale * Math.sin(_camera.angle2)
  camera.position.z = _camera.scale * Math.cos(_camera.angle2)

  camera.lookAt(0,0,0)

}
