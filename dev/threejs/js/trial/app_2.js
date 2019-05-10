var renderer
var scene
var camera
var myCanvas = document.getElementById('myCanvas');

//RENDERER
renderer = new THREE.WebGLRenderer({
  canvas: myCanvas, 
  antialias: true
});
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

//SCENE
scene = new THREE.Scene();

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);


//Custom Shader Material
/*
var material = new THREE.ShaderMaterial({
    uniforms: [],
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});
*/


var customUniforms = {
    delta: {value: 0}
};
var material = new THREE.ShaderMaterial({
    uniforms: customUniforms,
    vertexShader: document.getElementById('vertexShader2').textContent,
    fragmentShader: document.getElementById('fragmentShader2').textContent
});



var geometry = new THREE.BoxBufferGeometry(100, 100, 100, 10, 10, 10);
var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -1000;
mesh.position.x = -100;
scene.add(mesh);


var geometry2 = new THREE.SphereGeometry(50, 20, 20);
var mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -1000;
mesh2.position.x = 100;
scene.add(mesh2);


var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
var mesh3 = new THREE.Mesh(geometry3, material);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -100;
scene.add(mesh3);


//attribute
var vertexDisplacement = new Float32Array(geometry.attributes.position.count);

for (var i = 0; i < vertexDisplacement.length; i ++) {
    vertexDisplacement[i] = Math.sin(i);
}

geometry.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));


//RENDER LOOP
render();


var delta = 0;
function render() {

    delta += 0.1;

    //uniform
    mesh.material.uniforms.delta.value = 0.5 + Math.sin(delta) * 0.5;

    //attribute
    for (var i = 0; i < vertexDisplacement.length; i ++) {
        vertexDisplacement[i] = 0.5 + Math.sin(i + delta) * 0.25;
    }
    mesh.geometry.attributes.vertexDisplacement.needsUpdate = true;


    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
