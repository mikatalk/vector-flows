import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/**
 * This demo is going to be hosted in iframe and needs to be responsive
 */
const handleResize = () => {
  const width = window.innerWidth
  const height = width * 1.2
  try {
    window.parent.postMessage({
      'event-type': 'iframe-content-resize',
      width, 
      height
    },
    document.location.origin)
  } catch (e) {
    // nothing to do here
  }
}
handleResize()
window.addEventListener('resize', handleResize)
