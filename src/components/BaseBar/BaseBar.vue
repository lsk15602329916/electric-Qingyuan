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
    let yMax = Math.max(...data) + Math.min(...data);
    let yAxisName = this.yAxisName
    let xAxisName = this.xAxisName
    let dataShadow = [];

    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    let option = {
      grid: {
        left: this.left
      },
      title: {
        x: 'center',
        text: title,
        textStyle: {
          fontSize: 22,
          color: '#303133'
        },
      },
      xAxis: {
        name: xAxisName,
        data: dataAxis,
        nameLocation: 'middle',
        nameTextStyle: {
          lineHeight: 30
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: 'black'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        name: yAxisName,
        nameLocation: 'end',
        nameTextStyle: {
          fontSize: 14,
          verticalAlign: 'bottom'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ]
            )
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ]
              )
            }
          },
          data: data
        }
      ]
    };

// Enable data zoom when user click BaseBar.
    var zoomSize = 6;
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
    myChart.setOption(option);
  }
}
</script>

<style scoped>
  div{
    margin: -10px 0;
  }
</style>