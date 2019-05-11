/* eslint-disable */

export const animateBackground = (time, element) => {
  const t = time + 0.025

  const osc = (Math.sin(t) + Math.PI) / (Math.PI ** 0.5)

  element.scale.set(osc, osc, osc)

  return t
}

export const animateCamera = (camera, cameraSettings, mouse) => {
  cameraSettings.angle1 += mouse.x * mouse.spring * Math.PI
  cameraSettings.angle2 -= mouse.y * mouse.spring * Math.PI

  camera.position.x = cameraSettings.scale * (Math.sin(cameraSettings.angle1) + Math.cos(cameraSettings.angle2))
  camera.position.y = cameraSettings.scale * Math.sin(cameraSettings.angle2)
  camera.position.z = cameraSettings.scale * Math.cos(cameraSettings.angle2)

  camera.lookAt(0, 0, 0)
}
