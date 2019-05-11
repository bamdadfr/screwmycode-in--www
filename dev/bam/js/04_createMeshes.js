const createMeshController = () => {

  /**
   * START
   */

  /**
   * creating groups
   * @type {Group}
   */

  backgroundGroup = new THREE.Group()
  frontGroup = new THREE.Group()

  scene.add(
    backgroundGroup,
    frontGroup,
  )

  /**
   * creating background geometries
   * @type {SphereBufferGeometry}
   */

  const backgroundSphere = new THREE.SphereBufferGeometry(
    _scale,
    123,
    123,
  )

  /**
   * creating meshes
   * geometry + material
   * @type {Mesh}
   */

  const backgroundSphereMesh = new THREE.Mesh(
    backgroundSphere,
    new THREE.MeshBasicMaterial({
      wireframe: true,
    })
  )

  /**
   * adding meshes to background group
   */

  backgroundGroup.add(backgroundSphereMesh)

  /**
   * creating front geometries
   * @type {BoxBufferGeometry}
   */

  const frontCube = new THREE.BoxBufferGeometry(
    _scale * _scaleFront,
    _scale * _scaleFront,
    _scale * _scaleFront,
  )

  /**
   * creating meshes
   * geometry + material
   * @type {Mesh}
   */

  const frontCubeMesh = new THREE.Mesh(
    frontCube,
    new THREE.MeshStandardMaterial({
      'color': 0x110000,
      flatShading: true,
    })
  )

  /**
   * adding meshes to front group
   */

  frontGroup.add(frontCubeMesh)

  /**
   * END
   */

}
