<template>
  <div class="container">
    <div style="text-align: center; margin: 20px auto 40px">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          <span style="color: white">{{ selectedLabel }}</span><i style="color: white" class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in options"
            :command="item"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <header>
      <div style="display: inline-block; padding-right: 50px">
        <el-tag
          size="small"
          type="dark"
          v-for="(item, index) in risks"
          :key="index"
          :style="{
          background: item.color,
          border: 'none',
          margin: '4px'
        }"
        >{{item.label}}: {{item.count}} 个
        </el-tag>
      </div>
      <div style="display: inline-block; font-size: 12px">
        <span style="padding-right: 10px">
          分区检索
          <el-select size="mini" v-model="area" placeholder="请选择" style="width: 90px">
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </span>
        <span>
          分时检索
          <el-select size="mini" v-model="time" placeholder="请选择" style="width: 90px">
          <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </span>
      </div>
    </header>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        fixed
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        prop="voltage"
        label="电压等级"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="线路名称"
        width="120">
        <template slot-scope="scope">
          <el-link type="danger"><span style="color: #F56C6C;">{{ scope.row.name }}</span></el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="degree"
        label="用户重要程度"
        width="140">
      </el-table-column>
      <el-table-column
        prop="forecast"
        label="故障概率预测"
        width="140">
      </el-table-column>
      <el-table-column
        prop="riskLevel"
        label="衍生风险等级"
        width="140">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="team"
        label="班组"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="date"
        label="预测时间"
       >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DerivativeRisk",
  data() {
    return {
      area: '清城区',
      time: '当前',
      areaOptions: [
        {
          label: '清城区',
          value: '清城区'
        }
      ],
      timeOptions: [
        {
          label: '当前',
          value: '当前'
        }
      ],
      selected: '衍生风险预警',
      selectedLabel: '衍生风险预警',
      options: [{
        value: 1,
        label: '衍生风险预警'
      }, {
        value: 2,
        label: '历史故障统计分析'
      }, {
        value: 3,
        label: '衍生风险历史统计'
      }, {
        value: 4,
        label: '衍生风险详细分析'
      }],
      risks: [{
        label: 'I级风险',
        count: 3,
        color: '#F56C6C'
      },{
        label: 'Ⅱ级风险',
        count: 10,
        color: '#E6A23C'
      },{
        label: 'Ⅲ级风险',
        count: 13,
        color: '#f8d86a'
      },{
        label: 'Ⅳ级风险',
        count: 14,
        color: '#409EFF'
      },{
        label: 'Ⅴ级风险',
        count: 10,
        color: '#909399'
      },{
        label: 'Ⅵ级风险',
        count: 5,
        color: '#303133'
      }],
      tableData: [{
        voltage: '220KV',
        name: '库英线',
        degree: '关键',
        forecast: '26%',
        riskLevel: 'I级风险',
        team: '输电线路二班',
        date: '2020/6/30 12:35:00'
      },{
        voltage: '220KV',
        name: '旗回线',
        degree: '关键',
        forecast: '9%',
        riskLevel: 'Ⅱ级风险',
        team: '输电线路一班',
        date: '2020/6/30 12:35:00'
      },{
        voltage: '110KV',
        name: '兴陂线',
        degree: '重要',
        forecast: '20%',
        riskLevel: 'Ⅲ级风险',
        team: '输电线路五班',
        date: '2020/6/30 12:35:00'
      },{
        voltage: '220KV',
        name: '燕浩乙线',
        degree: '重要',
        forecast: '5%',
        riskLevel: 'Ⅲ级风险',
        team: '输电线路四班',
        date: '2020/6/30 12:35:00'
      },{
        voltage: '500KV',
        name: '库从甲线',
        degree: '关注',
        forecast: '4%',
        riskLevel: 'Ⅳ级风险',
        team: '输电线路四班',
        date: '2020/6/30 12:35:00'
      },{
        voltage: '10KV',
        name: '白羊线',
        degree: '一般',
        forecast: '5%',
        riskLevel: 'Ⅴ级风险',
        team: '输电线路八班',
        date: '2020/6/30 12:35:00'
      },]
    }
  },
  methods: {
    handleCommand({ value, label }) {
      this.selected = value
      this.selectedLabel = label
    }
  }
}
</script>

<style scoped lang="scss">
 .container{
   header{
     padding: 15px;
     font-size: 18px;
     border: 1px solid #EBEEF5;
     border-bottom: none;
   }
 }
</style>