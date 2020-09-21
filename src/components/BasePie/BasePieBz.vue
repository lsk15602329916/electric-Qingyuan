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
    title: {
        text: '输电线路缺陷类型分布情况',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [ '松脱、位移', '安全距离不足','部件缺损', '部件发热', '标志牌损坏','塔上异物','劣化自爆','锈蚀']
    },
    series: [
        {
            name: '缺陷类型',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 1456, name: '松脱、位移'},
                {value: 10056, name: '安全距离不足'},
                {value: 58, name: '部件缺损'},
                {value: 194, name: '部件发热'}, 
                {value: 830, name: '塔上异物'},
                {value: 471, name: '锈蚀'}, 
                {value: 681, name: '劣化自爆'},
                {value: 925, name: '标志牌损坏'},
                            
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

    myChart.setOption(option);
    let that = this;
     myChart.on('click', function () {
       that.$emit("close-pie")
    });
  }
}
</script>

<style scoped>

</style>