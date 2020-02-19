import { Clock, Scene, OrthographicCamera } from 'three'
import Renderer from './Renderer'
import ParticleSystem from './ParticleSystem'

export default class Stage {

  static instance = null
  
  static initialize (container, op1, op2) {
    if (!Stage.instance) {
      Stage.instance = new Stage(container, op1, op2)
    }
  }
  
  static destroy () {
    Stage.instance && Stage.instance.destroy()
  }
  
  static updateFunctions(op1, op2) {
    Stage.instance && Stage.instance.updateFunctions(op1, op2)
  }
  
  // three:
  renderer
  scene
  camera
  clock
  renderCallBack

  constructor (container, op1, op2) {

    this.container = container
    this.op1 = op1
    this.op2 = op2

    this.clock = new Clock()

    this.renderer = new Renderer()
    

    const aspectRatio = 100 / window.innerHeight
    this.camera = new OrthographicCamera( 
      window.innerWidth * aspectRatio / - 2, 
      window.innerWidth * aspectRatio / 2, 
      window.innerHeight * aspectRatio / 2, 
      window.innerHeight * aspectRatio / - 2,
      1, 1000 );
    // this.camera = ne(
    //   /* fov */    70,
    //   /* aspect */ window.innerWidth / window.innerHeight,
    //   /* near */   0.001,
    //   /* far */    50
    // )
    
    this.scene = new Scene()
    
    this.container.appendChild(this.renderer.domElement)
    
    const textureSize = 32
    this.particles = new ParticleSystem(textureSize)
    this.scene.add(this.particles)
   
    
    this.addListeners()
    this.handleWindowResize()
    this.loop()
  }

  loop = () => {
    this.renderCallBack = requestAnimationFrame(this.loop)
    this.render()
  }
    
  render () {
    // console.log(this.video.currentTime)
    this.camera.position.set(0, 0, 100)
    // const delta = this.clock.getDelta() * 1
    // const elapsedTime = this.clock.getElapsedTime()
    // this.particles.material.uniforms.gpgpuOffsets.value = this.gpgpu.simulate(delta, elapsedTime)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }
  
  updateFunctions (op1, op2) {
    this.particles.updateFunctions(op1, op2)
  }

  handleWindowResize = () => {
    this.stageWidth = window.innerWidth
    this.stageHeight = window.innerHeight
    this.renderer.setSize(this.stageWidth, this.stageHeight)
    const camFactor = 15
    this.camera.left = -window.innerWidth / camFactor
    this.camera.right = window.innerWidth / camFactor
    this.camera.top = window.innerHeight / camFactor
    this.camera.bottom = -window.innerHeight / camFactor
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
  