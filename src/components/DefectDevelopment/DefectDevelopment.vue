<template>
<div>
  <div class="fake-column">
    <div style="display: inline-block; padding-right: 50px">
        <el-tag
          size="small"
          type="dark"
          v-for="(item,index) in risks"
          :key="index"
          :style="{
          background: item.color,
          border: 'none',
          margin: '12px'
        }"
        >{{item.label}}: {{item.count}} 条
        </el-tag>
      </div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%"
      stripe
      :cell-style="cellStyle">
        <el-table-column
          prop="number"
          label=""
          min-width="4%">
        </el-table-column>
        <el-table-column
          prop="voltage_class"
          label="电压等级"
          min-width="10%"
          :filters="[{text: '220kV', value: '220kV'},{text: '110kV', value: '110kV'}, {text: '500kV', value: '500kV'}]"
          :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
          label="线路名称"
          min-width="15%"
          :filters="[{text: '220kV燕浩甲线', value: '220kV燕浩甲线'}, 
          {text: '110kV堤北甲线', value: '110kV堤北甲线'},
          {text: '110kV凤笔线', value: '110kV凤笔线'},
          {text: '110kV浩莲乙线', value: '110kV浩莲乙线'},
          {text: '110kV英浈线', value: '110kV英浈线'},
          {text: '500kV东花甲线', value: '500kV东花甲线'},
          ]"
          :filter-method="filterHandler">
          <template slot-scope="scope">
            <a @click="showDrawer" class="line">{{scope.row.line_name}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="sector_number"
          label="区段编号"
          min-width="13%">
        </el-table-column>
        <el-table-column
          prop="defectrate_prediction"
          :render-header="renderHeader"
          label="缺陷率 预测"
          min-width="10%">
        </el-table-column>
        <el-table-column
          prop="categories_and_forecasts"
          :render-header="renderHeader"
          label="缺陷类别 及等级预测"
          min-width="17%">
        </el-table-column>
        <el-table-column
          prop="control_team"
          label="管控班组"
          min-width="12%">
        </el-table-column>
        <el-table-column
          prop="scheduled_time"
          label="预测时间"
          min-width="20%">
        </el-table-column>
    </el-table>
  </div>
  <MyLineInfo :drawer='drawer' @true-to-false='changeBoolean'></MyLineInfo>
</div>
</template>

<script>
import MyLineInfo from '@/components/DefectDevelopment/LineInfo.vue'
export default {
  name: "DerivativeRisk",
  components:{MyLineInfo},
  data() {
    return{
      rawHtml:'<div style="line-height:40px"><span style="color:green">正常：250条··</span><span style="color:#66FF00">一般缺陷：65条··</span><span style="color:orange">严重缺陷：20条··</span></span><span style="color:red">危机缺陷：5条</span></div>',
      tableData:[
      {
        number:'1',
        voltage_class:'220kV',
        line_name:'220kV燕浩甲线',
        sector_number:'N23杆塔单元',
        defectrate_prediction:'1%',
        categories_and_forecasts:'部件发热：1',
        control_team:'无',
        scheduled_time:'2019/9/19 07:35:00'
      },
      {
        number:'2',
        voltage_class:'110kV',
        line_name:'110kV堤北甲线',
        sector_number:'N3杆塔',
        defectrate_prediction:'1%',
        categories_and_forecasts:'其他:3',
        control_team:'无',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'3',
        voltage_class:'110kV',
        line_name:'110kV凤笔线',
        sector_number:'N22',
        defectrate_prediction:'2%',
        categories_and_forecasts:'安全距离不足:3',
        control_team:'输电线路二班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'3',
        voltage_class:'110kV',
        line_name:'110kV凤笔线',
        sector_number:'N24',
        defectrate_prediction:'2%',
        categories_and_forecasts:'安全距离不足:3',
        control_team:'输电线路二班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'3',
        voltage_class:'110kV',
        line_name:'110kV凤笔线',
        sector_number:'N24',
        defectrate_prediction:'2%',
        categories_and_forecasts:'安全距离不足:2',
        control_team:'输电线路二班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'4',
        voltage_class:'110kV',
        line_name:'110kV浩莲乙线',
        sector_number:'N4杆塔',
        defectrate_prediction:'1%',
        categories_and_forecasts:'导线:2',
        control_team:'输电线路四班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'5',
        voltage_class:'110kV',
        line_name:'110kV英浈线',
        sector_number:'N5+1杆塔',
        defectrate_prediction:'2%',
        categories_and_forecasts:'安全距离不足:2',
        control_team:'输电三班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'5',
        voltage_class:'110kV',
        line_name:'110kV英浈线',
        sector_number:'N5杆塔',
        defectrate_prediction:'2%',
        categories_and_forecasts:'安全距离不足:2',
        control_team:'输电三班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N88杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'塔上异物：4',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N88杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'机械损伤：4',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N67杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'塔材锈蚀:4',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N71杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'塔材锈蚀:4',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N68杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'松脱、位移:3',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N63杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'塔材及螺栓缺损、松动:3',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },
      {
        number:'6',
        voltage_class:'500kV',
        line_name:'500kV东花甲线',
        sector_number:'N76杆塔',
        defectrate_prediction:'4%',
        categories_and_forecasts:'安全距离不足:2',
        control_team:'输电线路七班',
        scheduled_time:'2020/6/15 10:11:00'
      },


    ],
      
      risks: [{
        label: '正常',
        count: 250,
        color: 'green'
      },{
        label: '一般缺陷',
        count: 65,
        color: 'skyblue'
      },{
        label: '严重缺陷',
        count: 20,
        color: 'orange'
      },{
        label: '危机缺陷',
        count: 5,
        color: 'red'
      }],drawer:false,
    }
  },
  methods: {
    //让表头文字换行
    renderHeader(h, {column}) {
    let header = column.label.split(' ');
    return [h('p', [
      h('p', {}, header[0]),
      h('span', {}, header[1])
    ])];
    },
    //解决单元格合并问题
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      //第一、三、五、七列
        if (columnIndex === 0 || columnIndex === 2 || columnIndex === 4 || columnIndex === 6) {
          //第三行向下合并，共三行
          if (rowIndex  === 2) {
            return {
              rowspan: 3,
              colspan: 1
            };
          }
          //第七行向下合并，共两行
          else if (rowIndex === 6) {
            return {
              rowspan: 2,
              colspan: 1
            }
          } 
          //第九行向下合并，共七行
          else if (rowIndex === 8) {
            return {
              rowspan: 7,
              colspan: 1
            }
          } 
          //被合并的
          else if (rowIndex === 3 ||rowIndex === 4 
          ||rowIndex === 7 
          || rowIndex  === 9 || rowIndex  === 10 || rowIndex  === 11 || rowIndex  === 12 || rowIndex  === 13 || rowIndex  === 14 ){
            return {
              rowspan: 0,
              colspan: 0
            };
          }
          //其他照旧
          else {
            return {
              rowspan: 1,
              colspan: 1
            };
          }
        };
      },
    //表头的筛选功能
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    //改变所有单元格的padding
    cellStyle(row,column,rowIndex,columnIndex){
        //为什么大于三就会崩
      return 'padding:3px'
    },
    //父组件传值给子组件
    showDrawer(){
      this.drawer = true
    },
    //父组件监控子组件
    changeBoolean(){
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.fake-column{
  background-color:white;
}
.el-table{
  font-size:14px;
}
.line{
  color:red;
  cursor:pointer
}
</style>