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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

const router = new VueRouter({
  routes
})

export default router
