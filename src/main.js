import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VuePreview from 'vue-preview'
 
Vue.use(VuePreview)
 Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
