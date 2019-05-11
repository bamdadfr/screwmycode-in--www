
function update () {
  // scene.children[2].children[1].rotation.z -= 0.01

  // console.log(scene.children[2].position.x)

  // console.log(_mouse)

  animateBackground()

}

window.addEventListener('resize', onWindowResize)

document.addEventListener('mousemove', onDocumentMouseMove, false)

init()

console.log(backgroundGroup)

