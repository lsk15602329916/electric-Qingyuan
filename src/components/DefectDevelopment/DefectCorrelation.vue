<template>
<!-- 图27，点击返回按钮，返回图25 -->
    <div>
        <el-row :gutter="22" style="height:80px;">
            <el-col :span="4">
                <el-tag>缺陷相关性分析</el-tag>
            </el-col>
        </el-row>
        <el-row :gutter = "22">
                <el-col :span="11" >
                    <div v-if="showEcharts">
                        <el-button  plain size="mini" @click="changeBoo">查看详情</el-button>
                        <baseBar
                            title="安全距离不足"
                            :data="[0.6, 0.8, 0.9, 1]"
                            :dataAxis="['丘陵', '大雨', '高温','树木速长']">
                        </baseBar>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div v-if="showTable">
                        <el-button  plain size="mini" @click="changeBoo2">返回</el-button>
                        <el-table
                        class="table"
                        :data="tableData"
                        style="width: 70%"
                        border
                        stripe
                        :cell-style="cellStyle"
                        :header-cell-style='headerStyle'>
                            <el-table-column
                            prop="features"
                            label="特征因素">
                            </el-table-column>
                            <el-table-column
                            prop="support"
                            label="支持度">
                            </el-table-column>
                            <el-table-column
                            prop="confidence"
                            label="置信度">
                            </el-table-column>
                            
                        </el-table>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div>
                        <el-button  plain size="mini">查看详情</el-button>
                        <baseBar
                            title="部件发热"
                            :data="[0.8, 0.7, 0.8, 0.7]"
                            :dataAxis="['高温', '110kV', '丘陵','微气象区']">
                        </baseBar>
                    </div>
                </el-col>
        </el-row>
        <el-row :gutter = "22">
                <el-col :span="11">
                    <div>
                        <el-button  plain size="mini">查看详情</el-button>
                        <baseBar
                            title="劣化、自爆"
                            :data="[3840, 2250, 3390, 711]"
                            :dataAxis="['暴雨', '雾霾', '高温','雷击频繁']">
                        </baseBar>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div>
                        <el-button  plain size="mini">查看详情</el-button>
                        <baseBar
                            title="松脱、位移"
                            :data="[701, 1532, 17, 1537, 9462, 123]"
                            :dataAxis="['大风', '暴雨', '外力破坏','山地',]">
                        </baseBar>
                    </div>
                </el-col>
        </el-row>
        <el-button type="primary" plain class="return" @click="returnTo25">返回</el-button>
    </div>
</template>

<script>
import baseBar from '@components/BaseBar/BaseBar.vue'
export default {
  name: "DefectCorrelation",
  components:{
    baseBar
  },
  data(){
      return{
          showEcharts:true,
          showTable:false,
          tableData:[
              {
                  features:"气温",
                  support:"12",
                  confidence:"0.70"
              },
              {
                  features:"风速",
                  support:"20",
                  confidence:"0.86"
              },
              {
                  features:"降雨量",
                  support:"50",
                  confidence:"0.79"
              },
              {
                  features:"雾霾",
                  support:"60",
                  confidence:"0.83"
              },
              {
                  features:"相对湿度",
                  support:"80",
                  confidence:"0.91"
              },
              {
                  features:"电压等级",
                  support:"24",
                  confidence:"0.88"
              },
              {
                  features:"所处地形",
                  support:"38",
                  confidence:"0.75"
              },
              {
                  features:"特殊区域",
                  support:"88",
                  confidence:"0.85"
              },
              
          ],
           

      }
  },
  methods:{
        returnTo25(){
             this.$emit("close-bars2")
        },
        cellStyle(row,column,rowIndex,columnIndex){
            return 'padding:1px'
        },
        headerStyle(row,column,rowIndex,columnIndex){
            return 'padding:1px'
        },
        changeBoo(){
            this.showEcharts = false
            this.showTable = true
        },
        changeBoo2(){
            this.showEcharts = true
            this.showTable = false
        },
        
  }
}
</script>

<style scoped>
.el-tag{
    margin-left:360px;
    margin-top:20px;
    width:160px;
    text-align:center;
}
.return{
    float:right;
    margin-right:20px;
}
.table{
    margin-left:85px;
   
}
</style>