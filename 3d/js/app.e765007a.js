(function(e){function n(n){for(var i,o,c=n[0],s=n[1],u=n[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(i=!1)}i&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},r={app:0},a=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="//mikatalk.github.io/vector-flows/3d/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{ref:"canvas-container",staticClass:"canvas-container"}),t("header",[t("span",{staticClass:"prefix"},[e._v("f(x,y,z) = ")]),t("span",{staticClass:"inputs-wrapper"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.input1,expression:"input1"}],class:{invalid:null===e.input1Func},attrs:{type:"text"},domProps:{value:e.input1},on:{input:function(n){n.target.composing||(e.input1=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.input2,expression:"input2"}],class:{invalid:null===e.input2Func},attrs:{type:"text"},domProps:{value:e.input2},on:{input:function(n){n.target.composing||(e.input2=n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.input3,expression:"input3"}],class:{invalid:null===e.input3Func},attrs:{type:"text"},domProps:{value:e.input3},on:{input:function(n){n.target.composing||(e.input3=n.target.value)}}})])])])},a=[],o=(t("498a"),t("d4ec")),c=t("bee2"),s=t("ade3"),u=t("5a89"),l=t("99de"),d=t("7e84"),p=t("262e"),f=function(e){function n(){var e;Object(o["a"])(this,n),e=Object(l["a"])(this,Object(d["a"])(n).call(this,{antialias:!1,alpha:!0})),e.setClearColor(0,0),e.setSize(e.windowWidth,e.windowHeight),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0;var t=e.getContext();if(!t.getExtension("OES_texture_float"))throw alert("client support error - float textures not supported"),new Error("float textures not supported");if(0===t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS))throw alert("client support error - vertex shader cannot read textures"),new Error("vertex shader cannot read textures");return e}return Object(p["a"])(n,e),n}(u["y"]),v=(t("99af"),t("ace4"),t("d3b7"),t("cfc3"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),new u["n"]),m=function(e){return"\n#define PHONG\nvarying vec3 vViewPosition;\nvarying vec2 vUv;\nattribute vec4 instanceQuaternion;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n// custom code:\nuniform float time;\n// uniform vec4 cameraProps;\n// uniform sampler2D levelImageMap;\n// attribute float offset;\nattribute vec4 orientation;\nattribute vec3 offset;\nattribute vec3 gridXYZ;\nattribute float scale;\n// uniform vec3 floorOffset;\nattribute vec3 color;\nvarying vec4 vColor;\nvec3 applyQuaternionToVector( vec4 q, vec3 v ){\n\treturn v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );\n}\n\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t\n  vUv = uv;\n\t\n  vec3 transformed = position;\n  \n  // vColor = vec4(color, (1.0 + sin(transformed.z * 1000.0 + time)) / 2.0);\n  // float a = mod(time - gridXYZ.z / ".concat(e,".0, 1.0);\n  // if (a > 1.0 / ").concat(e,".0) {\n  //   a = 0.8;\n  // } else {\n  //   a = 1.0;\n  // }\n  // vColor = vec4(color, a);\n  // vColor = vec4(color, a);\n  vColor = vec4(\n    gridXYZ.x  / ").concat(e,".0,\n    0.3,\n    // gridXYZ.y  / ").concat(e,".0,\n    0.7,\n    // gridXYZ.z  / ").concat(e,".0,\n  0.6);\n  // a);\n\n  transformed = applyQuaternionToVector(orientation, transformed);\n  transformed += offset;\n  \n  // vColor = vec4(color, 1.0);       //max(0.75, sin(position.y * 0.005 - time * 0.5)));\n\n  \n  // transformed *= vec3(scale, scale, 1.0);\n\n  \n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n")},h="\n#define PHONG\nvarying vec4 vColor;\nvarying vec2 vUv;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform float lifetime;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n  vec4 diffuseColor = vec4( diffuse, opacity );\n  \n  // diffuseColor = vec4(vColor.rgb,0.8);\n  // diffuseColor = vec4(vColor.rgb, vColor.a);\n  // diffuseColor = vColor;\n  // diffuseColor = vec4(vUv.xy,0.5, vColor.a);\n  // diffuseColor = vec4(vUv.xy,0.5, 0.6);\n  diffuseColor = vColor;\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",g=function(e){function n(e){var t;Object(o["a"])(this,n);var i=new u["h"];i.copy(new u["c"](.5,4,3));for(var r=[],a=[],c=[],s=[],p=[],f=[],g=[],_=e,w=e,b=e,x=8,y=x/2,F=x*w/2,O=x*_/2,j=x*b/2,C=0;C<b;C+=1)for(var z=0;z<_;z+=1)for(var k=0;k<w;k+=1)r.push(k*x-F+y,z*x-O+y,C*x-j+y),v.set(0,0,0,0).normalize(),a.push(v.x,v.y,v.z,v.w),f.push(k,z,C),p.push(.1,.1,.1),c.push(x/8);i.setAttribute("offset",new u["g"](new Float32Array(r),3)),i.setAttribute("orientation",new u["g"](new Float32Array(a),4)),i.setAttribute("gridXYZ",new u["g"](new Float32Array(f),3)),i.setAttribute("scale",new u["g"](new Float32Array(c),1)),i.setAttribute("color",new u["g"](new Float32Array(p),3)),i.setAttribute("particleIndex",new u["g"](new Float32Array(s),1)),i.setAttribute("lifetime",new u["g"](new Float32Array(g),2));var A=u["u"].merge([u["p"].phong.uniforms,{time:{value:1},mapper:L}]),L=new u["t"],P=new u["q"]({uniforms:A,vertexShader:m(e),fragmentShader:h,side:u["f"],lights:!0,name:"phong-cones",frustumCulled:!1,blending:u["l"],transparent:!0,alphaTest:.01});return t=Object(l["a"])(this,Object(d["a"])(n).call(this,i,P)),t.receiveShadow=!0,t.castShadow=!0,t.textureSize=e,t}return Object(p["a"])(n,e),Object(c["a"])(n,[{key:"updateFunctions",value:function(e,n,t){for(var i=this.geometry.attributes.orientation.array,r=this.textureSize,a=this.textureSize,o=this.textureSize,c=0,s=(new u["x"],new u["w"],new u["j"],new u["n"],0);s<o;s+=1)for(var l=0;l<r;l+=1)for(var d=0;d<a;d+=1){var p=e(d-a/2,l-r/2,s-o/2),f=n(d-a/2,l-r/2,s-o/2),m=t(d-a/2,l-r/2,s-o/2),h=Math.asin(m),g=-Math.atan2(p,f);v.setFromEuler(new u["d"](h,0,g,"XYZ")),i[c+0]=v.x,i[c+1]=v.y,i[c+2]=v.z,i[c+3]=v.w,1,c+=4}this.geometry.attributes.orientation.needsUpdate=!0}},{key:"loop",value:function(e){this.material.uniforms.time.value=1*e}}]),n}(u["k"]),_=t("4721"),w=function(){function e(n,t,i,r){var a=this;Object(o["a"])(this,e),Object(s["a"])(this,"renderer",void 0),Object(s["a"])(this,"scene",void 0),Object(s["a"])(this,"camera",void 0),Object(s["a"])(this,"clock",void 0),Object(s["a"])(this,"renderCallBack",void 0),Object(s["a"])(this,"loop",(function(){a.renderCallBack=requestAnimationFrame(a.loop),a.render(),a.controls.update()})),Object(s["a"])(this,"handleWindowResize",(function(){a.stageWidth=window.innerWidth,a.stageHeight=window.innerHeight,a.renderer.setSize(a.stageWidth,a.stageHeight),a.camera.aspect=a.stageWidth/a.stageHeight,a.camera.updateProjectionMatrix()})),this.container=n,this.op1=t,this.op2=i,this.op3=r,this.clock=new u["b"],this.renderer=new f,this.container.appendChild(this.renderer.domElement),this.camera=new u["m"](20,window.innerWidth/window.innerHeight,.001,5e4),this.camera.position.set(0,0,500),this.scene=new u["o"],this.scene.position.y=-20,this.createLights(),this.controls=new _["a"](this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=5,this.controls.maxDistance=5e3,this.controls.maxPolarAngle=Math.PI/2;var c=12;this.particles=new g(c),this.scene.add(this.particles),this.addListeners(),this.handleWindowResize(),this.loop()}return Object(c["a"])(e,null,[{key:"initialize",value:function(n,t,i,r){e.instance||(e.instance=new e(n,t,i,r))}},{key:"destroy",value:function(){e.instance&&e.instance.destroy()}},{key:"updateFunctions",value:function(n,t,i){e.instance&&e.instance.updateFunctions(n,t,i)}}]),Object(c["a"])(e,[{key:"createLights",value:function(){var e=new u["a"](16777215,1);this.scene.add(e)}},{key:"render",value:function(){var e=this.clock.getElapsedTime();this.particles.loop(e),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}},{key:"updateFunctions",value:function(e,n,t){this.particles.updateFunctions(e,n,t)}},{key:"destroy",value:function(){window.cancelAnimationFrame(this.renderCallBack),this.simulation.destroy(),this.removeListeners()}},{key:"addListeners",value:function(){window.addEventListener("resize",this.handleWindowResize,!1)}},{key:"removeListeners",value:function(){window.removeEventListener("resize",this.handleWindowResize)}}]),e}();Object(s["a"])(w,"instance",null);var b=t("326a"),x=function(){return 0},y={name:"App",data:function(){return{input1:"cos(x*0.1)-sin(y*0.1) ",input2:"sin(x*0.1)+sin(y*0.1) ",input3:"sin(x*0.1)+sin(z*0.1) ",input1Func:x,input2Func:x,input3Func:x}},mounted:function(){w.initialize(this.$refs["canvas-container"]),this.input1Func=Object(b["a"])("f(x, y, z) = ".concat(this.input1)),this.input2Func=Object(b["a"])("f(x, y, z) = ".concat(this.input2)),this.input3Func=Object(b["a"])("f(x, y, z) = ".concat(this.input3)),w.updateFunctions(this.input1Func,this.input2Func,this.input3Func)},beforeDestroy:function(){w.destroy()},watch:{input1:function(){var e=this.input1.trim().toLowerCase();if(""===e)this.input1Func=x;else{var n="f(x, y, z) = ".concat(e);try{this.input1Func=Object(b["a"])(n),this.sendToTracer()}catch(t){this.input1Func=null}}},input2:function(){var e=this.input2.trim().toLowerCase();if(""===e)this.input2Func=x;else{var n="f(x, y, z) = ".concat(e);try{this.input2Func=Object(b["a"])(n),this.sendToTracer()}catch(t){this.input2Func=null}}},input3:function(){var e=this.input3.trim().toLowerCase();if(""===e)this.input3Func=x;else{var n="f(x, y, z) = ".concat(e);try{this.input3Func=Object(b["a"])(n),this.sendToTracer()}catch(t){this.input3Func=null}}}},methods:{sendToTracer:function(){this.input1Func&&this.input2Func&&this.input3Func&&w.updateFunctions(this.input1Func,this.input2Func,this.input3Func)}}},F=y,O=(t("5c0b"),t("2877")),j=Object(O["a"])(F,r,a,!1,null,null,null),C=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var i=t("9c0c"),r=t.n(i);r.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.e765007a.js.map