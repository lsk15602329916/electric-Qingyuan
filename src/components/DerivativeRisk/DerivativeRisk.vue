<template>
  <div class="container">
    <div style="text-align: center; margin: 20px auto">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          <span style="color: white">{{ selectedLabel }}</span><i style="color: white" class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in options"
            :command="item"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <transition name="fade" mode="out-in">
      <home v-if="selected === 1" key="1"></home>
      <historyFailure v-else key="2"></historyFailure>
    </transition>
  </div>
</template>

<script>
import historyFailure from '@/components/DerivativeRisk/HistoricalFailure'
import home from '@/components/DerivativeRisk/Home'

export default {
  name: "DerivativeRisk",
  components: {
    historyFailure,
    home
  },
  data() {
    return {
      selected: 1,
      selectedLabel: '衍生风险预警',
      options: [{
        value: 1,
        label: '衍生风险预警'
      }, {
        value: 2,
        label: '历史故障统计分析'
      }],
    }
  },
  methods: {
    handleCommand({ value, label }) {
      this.selected = value
      this.selectedLabel = label
    },
  }
}
</script>

<style scoped lang="scss">
 .container{

 }
 .fade-enter-active, .fade-leave-active {
   transition: all .3s;
 }
 .fade-enter, .fade-leave-to {
   opacity: 0;
   transform: translateX(100px);
 }

</style>
