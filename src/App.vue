<template>
  <div id="app">
    <aside style="left: 0"></aside>
    <aside style="right: 0"></aside>
    <header></header>
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
   min-height: calc(100vh - 80px);
   max-height: calc(100vh - 80px);
   margin: auto;
   padding: 0 420px;
   header{
     height: 250px;
     background-color: chocolate;
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

 .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }

</style>
