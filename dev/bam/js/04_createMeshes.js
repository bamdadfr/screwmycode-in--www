// Material = ce qui va se mettre sur la forme 3D
function createMaterials () {

  const body = new THREE.MeshStandardMaterial({
    // color: 0xff3333, // red
    color: 0xffffff, // red
    flatShading: true,
  })

  // just as with textures, we need to put colors into linear color space
  body.color.convertSRGBToLinear()

  const detail = new THREE.MeshStandardMaterial({
    color: 0x333333, // darkgrey
    flatShading: true,
  })

  detail.color.convertSRGBToLinear()

  return {
    // body,
    // detail,
  }

}

// Geometry = forme 3D
function createGeometries () {

  const nose = new THREE.CylinderBufferGeometry(0.75, 0.75, 3, 12)

  const cabin = new THREE.BoxBufferGeometry(2, 2.25, 1.5)

  const chimney = new THREE.CylinderBufferGeometry(0.3, 0.1, 0.5)

  // we can reuse a single cylinder geometry for all 4 wheels
  const wheel = new THREE.CylinderBufferGeometry(0.4, 0.4, 1.75, 16)
  wheel.rotateX(Math.PI / 2)

  return {
    nose,
    cabin,
    chimney,
    wheel,
  }

}

/*
function createMeshes () {

  // create a Group to hold the pieces of the train
  const train = new THREE.Group()
  scene.add(train)

  const materials = createMaterials()
  const geometries = createGeometries()

  const nose = new THREE.Mesh(geometries.nose, materials.body)
  nose.rotation.z = Math.PI / 2
  nose.position.x = -1

  const cabin = new THREE.Mesh(geometries.cabin, materials.body)
  cabin.position.set(1.5, 0.4, 0)

  const chimney = new THREE.Mesh(geometries.chimney, materials.detail)
  chimney.position.set(-2, 0.9, 0)

  const smallWheelRear = new THREE.Mesh(geometries.wheel, materials.detail)
  smallWheelRear.position.set(0, -0.5, 0)

  const smallWheelCenter = smallWheelRear.clone()
  smallWheelCenter.position.x = -1

  const smallWheelFront = smallWheelRear.clone()
  smallWheelFront.position.x = -2

  const bigWheel = smallWheelRear.clone()
  bigWheel.scale.set(2, 2, 1.25)
  bigWheel.position.set(1.5, -0.1, 0)

  train.add(
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  )

}
*/

const createMeshes = () => {

  const group = new THREE.Group()
  scene.add(group)

  let material = new THREE.LineBasicMaterial({ color: 0x551155 })
  let material2 = new THREE.LineBasicMaterial({ color: 0x555511 })
  const material3 = new THREE.MeshStandardMaterial({
    color: 0x555511,
    flatShading: true,
  })

  let geometry = new THREE.Geometry()

  geometry.vertices.push(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(2, 0, 0),
    new THREE.Vector3(0,0,0)
    )

  let line = new THREE.Line(geometry, material)

  let geometry2 = new THREE.ConeGeometry(2, 2, 17)

  let cone = new THREE.Mesh(geometry2, material3)

  group.add(
    line,
    cone,
  )

}
