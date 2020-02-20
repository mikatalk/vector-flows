import { Clock, Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshBasicMaterial, AxesHelper, AmbientLight, DirectionalLight, PointLight } from 'three'
import Renderer from './Renderer'
import ParticleSystem from './ParticleSystem'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class Stage {

  static instance = null
  
  static initialize (container, op1, op2, op3) {
    if (!Stage.instance) {
      Stage.instance = new Stage(container, op1, op2, op3)
    }
  }
  
  static destroy () {
    Stage.instance && Stage.instance.destroy()
  }
  
  static updateFunctions(op1, op2, op3) {
    Stage.instance && Stage.instance.updateFunctions(op1, op2, op3)
  }
  
  // three:
  renderer
  scene
  camera
  clock
  renderCallBack

  constructor (container, op1, op2, op3) {

    this.container = container
    this.op1 = op1
    this.op2 = op2
    this.op3 = op3

    this.clock = new Clock()

    this.renderer = new Renderer()
    this.container.appendChild(this.renderer.domElement)
    
    this.camera = new PerspectiveCamera(
      /* fov */    120,
      /* aspect */ window.innerWidth / window.innerHeight,
      /* near */   0.001,
      /* far */    50000
    )
    this.camera.position.set(0, 0, 100)

    this.scene = new Scene()
    this.scene.position.y = -20
    
    this.createLights()

    // const light = new AmbientLight(0xffffff, 0.7)
    // this.scene.add(light)
    // const directionalLight = new DirectionalLight(0x00ff00, 1.75)
    // this.scene.add(directionalLight)
    // directionalLight.position.x = this.scene
    // directionalLight.target = this.scene
    // // this.camera.position.x = 0
    // // this.camera.position.y = 2
    // // this.camera.position.z = 20
    // // this.camera.lookAt(
    // //   this.scene.position.x,
    // //   this.scene.position.y ,
    // //   this.scene.position.z
    // // )


    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    this.controls.dampingFactor = 0.05
    this.controls.screenSpacePanning = false
    this.controls.minDistance = 5
    this.controls.maxDistance = 5000
    this.controls.maxPolarAngle = Math.PI / 2

// const mesh = new Mesh(
//   new BoxGeometry(10,10,10),
//   new MeshBasicMaterial({color: 0x00ffff})
// )
// this.scene.add(mesh)
    
    const textureSize = 12
    this.particles = new ParticleSystem(textureSize)
    this.scene.add(this.particles)
   
    
//     const axesHelper = new AxesHelper(50)
//     this.scene.add(axesHelper)
//     //reset axes colors
// var colors = axesHelper.geometry.attributes.color
// colors.setXYZ( 0, 0, 0, 0 ); // index, R, G, B
// colors.setXYZ( 1, 0, 0, 0 ); // red
// colors.setXYZ( 2, 0, 0, 0 );
// colors.setXYZ( 3, 0, 0, 0 ); // green
// colors.setXYZ( 4, 0, 0, 0 );
// colors.setXYZ( 5, 0, 0, 0 ); // blue


    this.addListeners()
    this.handleWindowResize()
    this.loop()
  }

  createLights () {
    const light = new AmbientLight(0xffffff, 0.7)
    this.scene.add(light)
   
// const light1 = new PointLight(0xff0000, 10, 200)
// light1.position.set(100, 0, 0)
// this.scene.add(light1)

// const light2 = new PointLight(0x00ff00, 10, 200)
// light2.position.set(0, 100, 0)
// this.scene.add(light2)

// const light3 = new PointLight(0x0000ff, 10, 200)
// light3.position.set(0, 0, -100)
// this.scene.add(light3)

    // // A directional light shines from a specific direction. 
    // // It acts like the sun, that means that all the rays produced are parallel. 
    // this.shadowLight = new DirectionalLight(0x00ff00, 10)
    // this.shadowLight.position.set(0, 0, 10)
    // this.shadowLight.lookAt(0,0,0)
  
    // // Allow shadow casting 
    // this.shadowLight.castShadow = true
  
    // // define the visible area of the projected shadow
    // this.shadowLight.shadow.camera.left = -200
    // this.shadowLight.shadow.camera.right = 200
    // this.shadowLight.shadow.camera.top = 200
    // this.shadowLight.shadow.camera.bottom = -200

    // this.shadowLight.shadow.camera.near = 1
    // this.shadowLight.shadow.camera.far = 300

    // this.shadowLight.shadow.mapSize.width = 512
    // this.shadowLight.shadow.mapSize.height = 512

    // this.scene.add(this.shadowLight)
  }

  loop = () => {
    this.renderCallBack = requestAnimationFrame(this.loop)
    this.render()
    this.controls.update()
  }
    
  render () {
    // console.log(this.video.currentTime)
    // this.camera.position.set(0, 0, 100)
    // const delta = this.clock.getDelta() * 1
    const elapsedTime = this.clock.getElapsedTime()
    // this.particles.loop(elapsedTime)
    this.particles.loop(elapsedTime)
    // this.particles.material.uniforms.gpgpuOffsets.value = this.gpgpu.simulate(delta, elapsedTime)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }
  
  updateFunctions (op1, op2, op3) {
    this.particles.updateFunctions(op1, op2, op3)
  }

  handleWindowResize = () => {
    this.stageWidth = window.innerWidth
    this.stageHeight = window.innerHeight
    this.renderer.setSize(this.stageWidth, this.stageHeight)
    this.camera.aspect = this.stageWidth / this.stageHeight
    this.camera.updateProjectionMatrix()
  }

  destroy () {
    window.cancelAnimationFrame(this.renderCallBack)
    this.simulation.destroy()
    this.removeListeners()
  }

  addListeners () {
    window.addEventListener('resize', this.handleWindowResize, false)
  }

  removeListeners () {
    window.removeEventListener('resize', this.handleWindowResize)
  }

}
  