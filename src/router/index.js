import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 首页 3 个路由
// 衍生风险
import DerivativeRisk from "@/components/DerivativeRisk/DerivativeRisk";
// 缺陷发展
import DefectDevelopment from "@/components/DefectDevelopment/DefectDevelopment";
// 故障根因
import FaultCause from "@/components/FaultCause/FaultCause";
import createListSimply from "echarts/src/chart/helper/createListSimply";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/derivative-risk'
  },
  {
    path: '/fault-cause',
    name: 'FaultCause',
    component: FaultCause
  },
  {
    path: '/derivative-risk',
    name: 'DerivativeRisk',
    component: DerivativeRisk
  },
  {
    path: '/defect-development',
    name: 'DefectDevelopment',
    component: DefectDevelopment
  },

]

const requireComponent = require.context(
  // 其组件目录的相对路径
  '@views',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)

// 将驼峰命名法转换为短横线命名法
function getKebabCase( str ) {
  let result =  str.replace( /[A-Z]/g, function( value, key ) {
    return key === 0 ? value.toLowerCase() : '-' + value.toLowerCase()
  })
  return result
}


requireComponent.keys().map(file => {
  const component = requireComponent(file).default || requireComponent(file)
  const name = component.name
  const path = '/' + getKebabCase(name)
  routes.push({
    name,
    path,
    component
  })
  console.log(routes)
})

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router
