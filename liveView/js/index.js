let camera
let scene
let renderer
let geometry
let material
let mesh
let container

function init () {

  let light

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  //camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1

  scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xf0f0f0 )

  light = new THREE.DirectionalLight( 0xffffff, 1 )
  light.position.set( 1, 1, 1 ).normalize()
  scene.add( light )


  geometry = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2)

  for ( var i = 0; i < 100; i ++ ) {
    var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
    //var object = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial();
    object.position.x = Math.random() * 800 - 400;
    object.position.y = Math.random() * 800 - 400;
    object.position.z = Math.random() * 800 - 400;
    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;
    object.scale.x = Math.random() + 0.5;
    object.scale.y = Math.random() + 0.5;
    object.scale.z = Math.random() + 0.5;
    scene.add( object );
  }


  //material = new THREE.MeshNormalMaterial()

  //mesh = new THREE.Mesh(geometry, material)
  //scene.add(mesh)


  raycaster = new THREE.Raycaster();


  renderer = new THREE.WebGLRenderer();
  //renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setSize(window.innerWidth, window.innerHeight)
  //document.body.appendChild(renderer.domElement)

  container.appendChild( renderer.domElement );


}

function animate () {
  requestAnimationFrame(animate)

  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.02
  //mesh.translation.x += 0.01

  renderer.render(scene, camera)
}

init()
//animate()
