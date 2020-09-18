<template>
  <div id="app">
    <aside style="left: 0">
      <baseTable></baseTable>
      <baseBar
        title="杆塔区域"
        :data="[28350, 12893, 4836]"
        :dataAxis="['山地', '林地', '城区']">
      </baseBar>
      <baseBar
        title="衍生风险统计"
        :data="[4, 9, 23, 56, 78, 180]"
        :dataAxis="['Ⅰ级风险', 'Ⅱ级风险', 'Ⅲ级风险', 'Ⅳ级风险', 'Ⅴ级风险', 'Ⅵ级风险']">
      </baseBar>
      <baseBar
        title="缺陷等级设计"
        :data="[2, 3, 17]"
        :dataAxis="['危急', '严重', '一般']">
      </baseBar>
    </aside>
    <aside style="right: 0">
      <warningInformation></warningInformation>
      <weatherForecast></weatherForecast>
      <realTimeWeather></realTimeWeather>
      <lineLoad></lineLoad>
    </aside>
    <header>
      <h1>输电运维决策支持系统</h1>
      <div class="router-container">
        <router-link tag="a" to="/derivative-risk">衍生风险预警</router-link>
        <router-link tag="a" to="/defect-development">缺陷发展预警</router-link>
        <router-link tag="a" to="/fault-cause">故障根因识别</router-link>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
    <div class="background"></div>
  </div>
</template>
<script>
  import baseBar from '@components/BaseBar/BaseBar.vue'
  import baseTable from '@components/BaseTable/BaseTable.vue'
  import warningInformation from '@components/RightAside/WarningInformation.vue'
  import weatherForecast from '@components/RightAside/WeatherForecast.vue'
  import realTimeWeather from "@/components/RightAside/RealTimeWeather";
  import lineLoad from "@/components/RightAside/LineLoad";
  import theme from './utils'
  export default {
    name: 'app',
    components: {
      baseBar,
      baseTable,
      warningInformation,
      weatherForecast,
      realTimeWeather,
      lineLoad
    }
  }
</script>
<style lang="scss" scoped>
 #app{
   position: relative;
   min-width: 1800px;
   height: 100vh;
   min-height: 900px;
   max-height: 100vh;
   margin: auto;
   padding: 0 400px;
   overflow: hidden;
   background-color: rgba(255, 255, 255, .8);
   header{
     padding: 40px;
     height: 180px;
     text-align: center;
     color: #83bff6;
     h1{
       font-size: 2.5rem;
       letter-spacing: .5rem;
       color: #303133;
     }
     .router-container{
       display: flex;
       justify-content: center;
       margin: 10px auto;
       padding: 20px;
       a{
         display: inline-block;
         height: 40px;
         padding: 10px 20px;
         border: 1px solid skyblue;
         transition: all ease .5s;
         &:hover{
           background-color: skyblue;
           color: white;
         }
       }
     }
   }
   .main{
     height: calc(100% - 180px);
   }
   aside{
     position: absolute;
     width: 400px;
     height: 100%;
     padding: 20px 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
   }
 }
 .router-link-active{
   background-color: skyblue;
   color: white;
 }
 .fade-enter-active, .fade-leave-active {
   transition: opacity .25s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }

</style>
