<template>
  <div class="container">
    <header>线路负载率</header>
    <p>
      <span class="des">
      220KV 平均超过 50%
      </span>
      <span style="padding-left: 65px">
        <span class="num">13</span> 条
      </span>
    </p>
    <p>
      <span class="des">
       110KV 平均超过 50%
      </span>
      <span style="padding-left: 65px">
        <span class="num">78</span> 条
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "LineLoad"
}
</script>

<style scoped lang="scss">
.container{
  margin: 5px 0;
  padding: 15px;
  width: calc(100% - 30px);
  border: 2px solid #409EFF;
  border-radius: 4px;
  text-align: center;
  header{
    color: #409EFF;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin: 15px auto 30px;
  }
  i{
    color: #409EFF;
    font-size: 26px;
  }
  p{
    font-size: 18px;
    padding: 6px 0;
    text-align: left;
    letter-spacing: normal;
    display: flex;
    align-items: center;
    .num{
      padding: 4px 15px;
      display: inline-block;
      border: 2px solid #E6A23C;
      border-radius: 4px;
    }
  }
}
</style>
