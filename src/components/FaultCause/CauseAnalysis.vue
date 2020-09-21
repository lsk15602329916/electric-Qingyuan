<template>
<div>
<!-- 点击线路名称,展示线路具体信息的组件-->
    <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    :with-header="false"
    size="50%"
    >
        <div class="container">
            <header>110KV PF甲线</header>
            <main>
            <div class="left">
                <p>
                    <span class="options">输电线路通道信息：</span>
                    <span>110kVPF甲线</span>
                </p>
                <p>
                    <span class="options">天气信息：</span>
                    <span class="options">雷雨</span>
                    <span class="options">风力4级</span>
                    <span class="options">最大风速7.3m/s</span>
                </p>
                <p>
                    <span class="options">环境信息：</span>
                    <span>山地</span>
                </p>
            </div>
            
            </main>
            <main>
            <div class="left">
                <p class="options">故障根因概率：</p>
                <el-table
                :data="table1Data">
                    <el-table-column
                    prop="reason1"
                    label="雷击">
                    </el-table-column>
                    <el-table-column
                    prop="reason2"
                    label="车辆碰线">
                    </el-table-column>
                    <el-table-column
                    prop="reason3"
                    label="飘挂物">
                    </el-table-column>
                    <el-table-column
                    prop="reason4"
                    label="树闪">
                    </el-table-column>
                    <el-table-column
                    prop="reason5"
                    label="山火">
                    </el-table-column>
                </el-table>
            </div>
            </main>
            <main>
            <div class="left">
                <p class="options">故障相关信息：</p>
                <el-table
                :data="table2Data">
                    <el-table-column
                    prop="info1"
                    label="雷击天气">
                    </el-table-column>
                    <el-table-column
                    prop="info2"
                    label="重合闸情况">
                    </el-table-column>
                    <el-table-column
                    prop="info3"
                    label="直流分量">
                    </el-table-column>
                    <el-table-column
                    prop="info4"
                    label="夏季">
                    </el-table-column>
                    <el-table-column
                    prop="info5"
                    label="故障电流变化率">
                    </el-table-column>
                </el-table>
            </div>
            </main>
            <div class="report">
                <p style="margin: 15px;font-size: 20px; font-weight: bold;text-align: center">决策方案</p>
                <p>本次故障判断为雷击故障，瞬时性故障概率较大，建议可强送</p>
                <div style="display: flex;flex-direction: row-reverse;">
                    <el-button type="primary" style="margin: 15px"><span style="color: white">生成报告</span></el-button>
                </div>
             </div>
        </div>
        <el-button type="primary" plain class="close" @click="closeDrawer">关闭</el-button>
    </el-drawer>
</div>
</template>

<script>
export default {
    name: "CauseAnalysis", 
    props:['drawer'],
    data(){
        return {
            //抽屉从右向左打开
            direction: 'ltr',
            table1Data:[
                {
                    reason1:"92%",
                    reason2:"4%",
                    reason3:"2%",
                    reason4:"1%",
                    reason5:"1%",
                }
            ],
            table2Data:[
                {
                    info1:"191.113624441653",
                    info2:"181.287749056526",
                    info3:"100.098452745029",
                    info4:"88.0706564474801",
                    info5:"67.5873863240405",
                }
            ]
        };
    },
    methods: {
        //传值给父组件，控制抽屉的关闭
        closeDrawer(){
            this.$emit('close-drawer')
        }

    }

}
</script>

<style lang="less" scoped>
.container{
   animation: up 1.5s;
   transition: all .5s ease;
   box-sizing: border-box;
   width: 800px;
   margin: 80px auto;
   margin-bottom:5px;
   padding: 15px;
   display: flex;
   flex-direction: column;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
   &:hover{
     box-shadow: 0 4px 6px rgba(0, 0, 0, .32), 0 0 6px rgba(0, 0, 0, .04);
   }
   header{
     text-align: center;
     font-weight: bold;
     font-size: 26px;
     margin-bottom: 25px;
   }
   main{
     display: flex;
     border: 1px solid #E4E7ED;
     padding: 10px;
     p{
       padding: 5px 5px 5px 0;
     }
     .left{
       flex: 50%;
       padding-right: 10px;
       p{
         .options{
           padding-right: 15px;
         }
       }
     }
    }
    .report{
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: 180px;
     border: 1px solid  #E4E7ED;
     border-top: none;
   }
};
.close{
    float:right;
    margin-right:80px;
}
</style>