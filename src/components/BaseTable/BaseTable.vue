<template>
  <div class="container">
    <p>
      <span class="title">全市基本统计信息</span>
      <el-select v-model="selected" placeholder="请选择" style="width:150px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select></p>
    <el-table
      :data="tableData"
      size="small"
      stripe
      style="width: 100%">
      <el-table-column
        prop="city"
        label="全市"
        width="80">
      </el-table-column>
      <el-table-column
        prop="linesCount"
        label="线路总数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="length"
        label="长度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="towersCount"
        label="杆塔数目">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  data() {
    return {
      selected: '',
      options: [{
        label: '清城区',
        value: '清城区'
      },
        {
          label: '清新区',
          value: '清新区'
        }],
      tableData: [{
        city: '500KV',
        linesCount: '13',
        length: '755.04',
        towersCount: '6453'
      },{
        city: '220KV',
        linesCount: '73',
        length: '269.97',
        towersCount: '25988'
      },{
        city: '110KV',
        linesCount: '189',
        length: '256.66',
        towersCount: '41769'
      },{
        city: '35KV',
        linesCount: '112',
        length: '436.67',
        towersCount: '8863'
      },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    margin: 40px 0;
    .title{
      font-size: 20px;
      font-weight: bold;
      padding: 0 30px 0 5px;
    }
  }
</style>