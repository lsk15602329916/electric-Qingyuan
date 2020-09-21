<template>
<div>
   <div class="block">
    <span class="demonstration">时间选择：</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <el-table
      :data="tableData"
      style="width: 100%"
      stripe>
      <el-table-column
      prop="number"
      label=""> 
      </el-table-column>
      <el-table-column
      prop="line"
      label="故障线路">
      </el-table-column>
      <el-table-column
      prop="voltage_label"
      label="电压等级"
      :filters="[{text: '110kV', value: '110kV'}, 
          {text: '220kV', value: '220kV'},
          {text: '500kV', value: '500kV'},
          ]"
      :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
      prop="origin"
      label="故障原因">
      </el-table-column>
      <el-table-column
      prop="time"
      label="故障时间">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
            <a class="line" @click="showDrawer">{{scope.row.details}}</a>
          </template>
      </el-table-column>
  </el-table>
  <causeAnalysis :drawer="drawer" @close-drawer="closeLeftDrawer"></causeAnalysis>
</div>
</template>

<script>
import causeAnalysis from '@components/FaultCause/CauseAnalysis.vue'
export default {
  name: "FaultCause",
  components:{
    causeAnalysis
  },
  data(){
    return{
      drawer:false,
      tableData:[
        {
          number:'1',
          line:'潖佛乙线',
          voltage_label:'110kV',
          origin:'雷击',
          time:'2020/5/21 18:37:00',
          details:'查看详情'
        },
        {
          number:'2',
          line:'浩江乙线',
          voltage_label:'110kV',
          origin:'雷击',
          time:'2020/5/17 21:07:54',
          details:'查看详情'
        },
        {
          number:'3',
          line:'库英线',
          voltage_label:'220kV',
          origin:'雷击',
          time:'2020/5/17 15:27:00',
          details:'查看详情'
        },
        {
          number:'4',
          line:'英仙甲线',
          voltage_label:'110kV',
          origin:'飘挂物',
          time:'2020/5/3 11:52:44',
          details:'查看详情'
        },
        {
          number:'5',
          line:'浩龙线',
          voltage_label:'110kV',
          origin:'车船碰线',
          time:'2020/4/24 17:55:00',
          details:'查看详情'
        },
        {
          number:'6',
          line:'英连线',
          voltage_label:'110kV',
          origin:'鸟巢',
          time:'2020/4/24 9:45:00',
          details:'查看详情'
        },
        {
          number:'7',
          line:'库曲甲线',
          voltage_label:'500kV',
          origin:'雷击',
          time:'2020/3/27 13:45:00',
          details:'查看详情'
        },
        {
          number:'8',
          line:'回笔线',
          voltage_label:'110kV',
          origin:'雷击',
          time:'2019/8/7 22:18:57',
          details:'查看详情'
        },
        {
          number:'9',
          line:'燕浩乙线',
          voltage_label:'220kV',
          origin:'雷击',
          time:'2019/7/24 12:24:00',
          details:'查看详情'
        },
        {
          number:'10',
          line:'郎连线',
          voltage_label:'110kV',
          origin:'车船碰线',
          time:'2019/9/1 15:42:11',
          details:'查看详情'
        }

      ],
      value1: [new Date(2019, 6, 23, 10, 10), new Date(2020, 8, 22, 10, 10)],

    }
  
  },
  methods:{
    //表头的筛选功能
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    showDrawer(){
      this.drawer = true
    },
    closeLeftDrawer(){
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.line{
  color:red;
  cursor:pointer
}
</style>