<template>
<!-- 图25 历史统计分析 -->
    <div>
        <el-drawer
            title="我是标题"
            :visible.sync="showAnalysis"
            :with-header="false">
            <div id="main"></div>
            <el-button @click='closeAnalysis'>关闭啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</el-button>
        </el-drawer>
    </div>
    

</template>

<script>
export default {
    name: "Analysis",
    props:['showAnalysis'],
    
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
#main{
    height:400px;
    width:400px
}
</style>
