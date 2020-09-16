<template>
  <div class="container">
    <header>
      <i class="el-icon-warning"></i>
      <span>告警信息</span>
    </header>
    <p><span class="des">衍生风险等级高线路</span> <span style="padding-left: 50px"><span class="num">3</span> 条</span></p>
    <p><span class="des">危急风险等级线路</span> <span style="padding-left: 70px"><span class="num">5</span> 条</span></p>
  </div>
</template>

<script>
export default {
  name: "WarningInformation"
}
</script>

<style scoped lang="scss">
  .container{
    margin: 10px 0;
    padding: 15px;
    width: calc(100% - 30px);
    border: 2px solid #409EFF;
    border-radius: 4px;
    text-align: center;
    header{
      padding-bottom: 30px;
      i{
        display: inline-block;
        width: 100%;
        margin: auto;
        font-size: 65px;
        color: #F56C6C
      }
      span{
        display: inline-block;
        margin-top: 10px;
        font-size: 26px;
        font-weight: bold;
        color: #F56C6C;
      }
    }
    p{
      margin: 12px auto 0 auto;
      font-size: 18px;
      text-align: left;
      .num{
        padding: 4px 15px;
        display: inline-block;
        border: 2px solid #F56C6C;
        border-radius: 4px;
      }
    }
  }
</style>