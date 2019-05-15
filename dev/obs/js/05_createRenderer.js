const createRenderer = () => {

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)

  renderer.gammaFactor = 2.2
  renderer.gammaOutput = true

  renderer.physicallyCorrectLights = true

  container.appendChild(renderer.domElement)

}

function render () {

	// controls.update()
	// shaderMaterial.uniforms[ 'time' ].value = .00025 * ( Date.now() - _start );
	var delta = 5 * clock.getDelta();
	uniforms[ "time" ].value += 0.2 * delta;
	
  	renderer.render(scene, camera)

}
