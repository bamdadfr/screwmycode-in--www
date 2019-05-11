// Basic variables
let container
let camera
let controls
let renderer
let scene
let shaders
let delta
let planet

var mouseX = 0, mouseY = 0
var mouseSpring = 0.000001

var SCREEN_WIDTH = window.innerWidth
var SCREEN_HEIGHT = window.innerHeight
var windowHalfX = window.innerWidth/2
var windowHalfY = window.innerHeight/2

// User variables
var scale = 10
var camera_scale = scale + 10
var camera_positionAngle_1 = 0
var camera_positionAngle_2 = 0


// User function
function getRandomArbitrary(min, max) {

  return Math.random() * (max - min) + min

}


function init() {

    container = document.querySelector( '#scene-container' )

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x00000 )

    createRenderer()
    createLights()
    createCameras()
    createControls()
    createMeshes()


    renderer.setAnimationLoop( () => {
        update()
        render()
    } );

}

function createCameras() {

    camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.001, 10000 )

    camera.position.set( 0, 0, -camera_scale)
    camera.lookAt(0,0, 0)
    // camera.position.set( 0, 0, 0 )

}

function createControls() {

    // controls = new THREE.OrbitControls( camera, container )

}

function createLights() {

    const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

    const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
    mainLight.position.set( 10, 10, 10 );

    scene.add( ambientLight, mainLight );

}

function createGeometries() {

    // const planet = new THREE.SphereGeometry( 1*scale, 64, 64 )
    const planet = new THREE.SphereBufferGeometry( 1*scale, 10, 10)
    const cube = new THREE.BoxBufferGeometry( 0.01*scale,0.01*scale ,0.01*scale  )

    return {

        planet,
        cube,

    }

}


function createMaterials() {

    const planet = new THREE.MeshBasicMaterial({

        // color: 0xff0000,
        wireframe: true

    })

    const cube = new THREE.MeshBasicMaterial({

    })

    return {

        planet,

    }

}

function createMeshes() {

    const Group_1 = new THREE.Group()
    scene.add( Group_1 )

    const materials = createMaterials()
    const geometries = createGeometries()

    // .. Planet ..............................................................

    planet = new THREE.Mesh( geometries.planet, materials.planet )
    var cube = new THREE.Mesh( geometries.cube, materials.cube )


    Group_1.add( planet , cube)


}

function createRenderer() {

    renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setSize( container.clientWidth, container.clientHeight )

    renderer.setPixelRatio( window.devicePixelRatio )

    renderer.gammaFactor = 2.2
    renderer.gammaOutput = true

    renderer.physicallyCorrectLights = true

    container.appendChild( renderer.domElement )

}

function update() {

    // console.log('camera', camera.rotation.x)

}

function render() {

    camera_positionAngle_1 += mouseX * mouseSpring * Math.PI
    camera_xPosition_1 = Math.sin(camera_positionAngle_1)
    camera_zPosition_1 = Math.cos(camera_positionAngle_1)

    camera_positionAngle_2 -= mouseY * mouseSpring * Math.PI
    camera_xPosition_2 = Math.cos(camera_positionAngle_2)
    camera_yPosition_2 = Math.sin(camera_positionAngle_2)

    camera_xPosition = camera_scale*(camera_xPosition_1 + camera_xPosition_2)
    camera_yPosition = camera_scale*camera_yPosition_2
    camera_zPosition = camera_scale*camera_zPosition_1

    camera.position.x = camera_xPosition
    camera.position.y = camera_yPosition
    camera.position.z = camera_zPosition

    camera.lookAt(0,0,0)

    // console.log("mouseX",mouseX)
    // camera.position.y = THREE.Math.clamp( camera.position.y + ( - ( mouseY - 200 ) - camera.position.y ) * mouseSpring, -1, 1 );
    // camera.lookAt( scene.position );

    renderer.render( scene, camera )

}

function onWindowResize() {

    camera.aspect = container.clientWidth / container.clientHeight

    // update the camera's frustum
    camera.updateProjectionMatrix()

    renderer.setSize( container.clientWidth, container.clientHeight )

}
window.addEventListener( 'resize', onWindowResize )

document.addEventListener( 'mousemove', onDocumentMouseMove, false )

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX )
    mouseY = ( event.clientY - windowHalfY )

}

function animate() {

    requestAnimationFrame( animate )
    var pitch = 0.025
    oscillation(pitch)

    render()

}


var time_ = 0
function oscillation(pitch) {

    time_ += pitch * 1
    var tmp_Scale = scale + 6*Math.sin(time_)

    planet.scale.set(tmp_Scale,tmp_Scale,tmp_Scale)
    // console.log("tmp_Scale",tmp_Scale)

}




// ------------------------------------------------------------------------- //

init()
animate()
