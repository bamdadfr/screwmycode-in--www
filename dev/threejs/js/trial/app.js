// First trial


var camera, scene, renderer // basic variables

init();

function init {


    var geometry, material, mesh // basic variable


    // user variable
    let planet_size = 10 // size of the initial ball on which the camera turn around


    // Scene
    scene = new THREE.Scene()

    // Camera -- Initial Camera position
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Renderer
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )


    // Planet Definition
    geometry = new THREE.SphereGeometry()

    material = new THREE.ShaderMaterial( {
        uniforms: {},
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent
    } )

    var planet = new THREE.Mesh( geometry, material )

    scene.add( sphere )



}