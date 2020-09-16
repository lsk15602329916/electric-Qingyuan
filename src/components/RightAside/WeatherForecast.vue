<template>
  <div class="container">
    <header>天气预报信息</header>
    <p>未来 24 小时天气：晴 <span><i class="el-icon-sunrise-1"></i></span></p>
    <p>未来 24 小时前 12 小时天气：晴朗 <span><i class="el-icon-sunset"></i></span></p>
    <p>未来 24 小时后 12 小时天气：多云 <span><i class="el-icon-partly-cloudy"></i></span></p>
  </div>
</template>

<script>
export default {
  name: "WeatherForecast"
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
   i{
     color: #409EFF;
     font-size: 26px;
   }
   p{
     font-size: 18px;
     padding: 6px 0;
     text-align: left;
     letter-spacing: normal;
     display: flex;
     align-items: center;
     span{
       padding-left: 6px;
     }
   }
 }
</style>