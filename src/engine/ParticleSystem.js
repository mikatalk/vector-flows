import { Mesh, InstancedBufferGeometry, InstancedBufferAttribute, PlaneBufferGeometry, TextureLoader, RawShaderMaterial, Quaternion, Uniform, Color, FrontSide,
  // NormalBlending,
  AdditiveBlending
} from 'three'

const imageURI = "data:image/png;base64,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"

export default class ParticleSystem extends Mesh {

  constructor (textureSize) {

    // const radius = 50
    // const numberOfParticles = textureSize * textureSize
    // create an instanced buffer from a plane buffer geometry 
    const geometry = new InstancedBufferGeometry()
    geometry.copy(new PlaneBufferGeometry(1, 1, 1, 1))
    
    // Add/generate attributes buffers for the geometry
    const offsets = []
    const angles = []
    const scales = []
    const indexes = []
    const lifetimes = []
    // const spacing = 2
    // const halfOffset = textureSize * spacing / 2

    const numberOfRows = textureSize
    const numberOfColumns = textureSize
    const stepSize = 2
    let i = 0
    const offsetX = stepSize * numberOfColumns / 2
    const offsetY = stepSize * numberOfRows / 2
    for (let y = 0; y < numberOfRows; y += 1) {
      for (let x = 0; x < numberOfColumns; x += 1) {

      // for (let i = 0; i < numberOfParticles; i += 1) {
        offsets.push(
          -offsetX + x * stepSize,
          -offsetY + y * stepSize, 0
          // 0, 0, 0
        )
        angles.push(0)//Math.random()*Math.PI)
        scales.push(stepSize)
        indexes.push(i + 1)
        i += 1
        // lifetimes.push(0, 0.5 + Math.random() / 2)
        lifetimes.push(0, 1)
      }
    }
    geometry.setAttribute('offset', new InstancedBufferAttribute(new Float32Array(offsets), 3))
    geometry.setAttribute('angle', new InstancedBufferAttribute(new Float32Array(angles), 1))
    geometry.setAttribute('scale', new InstancedBufferAttribute(new Float32Array(scales), 1))
    geometry.setAttribute('particleIndex', new InstancedBufferAttribute(new Float32Array(indexes), 1))
    geometry.setAttribute('lifetime', new InstancedBufferAttribute(new Float32Array(lifetimes), 2))
      
    
    const textureLoader = new TextureLoader()
    const material = new RawShaderMaterial( {
      uniforms: {
        time: { value: 1.0 },
        orientation: {type: 'v4', value: new Quaternion()},
        inputSamples: {type: 't', value: null },
        gpgpuOffsets: {type: 't', value: null },
        mapper: textureLoader,
        // map: new TextureLoader().load('https://i.imgur.com/h1v0P5s.jpg'),
        colorBase: new Uniform(new Color(0xd9ff0e)),
        colorStart: new Uniform(new Color(0x8674fd)),
        colorPeak: new Uniform(new Color(0x0ed9ff)),
        colorEnd: new Uniform(new Color(0x333333)),
      },
      vertexShader: `
    precision highp float;
  
    #define PI 3.1415926536
    #define PI2 6.28318530718
  
    attribute vec3 position;
    attribute vec3 offset;
    attribute float scale;
    
    varying float vAlpha;
    
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
  
    uniform float time;
  
    attribute float angle;
    attribute vec2 uv;
    varying vec2 vUv;
  
    varying vec4 vSample;
    
    attribute float particleIndex;
  
    uniform sampler2D inputSamples;
    uniform sampler2D gpgpuOffsets;
    varying float vParticleIndex;
  
    uniform vec4 orientation;
    
    vec3 applyQuaternionToVector( vec4 q, vec3 v ){
      return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
    }
  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
  }
  
    void main(){
      vec3 pos = position * vec3(scale, scale, 1.0);
      pos = applyQuaternionToVector(orientation, pos);
      pos.xy = rotate(pos.xy, angle);
      pos = pos + offset;
      vUv = vec2(uv.x, 1.0-uv.y);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
    }
  `,
      fragmentShader: `
    precision highp float;
  
    // varying float vAlpha;
    varying vec4 vSample;  
    varying vec2 vUv;
    varying float vParticleIndex;
    varying vec2 vLifetime;
  
    uniform float time;
  
    uniform vec3 colorBase;
    uniform vec3 colorStart;
    uniform vec3 colorPeak;
    uniform vec3 colorEnd;
    uniform sampler2D mapper;
  
    #define PI 3.1415926536
    #define PI2 6.28318530718
  
  
    float drawBase (in vec2 uv, in float min, in float max) {
      float dist = sqrt(dot(uv, uv));
      if (dist >= max || dist <= min) {
        return 0.0;
      }
      float sm = smoothstep(max, max - 0.01, dist);
      float sm2 = smoothstep(min, min - 0.01, dist);
      float alpha = sm * sm2;
      return (1.0-alpha);
    }
  
    void main() {
  
  vec4 color = texture2D(mapper, vec2(vUv.x, 1.0 - vUv.y));
  
  // if (color.a == 0.0) {
  // discard;
  // }
  gl_FragColor = vec4(0.2,0.1,0.4, min(1.0, color.a * 10.0));
  
   
    }
  `,
      // side: DoubleSide,
      side: FrontSide, // only front since the plane will always face the camera
      transparent: true,
      alphaTest: 0.1,
      color: 0xff00ff,
      // blending: NormalBlending
      // blending: MultiplyBlending
      blending: AdditiveBlending
    })
    
   
      textureLoader.load(imageURI, (texture) => {
      material.uniforms.mapper.value = texture
    })

    
    super(geometry, material)
        
    this.textureSize = textureSize


  }

  updateFunctions (op1, op2) {
    const angles = this.geometry.attributes.angle.array
    const numberOfRows = this.textureSize
    const numberOfColumns = this.textureSize
    let i = 0
    for (let y = 0; y < numberOfRows; y += 1) {
      for (let x = 0; x < numberOfColumns; x += 1) {
        const res1 = op1(x - numberOfColumns/2, y - numberOfRows/2)
        const res2 = op2(x - numberOfColumns/2, y - numberOfRows/2)
        angles[i] = Math.atan2(res1, res2)
        i += 1
      }
    }
    this.geometry.attributes.angle.needsUpdate = true
  }
}
