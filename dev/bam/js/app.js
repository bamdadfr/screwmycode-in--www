
function update () {

  animateBackground()
  animateCamera()

  // console.log(_camera)

}

window.addEventListener('resize', onWindowResize)

document.addEventListener('mousemove', onDocumentMouseMove, false)

init()

console.log(backgroundGroup)

