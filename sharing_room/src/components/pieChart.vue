<template>
  <ve-pie ref="pieChart" :data="chartData" :settings="chartSettings" height= "350px" ></ve-pie>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
    };
  },
  props: {
    
    active: String
  },
  watch: {
    active(v) {
      this.$nextTick(_ => {
        this.$refs["pieChart"].echarts.resize();
      });
    }
  }
};
</script>

<style scoped>
</style>
