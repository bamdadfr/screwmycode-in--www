/**
 * animate background
 * @type {Animation}
 */

const animateBackground = () => {


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

  var hex 
  if (_loop%2 == 0) {
    hex_ = '#' + _grad.color[_frame]
  }  else {
    hex_ = '#' + _grad.colorReversed[_frame]
  }
  
  var color_ = new THREE.Color( hex_ )
  backgroundGroup.children[0].material.color.set(color_)

}

/**
 * animate camera
 * @type {Animation}
 */

const animateCamera = () => {


  // var scale 
  // if (_loop%2 == 0) {
  //   _camera.a += 0.01
  //   _camera.b += 0.001
  //   _camera.c += 0.005
  // }  else {
  //   _camera.a -= 0.01
  //   _camera.b -= 0.001
  //   _camera.c -= 0.005
  // }



  _camera.theta -= _mouse.xMove * _mouse.spring * Math.PI
  _camera.phi -= _mouse.yMove * _mouse.spring * Math.PI
  
  _camera.xPos = _camera.scale * _camera.a * Math.cos(_camera.phi) * Math.cos(_camera.theta)
  _camera.yPos = _camera.scale * _camera.b * Math.sin(_camera.phi) 
  _camera.zPos = _camera.scale * _camera.c * Math.cos(_camera.phi) * Math.sin(_camera.theta)

  camera.position.x = _camera.xPos
  camera.position.y = _camera.yPos
  camera.position.z = _camera.zPos

  camera.lookAt(0,0,0)

}

/**
 * animate intermediate sphere
 * @type {Animation}
 */

const animateIntermediateSphere = () => {

  xDiff = _scale.intermediateT * (camera.position.x - _camera.initPosition.x)
  yDiff = _scale.intermediateT * (camera.position.y - _camera.initPosition.y)
  zDiff = _scale.intermediateT * (camera.position.y - _camera.initPosition.y)

  intermediateGroup.children[0].position.set(xDiff, yDiff, zDiff)

  intermediateGroup.children[0].translateOnAxis(_axis.xAxis,xDiff)
  intermediateGroup.children[0].translateOnAxis(_axis.yAxis,yDiff)
  intermediateGroup.children[0].translateOnAxis(_axis.zAxis,zDiff)

  intermediateGroup.children[0].translate(xDiff, yDiff, zDiff)

}

