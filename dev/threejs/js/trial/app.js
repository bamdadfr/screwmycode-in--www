// First trial

// Basic variables
let container
let camera
let controls
let renderer
let scene
// let cameras = []

// User variables
const scale = 5
const camera_scale = scale + 1

const angle_Slope = 0.0000001

let camera_positionAngle = 0
let camera_rotationAngle = 50 * Math.PI / 180



function init() {

    container = document.querySelector( '#scene-container' )

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x00000 )

    createCameras()
    createControls()
    createLights()
    createMeshes()
    createRenderer()

    renderer.setAnimationLoop( () => {

        update()
        render()

    } );

}


function createCameras() {

    camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 100 )
	
    const camera_xPosition = 0
    const camera_yPosition = Math.sin(camera_positionAngle)
    const camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )
    
	camera.rotation.x = camera_rotationAngle

    

}


function createControls() {

	/**
	Attention definition de control empêche le pilotage "manuel" avec camera.rotation.x
	C'est maxi casse couille et ça signifie qu'il faut bien maitriser ses mouvements de caméras 
	*/

    // controls = new THREE.OrbitControls( camera, container )
	// controls = new THREE.TrackballControls( camera, container )

}


function createLights() {

    const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

    const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
    mainLight.position.set( 10, 10, 10 );

    scene.add( ambientLight, mainLight );

}


function createGeometries() {

    const planet = new THREE.SphereGeometry( 1*scale, 64, 64 )

    return {

        planet,

    }

}


function createMaterials() {


    //const planet = new THREE.LineBasicMaterial()

    const planet = new THREE.LineDashedMaterial({
        dashSize: 0.1,
        gapSize: 0.1
    })

    //const planet = new THREE.MeshBasicMaterial( {color: 0xffff00} )

    return {

        planet,

    };

}


function createMeshes() {

    const Group_1 = new THREE.Group()
    scene.add( Group_1 )

    const materials = createMaterials()
    const geometries = createGeometries()

    //const planet = new THREE.Mesh( geometries.planet, materials.planet )
    const planet = new THREE.Line( geometries.planet, materials.planet )
    planet.computeLineDistances()

    Group_1.add(

        planet,

    )

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

    renderer.render( scene, camera )
    

}


function onWindowResize() {

    camera.aspect = container.clientWidth / container.clientHeight

    // update the camera's frustum
    camera.updateProjectionMatrix()

    renderer.setSize( container.clientWidth, container.clientHeight )

}


window.addEventListener( 'resize', onWindowResize )


// ------------------------------------------------------------------------------------------------------------------ //



const time_0 = Date.now()
let time_frame = 0

function animate() {

    requestAnimationFrame( animate )

    const time = Date.now() - time_0

    cameraMotion(time)

    // controls.update() // For Trackball only
    render()

}



function onDocumentMouseWheel( event ) {

    time_frame +=1
    console.log("time_frame", time_frame)
    //cameraMotion(time_frame)
    render()

}

document.addEventListener( 'wheel', onDocumentMouseWheel, false ) // For see problem of fucking rolling




function cameraMotion(time) {

    camera_positionAngle += time * angle_Slope * Math.PI
	

    camera_xPosition = 0
    camera_yPosition = Math.sin(camera_positionAngle)
    camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )
	camera.rotation.x -= time * angle_Slope * Math.PI		
	// camera.lookAt(camera_lookAt) // Good solution but create camera rolling not wanted

}

init()
animate()