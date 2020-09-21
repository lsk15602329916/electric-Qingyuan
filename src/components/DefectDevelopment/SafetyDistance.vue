<template>
<!-- 图26，点击返回按钮，返回图25 -->
    <div class="safety-container">
        <el-row :gutter="22" style="height:80px;">
            <el-col :span="4">
                <el-tag>安全距离不足各类分布</el-tag>
            </el-col>
        </el-row>
        <el-row :gutter = "22">
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="安全距离不足缺陷月份分布"
                            :data="[204, 162, 578, 2917,345, 160, 320, 1770, 1773, 1374, 243, 345]"
                            :dataAxis="['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']">
                        </baseBar>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="安全距离不足缺陷地区分布"
                            :data="[956, 800, 900, 500, 489, 480]"
                            :dataAxis="['A地区', 'B地区', 'C地区','D地区','E县','F县']">
                        </baseBar>
                    </div>
                </el-col>
        </el-row>
        <el-row :gutter = "22">
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="安全距离不足缺陷季节分布"
                            :data="[3840,2250,3390,711]"
                            :dataAxis="['春天', '夏天', '秋天','冬天']">
                        </baseBar>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="安全距离不足缺陷地形分布"
                            :data="[701, 1532, 17, 1537, 9462, 123]"
                            :dataAxis="['山地', '高山', '河网','平原','丘陵','水田']">
                        </baseBar>
                    </div>
                </el-col>
        </el-row>
        <el-button type="primary" plain @click="return25">返回</el-button>
    </div>
</template>

<script>
import baseBar from '@components/BaseBar/BaseBar.vue'
export default {
  name: "SafetyDistance",
  components:{
    baseBar
  },
  data(){
      return{

      }
  },
  methods:{
      return25(){
          this.$emit("close-bars")
      }
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
.el-button{
    float:right;
    margin-right:20px;
}
</style>