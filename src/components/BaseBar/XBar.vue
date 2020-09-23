<template>
  <div :id='`baseBar-${bid}`' :style="{
    width: width,
    height: height
  }">
  </div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
  name: "bar",
  props: {
    width: {
      type: String,
      default: '450px'
    },
    height: {
      type: String,
      default: '240px'
    },
    title: {
      type: String,
      require: true
    },
    dataAxis: {
      type: Array,
      require: true
    },
    data: {
      type: Array,
      require: true
    },
    left: {
      type: Number,
      default: 100
    },
    yAxisName: {
      type: String,
      default: ''
    },
    xAxisName: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      bid: 0
    }
  },
  created() {
    // 获取 baseBarId
    this.bid = window.bid ? ++window.bid : (window.bid = 1)
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.querySelector(`#baseBar-${this.bid}`));
    let dataAxis = this.dataAxis;
    let data = this.data;
    let title = `    ${this.title}` // 加几个空格，否则文本不居中
    let yAxisName = this.yAxisName
    let xAxisName = this.xAxisName

   let option = {
     title: {
       x: 'left',
       text: title,
       textStyle: {
         fontSize: 26,
         color: '#606266'
       },
     },
     color: ['#3398DB'],
     tooltip: {
       trigger: 'axis',
       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
       }
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
     },
     xAxis: [
       {
         type: 'category',
         data: dataAxis,
         axisTick: {
           alignWithLabel: true
         }
       }
     ],
     yAxis: [
       {
         type: 'value'
       }
     ],
     series: [
       {
         name: '数据量',
         type: 'bar',
         barWidth: '50%',
         data: data
       }
     ]
   }
   myChart.setOption(option);
  }
}
</script>

<style scoped>

</style>