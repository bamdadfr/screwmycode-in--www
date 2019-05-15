// function vertexShader() {
//   return `
//     varying vec3 vUv; 
//     varying vec4 modelViewPosition; 
//     varying vec3 vecNormal;

//     void main() {
//       vUv = position; 
//       vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
//       vecNormal = (modelViewMatrix * vec4(normal, 0.0)).xyz; //????????
//       gl_Position = projectionMatrix * modelViewPosition; 
//     }
//   `
// }



// function vertexShader() {
//   return `
//     varying vec2 vUv;

//     void main() {

//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

//     }
//   `
// }



function vertexShader() {
  // Include the Ashima code here!
  return `
    uniform vec2 uvScale;
    varying vec2 vUv;
    void main()
    {
      vUv = uvScale * uv;
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      gl_Position = projectionMatrix * mvPosition;
    }
  `
}


// function vertexShader() {
//   return `
//     varying vec2 vUv;
//     void main()
//     {
//       vUv = uv;
//       vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
//       gl_Position = projectionMatrix * mvPosition;
//     }
//   `
// }