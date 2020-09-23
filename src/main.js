import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// ECharts
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
