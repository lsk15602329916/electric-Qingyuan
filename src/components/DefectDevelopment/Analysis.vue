<template>
<!-- 图25 历史统计分析 -->
    <div>
        <el-drawer
            :visible.sync="showAnalysis"
            :with-header="false"
            size="50%">
            <baseBar
                title="缺陷地区分布情况"
                :data="[956, 800, 900, 500, 489, 480]"
                :dataAxis="['A地区', 'B地区', 'C地区','D地区','E县','F县']">
            </baseBar>
            <baseBar
                title="缺陷时段分布情况"
                :data="[1157, 787, 2164, 4616, 2176, 1731, 1724, 5073, 4029, 3064, 2048, 2335]"
                :dataAxis="['1月', '2月', '3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']">
            </baseBar>
            <el-button @click='closeAnalysis'>关闭啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</el-button>
        </el-drawer>
    </div>
    

</template>

<script>
import baseBar from '@components/BaseBar/BaseBar.vue'
export default {
    name: "Analysis",
    props:['showAnalysis'],
    components:{
        baseBar
    },
    data(){
        return{

        }
    },
    methods:{
        closeAnalysis:function(){
            this.$emit("close-analysis")
        },
    }

}
</script>

<style scoped>
.baseBar{
    display:inline-block
}
</style>
