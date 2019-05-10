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

const xAxis = new THREE.Vector3( 1, 0, 0 )
const yAxis = new THREE.Vector3( 0, 1, 0 )
const zAxis = new THREE.Vector3( 0, 0, 1 )



function init() {

    container = document.querySelector( '#scene-container' )

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x00000 )

    createCameras()
    createControls()
    // createLights()
    createMeshes()
    createRenderer()

    renderer.setAnimationLoop( () => {

        update()
        render()

    } );

}




function createCameras() {

    camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 10000 )
	
    const camera_xPosition = 0
    const camera_yPosition = Math.sin(camera_positionAngle)
    const camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )
    
	camera.rotation.x = camera_rotationAngle  

}


function createControls() {

	/**
	Attention definition de control avec TrackBall empêche le pilotage "manuel" avec camera.rotation.x
	C'est maxi casse couille et ça signifie qu'il faut bien maitriser ses mouvements de caméras 
	*/

    controls = new THREE.OrbitControls( camera, container )
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
    // var planet = new THREE.PlaneBufferGeometry( 20, 20 );
    return {

        planet,

    }

}



function createMaterials() {

    //const planet = new THREE.LineBasicMaterial()

    // const planet = new THREE.LineDashedMaterial({
    //     dashSize: 0.1,
    //     gapSize: 0.1
    // })

    // const planet = new THREE.MeshNormalMaterial() 
    // const planet = new THREE.MeshLambertMaterial( { color: 0xdddddd } )  // Does not work
    const planet = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } ) 
    // const planet = new THREE.MeshPhongMaterial( { color: 0xdddddd, specular: 0x009900, shininess: 30, flatShading: true } ) // Does not work
    // const planet = new THREE.MeshDepthMaterial()
    // const planet = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: false, blending: THREE.AdditiveBlending } ) 

    return {

        planet,

    }

}


function createMeshes() {

    const Group_1 = new THREE.Group()
    scene.add( Group_1 )

    const materials = createMaterials()
    const geometries = createGeometries()

    console.log("geometries",geometries)
    
    // .. Planet ..............................................................

    var planet = new THREE.Mesh( geometries.planet, materials.planet )

    // const planet = new THREE.Line( geometries.planet, materials.planet )
    // planet.computeLineDistances()


    // .. Coronna .............................................................

    const CORONA_PATH = 'js/trial/3D_Assets/Corona.obj'
    
    var loader = new THREE.OBJLoader() // work only with discrete geometry ? Yes only discrete is recognize, work well with blender description
    loader.load(
    // resource URL
    CORONA_PATH,
    // called when resource is loaded
    function ( LoadedCorona ) {

        LoadedCorona.traverse( function( child ) {
            if ( child instanceof THREE.Mesh ) {
                child.material = new THREE.MeshNormalMaterial() 
            }
        } )

        for ( var i = 0; i < 25; i ++ ) {

            const angle_x = Math.random() * Math.PI
            const angle_y = Math.random() * Math.PI
            const angle_z = Math.random() * Math.PI

            var vector = new THREE.Vector3( 0, 0, 1 )
            var origin = new THREE.Vector3( 0, 0, 0 )
            var length = scale
            var hex = 0xffff00            


            vector.applyAxisAngle( xAxis, angle_x ) 
            vector.applyAxisAngle( yAxis, angle_y )
            vector.applyAxisAngle( zAxis, angle_z )


            corona = LoadedCorona.clone() 
            
            corona.scale.set(0.01,0.01,0.01)           

            corona.rotateOnWorldAxis( xAxis, angle_x ) 
            corona.rotateOnWorldAxis( yAxis, angle_y )
            corona.rotateOnWorldAxis( zAxis, angle_z )

            corona.position.x = scale*vector.x
            corona.position.y = scale*vector.y
            corona.position.z = scale*vector.z           
       

            var arrowHelper = new THREE.ArrowHelper( vector, origin, length, hex )
            
            Group_1.add( corona )        
            Group_1.add( arrowHelper )
            
        }   
    
    },)



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



var delta = 0
function render() {

    // SHADERS [BEGIN]

    // .. Shaders .............................................................

    var customUniforms = {
        delta: {value: 0}
    }

    var material = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: document.getElementById('vertexShader2').textContent,
        fragmentShader: document.getElementById('fragmentShader2').textContent
    })

    var geometry = new THREE.BoxBufferGeometry(5, 5, 5, 0, 0, 0)
    var mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    //attribute
    var vertexDisplacement = new Float32Array(geometry.attributes.position.count)

    for (var i = 0; i < vertexDisplacement.length; i ++) {
        vertexDisplacement[i] = Math.sin(i)
    }

    geometry.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1))

    // SHADERS [END]

    delta += 0.1

    //uniform
    mesh.material.uniforms.delta.value = 0.5 + Math.sin(delta) * 0.5

    //attribute
    for (var i = 0; i < vertexDisplacement.length; i ++) {
        vertexDisplacement[i] = 0.5 + Math.sin(i + delta) * 0.25
    }
    mesh.geometry.attributes.vertexDisplacement.needsUpdate = true


    renderer.render( scene, camera )

    requestAnimationFrame(render)

}


function onWindowResize() {

    camera.aspect = container.clientWidth / container.clientHeight

    // update the camera's frustum
    camera.updateProjectionMatrix()

    renderer.setSize( container.clientWidth, container.clientHeight )

}


window.addEventListener( 'resize', onWindowResize )


// ------------------------------------------------------------------------- //



const time_0 = Date.now()
let time_frame = 0

function animate() {

    requestAnimationFrame( animate )

    const time = Date.now() - time_0

    // cameraMotion(time)

    // controls.update() // For Trackball only
    render()

}



function onDocumentMouseWheel( event ) {

    time_frame +=1
    console.log("time_frame", time_frame)
    //cameraMotion(time_frame)
    render()

}

document.addEventListener( 'wheel', onDocumentMouseWheel, false ) // For see problem of fucking pitch




function cameraMotion(time) {

    camera_positionAngle += time * angle_Slope * Math.PI
	

    camera_xPosition = 0
    camera_yPosition = Math.sin(camera_positionAngle)
    camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )

	camera.rotation.x -= time * angle_Slope * Math.PI		
	// camera.lookAt(camera_lookAt) // Good solution but create camera rolling not wanted
    // camera.lookAt(scene.position)
}

init()
animate()