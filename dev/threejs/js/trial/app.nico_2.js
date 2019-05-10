// Basic variables
let container
let camera
let controls
let renderer
let scene
let shaders
let delta 

// User variables
const scale = 500
const camera_scale = scale + 50

const angle_Slope = 0.0000001

let camera_positionAngle = 0
let camera_rotationAngle = 75 * Math.PI / 180

const xAxis = new THREE.Vector3( 1, 0, 0 )
const yAxis = new THREE.Vector3( 0, 1, 0 )
const zAxis = new THREE.Vector3( 0, 0, 1 )

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
    
    const camera_xPosition = 0
    const camera_yPosition = Math.sin(camera_positionAngle)
    const camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )
    
    camera.rotation.x = camera_rotationAngle  

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
    const planet = new THREE.SphereBufferGeometry( 1*scale, 100, 100 )

    return {

        planet,

    }

}

function loadImage() {

    var manager = new THREE.LoadingManager()
    var image = new THREE.ImageLoader(manager)
    var texture = new THREE.Texture()
    var TEXTURE_PATH 
    TEXTURE_PATH = 'js/trial/Img_Assets/mip-low-res-enlarged.png'
    image.load(TEXTURE_PATH, function(image) {
        texture.image = image
        texture.needsUpdate = true
    })

    return {

        image,

    }

}

function createMaterials() {

    const planet = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending } ) 
    const normal = new THREE.MeshStandardMaterial() 

    var TEXTURE_PATH 
    var texture

    TEXTURE_PATH = 'js/trial/Img_Assets/darker.jpg'    
    texture = new THREE.TextureLoader().load(TEXTURE_PATH)
    const codein = new THREE.MeshBasicMaterial( { map: texture } ) 

    TEXTURE_PATH = 'js/trial/Img_Assets/mip-low-res-enlarged.png'
    texture = new THREE.TextureLoader().load(TEXTURE_PATH)
    const low = new THREE.MeshBasicMaterial( { map: texture , side: THREE.DoubleSide} ) 
    
    return {

        planet,
        codein,
        normal,
        low,

    }

}

function createMeshes() {

    const Group_1 = new THREE.Group()
    scene.add( Group_1 )

    const materials = createMaterials()
    const geometries = createGeometries()
    const images = loadImage()
   
    // .. Planet ..............................................................

    var planet = new THREE.Mesh( geometries.planet, materials.low )

    // var planet = new THREE.Mesh( geometries.planet, shaders.material)

    Group_1.add( planet )

    // .. Coronna .............................................................

    const CORONA_PATH = 'js/trial/3D_Assets/Corona.obj'
    
    var loader = new THREE.ObjectLoader()    
    loader.load(
    // resource URL
    "js/trial/3D_Assets/model.json",

    // var loader = new THREE.OBJLoader() // work only with discrete geometry ? Yes only discrete is recognize, work well with blender description
    // loader.load(
    // // resource URL
    // CORONA_PATH,
    // // called when resource is loaded

    function ( LoadedCorona ) {

        LoadedCorona.traverse( function( child ) {
            if ( child instanceof THREE.Mesh ) {
                child.material = materials.codein
                // child.material.map = images.image

                
            }
        } )

        for ( var i = 0; i < 50; i ++ ) {

            const angle_x = getRandomArbitrary(-1, 1) * Math.PI
            const angle_y = getRandomArbitrary(-1, 1) * Math.PI
            const angle_z = getRandomArbitrary(-1, 1) * Math.PI

            var vector = new THREE.Vector3( 0, 0, 1 )
            var origin = new THREE.Vector3( 0, 0, 0 )
            var length = scale
            var hex = 0xffff00            


            vector.applyAxisAngle( xAxis, angle_x ) 
            vector.applyAxisAngle( yAxis, angle_y )
            vector.applyAxisAngle( zAxis, angle_z )


            corona = LoadedCorona.clone() 
            
            corona.scale.set(10,10,10)           

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

// ------------------------------------------------------------------------- //

const time_0 = Date.now()
let time_frame = 0

function cameraMotion(time) {

    // camera_positionAngle += time * angle_Slope * Math.PI
    camera_positionAngle += 10000*angle_Slope * Math.PI
    
    camera_xPosition = 0
    camera_yPosition = Math.sin(camera_positionAngle)
    camera_zPosition = Math.cos(camera_positionAngle)

    camera.position.set( camera_scale*camera_xPosition, camera_scale*camera_yPosition, camera_scale*camera_zPosition )

    // camera.rotation.x -= time * angle_Slope * Math.PI 
    camera.rotation.x -=  10000*angle_Slope * Math.PI      

}


function animate() {

    requestAnimationFrame( animate )

    const time = Date.now() - time_0

    cameraMotion(time)
    render()

}

// ------------------------------------------------------------------------- //

init()
animate()