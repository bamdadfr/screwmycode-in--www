let _time = 0
let _frame = 0
let _loop = 0


/**
 * animate background
 * @type {Animation}
 */

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

  /**
   * incrementing _frame
   * @type {int}
   * @private
   */

  _frame += 1

  /**
   * col: color
   * @type {HEX color}
   */

  if ( _frame >= _grad.color.length)  {
    _loop += 1
    _frame = 0
  }

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

  // _camera.angle1 += _mouse.xPos * _mouse.spring * 2*Math.PI
  // _camera.angle2 -= _mouse.yPos * _mouse.spring * 2*Math.PI

  // _camera.xPos_fromAngle1 = Math.sin(_camera.angle1 )
  // _camera.zPos_fromAngle1 = Math.cos(_camera.angle1 )

  // _camera.zPos_fromAngle2 = Math.cos(_camera.angle2)
  // _camera.yPos_fromAngle2 = Math.sin(_camera.angle2)

  // console.log("_mouse.xPos",_mouse.xPos)
  // console.log("_mouse.yPos",_mouse.yPos)

  // camera.position.x = _camera.scale * _camera.xPos_fromAngle1
  // // camera.position.z = _camera.scale * (_camera.zPos_fromAngle1)
  // camera.position.y = _camera.scale * _camera.yPos_fromAngle2
  // // camera.position.z = _camera.scale * (_camera.zPos_fromAngle2)

  // // camera.position.z = _camera.scale * (_camera.zPos_fromAngle1 + _camera.zPos_fromAngle2)
  // camera.position.z = _camera.scale * _camera.zPos_fromAngle1 * _camera.zPos_fromAngle2


  _camera.angle1 += _mouse.xPos * _mouse.spring * 2*Math.PI
  _camera.angle2 += _mouse.xPos * _mouse.spring * Math.PI

  a = 10
  c = 5

  x = a * Math.cos(_camera.angle1 ) * Math.sin(_camera.angle2)
  camera.position.x = _camera.scale * x 

  z = c * Math.cos(_camera.angle2)

  camera.position.z = _camera.scale * z 

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

  // intermediateGroup.children[0].translateOnAxis(_axis.xAxis,xDiff)
  // intermediateGroup.children[0].translateOnAxis(_axis.yAxis,yDiff)
  // intermediateGroup.children[0].translateOnAxis(_axis.zAxis,zDiff)

  // intermediateGroup.children[0].translate(xDiff, yDiff, zDiff)

}

