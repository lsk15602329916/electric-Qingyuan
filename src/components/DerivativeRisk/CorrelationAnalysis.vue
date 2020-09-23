<template>
  <div class="container">
    <header>根因分类相关性分析：基于历史故障的特征重要度排序</header>
    <div style="text-align: center; margin: 10px">
      <el-radio-group v-model="index" size="small">
        <el-radio-button v-for="(item, index) in labelIndex" :label="index" :key="item">{{item}}</el-radio-button>
      </el-radio-group>
    </div>
    <main>
        <x-bar
          :key="`bar-${index}`"
          :title="labelIndex[index]"
          width="800px"
          height="300px"
          :data="barData[index].data"
          :dataAxis="barData[index].axis"
        ></x-bar>
    </main>
    <footer>
      <x-table
        :key="`table-${index}`"
        :tableData='tableData[index]'>
      </x-table>
    </footer>
  </div>
</template>

<script>
import XBar from '@components/BaseBar/XBar.vue'
import XTable from "@/components/BaseTable/XTable";
export default {
  name: "CorrelationAnalysis",
  components: {
    XBar,
    XTable
  },
  data() {
    return {
      index: 2,
      labelIndex: ['雷击', '飘挂物', '外力破坏', '风偏'],
      tableData: [[
        {
          "featureName": "重合闸情况",
          "significance": 191.1136,
          "confidence": 0
        },
        {
          "featureName": "天气标签",
          "significance": 181.2878,
          "confidence": 0
        },
        {
          "featureName": "故障电流一次值",
          "significance": 100.0985,
          "confidence": 0
        },
        {
          "featureName": "重合后保护动作断弧时间(ms)",
          "significance": 88.0707,
          "confidence": 0
        },
        {
          "featureName": "保护正确动作(次)",
          "significance": 67.5874,
          "confidence": 0
        },
        {
          "featureName": "故障类型",
          "significance": 20.3412,
          "confidence": 0
        },
        {
          "featureName": "降水量",
          "significance": 13.2149,
          "confidence": 0.0004
        },
        {
          "featureName": "日照时数",
          "significance": 13.1536,
          "confidence": 0.0004
        },
        {
          "featureName": "8点到20点",
          "significance": 13.0595,
          "confidence": 0.0004
        },
        {
          "featureName": "故障次数(次)",
          "significance": 12.881,
          "confidence": 0.0004
        },
        {
          "featureName": "故障时季",
          "significance": 10.5002,
          "confidence": 0.0014
        },
        {
          "featureName": "20-8点",
          "significance": 7.9438,
          "confidence": 0.0053
        },
        {
          "featureName": "故障电流(二次值)(A)",
          "significance": 7.1875,
          "confidence": 0.0079
        }
      ], [
        {
          "featureName": "最大风速",
          "significance": 9.06887,
          "confidence": 0.00292
        },
        {
          "featureName": "地形",
          "significance": 7.4352,
          "confidence": 0.00694
        },
        {
          "featureName": "故障电流一次值",
          "significance": 100.0985,
          "confidence": 0
        },
        {
          "featureName": "断路器断弧时间(ms)",
          "significance": 7.16248,
          "confidence": 0.00804
        },
        {
          "featureName": "降水量",
          "significance": 5.19763,
          "confidence": 0.02364
        },
        {
          "featureName": "重合闸情况",
          "significance": 3.44229,
          "confidence": 0.06497
        },
        {
          "featureName": "故障次数(次)",
          "significance": 3.08707,
          "confidence": 0.0804
        },
        {
          "featureName": "风力",
          "significance": 2.64062,
          "confidence": 0.10568
        },
        {
          "featureName": "保护正确动作(次)",
          "significance": 2.42119,
          "confidence": 0.12123
        },
        {
          "featureName": "日照时数",
          "significance": 1.78306,
          "confidence": 0.18324
        },
        {
          "featureName": "重合后保护动作断弧时间(ms)",
          "significance": 1.75793,
          "confidence": 0.18634
        },
        {
          "featureName": "故障电流(二次值)(A)",
          "significance": 1.56875,
          "confidence": 0.2118
        },
        {
          "featureName": "故障初保护动作断弧时间(ms)",
          "significance": 1.16818,
          "confidence": 0.28103
        },{
          "featureName": "初次故障持续时间(ms)",
          "significance": 1.16741,
          "confidence": 0.28119
        },{
          "featureName": "最快出口时间(ms)",
          "significance": 0.98583,
          "confidence": 0.32192
        },

      ], [
        {
          "featureName": "最大风速",
          "significance": 9.0689,
          "confidence": 0.0029
        },
        {
          "featureName": "地形",
          "significance": 7.4352,
          "confidence": 0.0069
        },
        {
          "featureName": "断路器断弧时间(ms)",
          "significance": 7.1625,
          "confidence": 0.008
        },
        {
          "featureName": "降水量",
          "significance": 5.1976,
          "confidence": 0.0236
        },
        {
          "featureName": "重合闸情况",
          "significance": 3.4423,
          "confidence": 0.065
        },
        {
          "featureName": "故障次数(次)",
          "significance": 3.0871,
          "confidence": 0.0804
        },
        {
          "featureName": "风力",
          "significance": 2.6406,
          "confidence": 0.1057
        },
        {
          "featureName": "保护正确动作(次)",
          "significance": 2.4212,
          "confidence": 0.1212
        },
        {
          "featureName": "日照时数",
          "significance": 1.7831,
          "confidence": 0.1832
        },
        {
          "featureName": "重合后保护动作断弧时间(ms)",
          "significance": 1.7579,
          "confidence": 0.1863
        },
        {
          "featureName": "故障电流(二次值)(A)",
          "significance": 1.5688,
          "confidence": 0.2118
        },
        {
          "featureName": "故障初保护动作断弧时间(ms)",
          "significance": 1.1682,
          "confidence": 0.281
        },
        {
          "featureName": "初次故障持续时间(ms)",
          "significance": 1.1674,
          "confidence": 0.2812
        },
        {
          "featureName": "最快出口时间(ms)",
          "significance": 0.9858,
          "confidence": 0.3219
        }
      ], [
        {
          "featureName": "天气标签",
          "significance": 67.00223,
          "confidence": 0
        },
        {
          "featureName": "重合闸情况",
          "significance": 31.87784,
          "confidence": 0
        },
        {
          "featureName": "最大风速",
          "significance": 20.15247,
          "confidence": 0.00001
        },
        {
          "featureName": "风力等级",
          "significance": 8.1134,
          "confidence": 0.00484
        },
        {
          "featureName": "降水量",
          "significance": 8.0978,
          "confidence": 0.00488
        },
        {
          "featureName": "最大风速",
          "significance": 8.05348,
          "confidence": 0.00499
        },
        {
          "featureName": "故障时季",
          "significance": 7.04095,
          "confidence": 0.00858
        },
        {
          "featureName": "故障电流(二次值)(A)",
          "significance": 6.04625,
          "confidence": 0.01476
        },
        {
          "featureName": "合于故障持续时间(ms)",
          "significance": 5.25254,
          "confidence": 0.02292
        },
        {
          "featureName": "电压等级",
          "significance": 4.31423,
          "confidence": 0.03903
        },
        {
          "featureName": "总出口(次)",
          "significance": 3.61663,
          "confidence": 0.05859
        },
        {
          "featureName": "故障电流(一次值)(kA)",
          "significance": 3.56617,
          "confidence": 0.06037
        },
        {
          "featureName": "故障初保护动作断弧时间(ms)",
          "significance": 2.50778,
          "confidence": 0.11481
        },
        {
          "featureName": "初次故障持续时间(ms)",
          "significance": 2.50774,
          "confidence": 0.11481
        }
      ]],
      barData: [{
          data: [191.11, 181.29, 100.10, 88.07, 67.59],
          axis: ['重合闸情况', '天气标签', '故障电流一次值', '重合后保护动作断弧时间(ms)', '降水量']
        }, {
          data: [9.07, 7.44, 7.16, 5.20, 3.44],
          axis: ['最大风速', '地形', '断路器断弧时间(ms)', '降水量', '重合闸情况']
        }, {
          data: [78.49, 53.27, 52.31, 43.88, 40.67],
          axis: ['重合闸情况', '重合后保护动作断弧时间(ms)',	'是否跨越区',	'天气标签',	'保护动作次数']
        }, {
          data: [67.00, 31.88, 20.15, 8.11, 8.10],
          axis: ['天气标签',	'重合闸情况',	'最大风速', '风力等级', '降水量']
       }
      ]
    }
  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
  .container{
    margin: 20px;
    padding: 15px;
    animation: up 1.5s;
    transition: all .5s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    &:hover{
      box-shadow: 0 4px 6px rgba(0, 0, 0, .32), 0 0 6px rgba(0, 0, 0, .04);
    }
    header{
      font-size: 22px;
      font-weight: bold;
      color: #303133;
      text-align: center;
      padding: 8px;
    }
    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    footer{
      padding: 20px;
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