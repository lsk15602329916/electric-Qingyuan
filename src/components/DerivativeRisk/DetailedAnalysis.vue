<template>
  <div class="container" :key="date">
    <header>220KV 坡旗甲线故障预警及衍生风险分析</header>
    <main>
      <div class="left">
        <div>
          <p>
            <span class="options">输电线路通道信息：</span>
            <span>220kV坡旗甲线</span>
          </p>
          <p>
            <span class="options">天气信息：</span>
            <span>雷阵雨</span>
            <span>降雨量 30.3</span>
            <span>风力 4 级</span>
          </p>
          <p>
            <span class="options">环境信息：</span>
            <span>山地</span>
          </p>
          <div>
            <p>
              <span class="options">线路状态：</span>
              <span>设备重要度 <span>一般</span></span>
            </p>
            <p><span class="options" style="opacity: 0">线路状态：</span>用户重要度 <span>一般</span></p>
            <p><span class="options" style="opacity: 0">线路状态：</span>电网风险 <span>关键</span></p>
          </div>
        </div>
        <div class="left-bottom">
          <p>线路历史故障类型及次数：</p>
          <p>雷击 <span style="padding-left: 60px">3</span> 次</p>
          <p>异物挂线 <span style="padding-left: 25px">1</span> 次</p>
        </div>
      </div>
      <div class="right">
        <p>预测发生的故障类型及其概率：</p>
        <p>雷击故障 <span style="padding-left: 20px; color: #F56C6C">23%</span></p>
        <p style="padding-top: 20px">预测故障造成的衍生后果：</p>
        <ul>
          <li style="padding: 10px 15px">(1) 可能造成重要用户停电</li>
        </ul>
      </div>
    </main>
    <div class="report">
      <p style="margin: 15px;font-size: 20px; font-weight: bold;text-align: center">决策方案</p>
      <div style="display: flex;flex-direction: row-reverse;">
        <el-button type="primary" style="margin: 15px"><span style="color: white">生成报告</span></el-button>
      </div>
    </div>
    <footer>
      <div style="display: flex;flex-direction: row-reverse;">
        <el-button
          @click="barShow = true"
          type="primary"
          style="margin: 15px">
          <span style="color: white">衍生风险历史统计</span>
        </el-button>
      </div>
    </footer>
    <transition name="fade">
      <baseBar
        v-if="barShow"
        title="风险等级"
        left="50"
        width="800px"
        height="300px"
        :data="[2, 1, 2, 4, 4, 5, 5, 6, 3, 2, 2, 1]"
        :dataAxis="['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']">
      </baseBar>
    </transition>
  </div>
</template>

<script>
import baseBar from '@components/BaseBar/BaseBar'
export default {
  name: "DetailedAnalysis",
  components: {
    baseBar
  },
  data() {
    return {
      barShow: false,
      date: new Date()
    };
  },
  mounted() {
    this.date = new Date()
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
 .container{
   animation: up 1.5s;
   transition: all .5s ease;
   box-sizing: border-box;
   width: 800px;
   margin: 30px auto;
   padding: 15px;
   display: flex;
   flex-direction: column;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   &:hover{
     box-shadow: 0 4px 6px rgba(0, 0, 0, .32), 0 0 6px rgba(0, 0, 0, .04);
   }
   header{
     text-align: center;
     font-weight: bold;
     font-size: 26px;
     margin-bottom: 25px;
   }
   main{
     display: flex;
     border: 1px solid #E4E7ED;
     padding: 10px;
     p{
       padding: 5px 5px 5px 0;
     }
     .left{
       flex: 50%;
       padding-right: 10px;
       p{
         .options{
           padding-right: 15px;
         }
       }
       .left-bottom{
         padding-top: 10px;
         border-top: 1px solid #EBEEF5;
       }
     }
     .right{
       flex: 50%;
       padding-left: 10px;
       border-left: 1px solid #EBEEF5
     }
   }
   .report{
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: 180px;
     border: 1px solid  #E4E7ED;
     border-top: none;
   }
   footer{
     padding-top: 15px;
   }
 }
 .fade-enter-active, .fade-leave-active {
   transition: opacity 1.5s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }
 @keyframes up {
   0%{
     opacity: 0;
     transform: translate3d(0, 100px, 0);
   }
   100% {
     opacity: 1;
     transform: translate3d(0, 0, 0);
   }
 }
</style>