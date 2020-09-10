<template>
  <div id="app">
    <aside style="left: 0"></aside>
    <aside style="right: 0"></aside>
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
  </div>
</template>

<style lang="scss">
 #app{
   position: relative;
   min-width: 1600px;
   max-width: 1800px;
   height: calc(100vh - 80px);
   min-height: 900px;
   max-height: calc(100vh - 80px);
   margin: auto;
   padding: 0 420px;
   background-color: white;
   header{
     padding: 40px;
     height: 250px;
     text-align: center;
     color: darkblue;
     h1{
       font-size: 2.5rem;
       letter-spacing: .5rem;
     }
     .router-container{
       display: flex;
       justify-content: center;
       margin: 40px auto;
       padding: 20px;
       a{
         display: inline-block;
         height: 40px;
         padding: 10px 20px;
         border: 1px solid aquamarine;
       }
     }
   }
   .main{
     height: calc(100% - 250px);
     padding: 20px;
     background-color: darkolivegreen;
   }
   aside{
     position: absolute;
     width: 400px;
     height: 100%;
     background-color: antiquewhite;
   }
 }
 .router-link-active{
   background-color: aquamarine;
 }
 .fade-enter-active, .fade-leave-active {
   transition: opacity .25s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }

</style>
