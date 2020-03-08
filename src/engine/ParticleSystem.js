import { Mesh,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  TextureLoader,
  // RawShaderMaterial,
  Quaternion,
  // Uniform,
  // Color,
  FrontSide,
  Vector3,
  ConeBufferGeometry,
  NormalBlending,
  // AdditiveBlending,
  Euler,
  // BoxBufferGeometry,
  Matrix4,
  Vector4,
  // DoubleSide,
  // PlaneBufferGeometry,
  // TetrahedronBufferGeometry,
  ShaderLib,
  // CustomBlending,
  UniformsUtils,
  ShaderMaterial
} from 'three'
// import { _ } from 'core-js'

// const imageURI = "data:image/png;base64,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"
const _q = new Quaternion()

const vertexShader = textureSize => `
#define PHONG
varying vec3 vViewPosition;
varying vec2 vUv;
attribute vec4 instanceQuaternion;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
// custom code:
uniform float time;
// uniform vec4 cameraProps;
// uniform sampler2D levelImageMap;
// attribute float offset;
attribute vec4 orientation;
attribute vec3 offset;
attribute vec3 gridXYZ;
attribute float scale;
// uniform vec3 floorOffset;
attribute vec3 color;
varying vec4 vColor;
vec3 applyQuaternionToVector( vec4 q, vec3 v ){
	return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );
}

void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	
  vUv = uv;
	
  vec3 transformed = position;
  
  // vColor = vec4(color, (1.0 + sin(transformed.z * 1000.0 + time)) / 2.0);
  // float a = mod(time - gridXYZ.z / ${textureSize}.0, 1.0);
  // if (a > 1.0 / ${textureSize}.0) {
  //   a = 0.8;
  // } else {
  //   a = 1.0;
  // }
  // vColor = vec4(color, a);
  // vColor = vec4(color, a);
  vColor = vec4(
    gridXYZ.x  / ${textureSize}.0,
    0.3,
    // gridXYZ.y  / ${textureSize}.0,
    0.7,
    // gridXYZ.z  / ${textureSize}.0,
  0.6);
  // a);

  transformed = applyQuaternionToVector(orientation, transformed);
  transformed += offset;
  
  // vColor = vec4(color, 1.0);       //max(0.75, sin(position.y * 0.005 - time * 0.5)));

  
  // transformed *= vec3(scale, scale, 1.0);

  
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`


const fragmentShader = `
#define PHONG
varying vec4 vColor;
varying vec2 vUv;
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
uniform float lifetime;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
  vec4 diffuseColor = vec4( diffuse, opacity );
  
  // diffuseColor = vec4(vColor.rgb,0.8);
  // diffuseColor = vec4(vColor.rgb, vColor.a);
  // diffuseColor = vColor;
  // diffuseColor = vec4(vUv.xy,0.5, vColor.a);
  // diffuseColor = vec4(vUv.xy,0.5, 0.6);
  diffuseColor = vColor;

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	// modulation
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`



export default class ParticleSystem extends Mesh {

  constructor (textureSize) {

    const geometry = new InstancedBufferGeometry()
    // geometry.copy(new ConeBufferGeometry(1, 8, 3))
    geometry.copy(new ConeBufferGeometry(0.5, 4, 3))

    const offsets = []
    const orientations = []
    const scales = []
    const indexes = []
    const colors = []
    const gridXYZs = []
    const lifetimes = []

    const numberOfRows = textureSize
    const numberOfColumns = textureSize
    const numberOfBuckets = textureSize
    const stepSize = 8
    const halfStep = stepSize / 2
    let i = 0
    const offsetX = stepSize * numberOfColumns / 2
    const offsetY = stepSize * numberOfRows / 2
    const offsetZ = stepSize * numberOfBuckets / 2
    for (let z = 0; z < numberOfBuckets; z += 1) {
      for (let y = 0; y < numberOfRows; y += 1) {
        for (let x = 0; x < numberOfColumns; x += 1) {

        // for (let i = 0; i < numberOfParticles; i += 1) {
          offsets.push(
            -offsetX + x * stepSize + halfStep,
            -offsetY + y * stepSize + halfStep,
            -offsetZ + z * stepSize + halfStep
          )
          _q.set(0, 0, 0, 0).normalize();

          orientations.push(
            _q.x, _q.y, _q.z, _q.w
          )

          // mats.push(
          //   0,0,0,1
          // )

          gridXYZs.push(x,y,z)

          colors.push(
            0.1,0.1,0.1
            // 0.5 + x / numberOfBuckets / 2,
            // 0.5 - y / numberOfBuckets / 2,
            // 1 - z / numberOfBuckets / 2
            // y / numberOfRows
            // Math.random(),
            // Math.random(),
            // Math.random()
          )
          scales.push(stepSize / 8)
          // indexes.push(i + 1)
          // i += 1
          // lifetimes.push(0, 0.5 + Math.random() / 2)
          // lifetimes.push(0, 1)
        }
      }
    }
    geometry.setAttribute('offset', new InstancedBufferAttribute(new Float32Array(offsets), 3))
    geometry.setAttribute('orientation', new InstancedBufferAttribute(new Float32Array(orientations), 4))
    geometry.setAttribute('gridXYZ', new InstancedBufferAttribute(new Float32Array(gridXYZs), 3))
    // geometry.setAttribute('mat', new InstancedBufferAttribute(new Float32Array(mats), 4))
    geometry.setAttribute('scale', new InstancedBufferAttribute(new Float32Array(scales), 1))
    geometry.setAttribute('color', new InstancedBufferAttribute(new Float32Array(colors), 3))
    geometry.setAttribute('particleIndex', new InstancedBufferAttribute(new Float32Array(indexes), 1))
    geometry.setAttribute('lifetime', new InstancedBufferAttribute(new Float32Array(lifetimes), 2))
      
    
    const customUniforms = UniformsUtils.merge([
      ShaderLib.phong.uniforms,
      { 
        time: { value: 1.0 },
        mapper: textureLoader,
      }
    ])
    
    
    const textureLoader = new TextureLoader()
    const material = new ShaderMaterial({
      uniforms: customUniforms, 
      vertexShader: vertexShader(textureSize),
      fragmentShader: fragmentShader,
      side: FrontSide,
      // side: DoubleSide,
      // fog: true,
      lights: true,
      // flatShading: true,
      name: 'phong-cones',
      frustumCulled: false,
      blending: NormalBlending,
      // blending: CustomBlending,
      transparent: true,
      alphaTest: 0.01,
      // wireframe: true,
      // opacity: 0.7,
    })
    
    super(geometry, material)
    
    this.receiveShadow = true
    this.castShadow = true

    this.textureSize = textureSize


  }

  updateFunctions (op1, op2, op3) {
    const orientations = this.geometry.attributes.orientation.array
    // const mats = this.geometry.attributes.mat.array
    const numberOfRows = this.textureSize
    const numberOfColumns = this.textureSize
    const numberOfBuckets = this.textureSize
    let i = 0
    let i4 = 0

    const vec4 = new Vector4()
    const vec3 = new Vector3()
    const mat = new Matrix4()
    const quat = new Quaternion()
    for (let z = 0; z < numberOfBuckets; z += 1) {
      for (let y = 0; y < numberOfRows; y += 1) {
        for (let x = 0; x < numberOfColumns; x += 1) {
          const res1 = op1(x - numberOfColumns/2, y - numberOfRows/2, z - numberOfBuckets/2)
          const res2 = op2(x - numberOfColumns/2, y - numberOfRows/2, z - numberOfBuckets/2)
          const res3 = op3(x - numberOfColumns/2, y - numberOfRows/2, z - numberOfBuckets/2)
          const pitch = Math.asin(res3);
          const yaw = -Math.atan2(res1, res2)
          _q.setFromEuler(new Euler(pitch, 0, yaw, 'XYZ'))
          orientations[i4 + 0] = _q.x
          orientations[i4 + 1] = _q.y
          orientations[i4 + 2] = _q.z
          orientations[i4 + 3] = _q.w
          i += 1
          i4 += 4
        }
      }
    }
    this.geometry.attributes.orientation.needsUpdate = true
  }

  loop (elapsedTime) {
    this.material.uniforms.time.value = elapsedTime * 1
  }
}
