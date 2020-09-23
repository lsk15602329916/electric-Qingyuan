<template>
  <el-table
    :data="tableData"
    height="500"
    border
    stripe
    style="width: 800px">
    <el-table-column
      prop="featureName"
      label="特征名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="significance"
      label="显著度"
      width="180">
    </el-table-column>
    <el-table-column
      prop="confidence"
      label="置信度">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'XTable',
  props: {
    tableData: {
      type: Array,
      require: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.tableData)
  }
}
</script>

<style scoped>

</style>