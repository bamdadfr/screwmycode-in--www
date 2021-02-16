export const animateBackground = (t, element) => {

    const time = t + 0.025
    const osc = (Math.sin (time) + Math.PI) / (Math.PI ** 0.5)

    element.scale.set (osc, osc, osc)

    return time

}

export const animateCamera = (camera, cameraSettings, mouse) => {

    cameraSettings.angle1 += mouse.x * mouse.spring * Math.PI

    cameraSettings.angle2 -= mouse.y * mouse.spring * Math.PI

    camera.position.x = cameraSettings.scale * (Math.sin (cameraSettings.angle1) + Math.cos (cameraSettings.angle2))

    camera.position.y = cameraSettings.scale * Math.sin (cameraSettings.angle2)

    camera.position.z = cameraSettings.scale * Math.cos (cameraSettings.angle2)

    camera.lookAt (0, 0, 0)

}
