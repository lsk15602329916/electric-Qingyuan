<template>
  <div class="container">
    <div class="optional-bar">
      <header>
        <span style="font-size: 12px; padding-right: 15px">时间选择：</span>
        <el-select
          size="mini"
          style="width: 120px"
          v-model="timeValue"
          placeholder="请选择">
          <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </header>
      <baseBar
        title="总时段"
        yAxisName="故障率"
        :data="[0.03, 0.05, 0.07, 0.05, 0.1, 0.16, 0.15, 0.19, 0.072, 0.05, 0.06, 0.07]"
        :dataAxis="['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']"
      ></baseBar>
    </div>
    <div class="optional-bar">
      <header>
        <span style="font-size: 12px; padding-right: 15px">地区选择：</span>
        <el-select
          size="mini"
          style="width: 120px"
          v-model="areaValue"
          placeholder="请选择">
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </header>
      <baseBar
        title="总地域"
        yAxisName="故障率"
        :data="[0.067, 0.12, 0.253, 0.133, 0.08, 0.173]"
        :dataAxis="['A地区', 'B地区', 'C地区', 'D地区', 'E县', 'F县']"
      ></baseBar>
    </div>
    <div class="bottom">
      <div class="optional-bar">
        <basePie
          width="500px"
          height="350px"
        ></basePie>
      </div>
      <div class="optional-bar" @click="aa">
        <header>
          <span style="font-size: 12px; padding-right: 15px">地区选择：</span>
          <el-select
            size="mini"
            style="width: 160px"
            v-model="index"
            placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </header>
        <baseBar
          :key="index"
          height="300px"
          :title="barOptions[index].title"
          :data="barOptions[index].data"
          :dataAxis="barOptions[index].dataAxis">
        </baseBar>
      </div>
    </div>
  </div>
</template>

<script>
import baseBar from '@components/BaseBar/BaseBar'
import basePie from '@components/BasePie/BasePie'
export default {
  name: "HistoricalFailure",
  components: {
    baseBar,
    basePie
  },
  data() {
    return {
      index: 1,
      timeValue: '',
      areaValue: '',
      typeValue: '',
      areaOptions: [{
        value: '清城区',
        label: '清城区'
      },],
      timeOptions: [{
        value: '当前',
        label: '当前'
      },],
      typeOptions: [{
        value: 0,
        label: '故障类型统计图'
      },{
        value: 1,
        label: '故障按电压等级统计'
      },{
        value: 2,
        label: '故障按月份统计'
      },{
        value: 3,
        label: '故障按地形统计'
      },{
        value: 4,
        label: '故障按区域统计'
      },],
      barOptions: [
        {
          title: '故障类型统计图',
          data: [109, 23, 48, 1, 2, 1, 9],
          dataAxis: ['雷击', '飘挂物', '车床碰线', '火灾', '树闪', '鸟害', '其他']
        },
        {
          title: '故障按电压等级统计',
          data: [111, 69, 11],
          dataAxis: ['110KV', '220KV', '500KV']
        },
        {
          title: '故障按月份统计',
          data: [36, 18, 137],
          dataAxis: ['晴天', '雨天', '雷雨天']
        },
        {
          title: '故障按地形统计',
          data: [114, 6, 50, 23],
          dataAxis: ['平原', '水田', '丘陵', '山地']
        },
        {
          title: '故障按区域统计',
          data: [38, 28, 20, 45, 33],
          dataAxis: ['A地区', 'B地区', 'C地区', 'D县', 'E县']
        },
      ]
    }
  },
  methods: {
    aa() {
      console.log(this.index)
    }
  }
}
</script>

<style scoped lang="scss">
 .container{
   border: 1px solid #DCDFE6;
  .optional-bar{
    display: inline-block;
    text-align: right;
    width: 50%;
    min-width: 400px;
    padding: 15px;
    header{
      padding-left: 25px;
      margin-bottom: 20px;
    }
  }
   .bottom{
     display: flex;
     justify-content: space-between;
     width: 100%;
     height: 400px;
   }
 }
</style>