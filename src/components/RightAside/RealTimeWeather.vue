<template>
  <div class="container">
    <header>实时天气信息</header>
    <p>温度：35°C</p>
    <p>湿度：80%</p>
    <p>风力：4</p>
    <p>微气象预警：雷雨预警</p>
  </div>
</template>

<script>
export default {
  name: "RealTimeWeather"
}
</script>

<style scoped lang="scss">
 .container{
   margin: 10px 0;
   padding: 15px;
   width: calc(100% - 30px);
   border: 2px solid #409EFF;
   border-radius: 4px;
   text-align: center;
   header{
     color: #409EFF;
     text-align: center;
     font-size: 26px;
     font-weight: bold;
     margin: 15px auto 30px;
   }
   p{
     font-size: 18px;
     padding: 6px 0;
     text-align: left;
     letter-spacing: normal;
   }
 }
</style>