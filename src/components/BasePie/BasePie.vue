<template>
  <div :id='`basePie-${pid}`' :style="{
    width: width,
    height: height
  }">

  </div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
export default {
  name: "BasePie",
  props: {
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      pid: 0
    }
  },
  created() {
    // 获取 baseBarId
    this.pid = window.pid ? ++window.pid : (window.pid = 1)
  },
  mounted() {
    let myChart = echarts.init(document.querySelector(`#basePie-${this.pid}`));

    let option = {
      backgroundColor: 'white',
      title: {
        text: '各故障类型占比',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#303133'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [.4, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            {value: 38, name: '雷击'},
            {value: 16, name: '污闪'},
            {value: 16, name: '鸟害'},
            {value: 22, name: '异物挂线'},
            {value: 3, name: '山火'},
            {value: 5, name: '其他'},
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            color: '#303133'
          },
          labelLine: {
            lineStyle: {
              color: '#303133'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#83bff6',
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };

    myChart.setOption(option);
  }
}
</script>

<style scoped>

</style>