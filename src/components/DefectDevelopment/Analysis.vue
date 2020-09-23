<template>
<!-- 图25 历史统计分析 -->
    <div>
        <el-drawer
            :visible.sync="showAnalysis"
            :with-header="false"
            size="50%">
            <div class="container" v-if="showCpn">
            <el-row :gutter = "22">
                <el-col :span="11">
                    <div class="header-container">
                        <el-select size="mini" v-model="select" placeholder="请选择" style="width: 90px" >
                            <el-option
                            class="header-select"
                            v-for="item in yearSelect"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div class="header-container">
                        <el-button 
                        class="header-button"
                        type="primary" size="small" plain
                        @click="showPhoto27"
                        >缺陷相关性分析</el-button>
                    </div>
                </el-col>
                
            </el-row>
            <el-row :gutter = "22">
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="缺陷地区分布情况"
                            :data="[956, 800, 900, 500, 489, 480]"
                            :dataAxis="['A地区', 'B地区', 'C地区','D地区','E县','F县']">
                        </baseBar>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div>
                        <baseBar
                            title="缺陷时段分布情况"
                            :data="[1157, 787, 2164, 4616, 2176, 1731, 1724, 5073, 4029, 3064, 2048, 2335]"
                            :dataAxis="['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']">
                        </baseBar>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter = "24">
                <el-col :span="12">
                    <div>
                        <basePieBz @close-pie='changeBoolean'>
                        </basePieBz>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div>
                        <el-table
                            :data="tableData"
                            style="width: 100%"
                            stripe>
                            <el-table-column
                                prop="type"
                                label="缺陷类型"
                                min-width="30%">
                            </el-table-column>
                            <el-table-column
                                prop="percent"
                                label="缺陷占比"
                                min-width="30%">
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="缺陷个数"
                                min-width="30%">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
            <el-button class="bottom-button" type="primary" plain @click='closeAnalysis'>关闭</el-button>
            </div>
            
            <div  class="safety-contanier">
                <safetyDistance v-if="showCpn1" @close-bars="closeBars"></safetyDistance>            
                <defectCorrelation v-if="showCpn2" @close-bars2="closeBars2"></defectCorrelation>
            </div>
            
        </el-drawer>
    </div>
    

</template>

<script>
import baseBar from '@components/BaseBar/BaseBar.vue'
import basePieBz from '@components/BasePie/BasePieBz.vue'
import safetyDistance from '@components/DefectDevelopment/SafetyDistance.vue'
import defectCorrelation from '@components/DefectDevelopment/DefectCorrelation.vue'
export default {
    name: "Analysis",
    //父传子
    props:['showAnalysis'],
    components:{
        baseBar,
        basePieBz,
        safetyDistance,
        defectCorrelation
    },
    data(){
        return{
            //切换数据组件
            showCpn:true,
            showCpn1:false,
            showCpn2:false,
            select:"",
            yearSelect:[
                {
                    label:'近一年',
                    year:'近一年'
                }
            ],
            tableData:[
                {
                    type:'安全距离不足',
                    percent:'59%',
                    number:10056
                },
                {
                    type:'松脱、位移',
                    percent:'9%',
                    number:1456
                },
                {
                    type:'部件缺损',
                    percent:'0.3%',
                    number:58
                },
                {
                    type:'部件发热',
                    percent:'1.14%',
                    number:194
                },
                {
                    type:'标志牌损坏',
                    percent:'5.43%',
                    number:925
                },
                {
                    type:'塔上异物',
                    percent:'4.87%',
                    number:830
                },
                {
                    type:'劣化自爆',
                    percent:'4.00%',
                    number:681
                },
                {
                    type:'锈蚀',
                    percent:'2.76%',
                    number:471
                },

            ]

        }
    },
    methods:{
        //子传父
        closeAnalysis:function(){
            this.$emit("close-analysis")
        },
        changeBoolean(){
            this.showCpn = false
            this.showCpn1 = true
        },
        closeBars(){
            this.showCpn1 = false
            this.showCpn = true
        },
        closeBars2(){
            this.showCpn2 = false
            this.showCpn = true
        },
        showPhoto27(){
            this.showCpn = false
            this.showCpn1 = false
            this.showCpn2 = true
        }

    }

}
</script>

<style scoped>
.container{
    margin-top:80px;
    margin-left:40px;
    width:90%;
    border:1px solid black;
    box-shadow: 4px 4px 2px #888888;
}
.el-select{
    margin-top:20px;
    margin-bottom:20px;
}
.el-button{
    margin-top:20px;
    margin-bottom:20px;
}
.bottom-button{
    float:right;
}
.safety-contanier{
    margin-top:140px;
    margin-left:50px;
    width:90%;
    height:640px;
    border:1px solid black;
    box-shadow: 4px 4px 2px #888888;
}
</style>
