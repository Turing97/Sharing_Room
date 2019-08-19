<template>
  <ve-line
    ref="lineChart"
    :data="data"
    :settings="chartSettings"
    :yAxis="yAxis"
    :extend="extend"
    height="320px"
  ></ve-line>
</template>
<script>
const F2 = require("@antv/f2/lib/index");

export default {
  data() {
    this.extend = {
      "xAxis.0.axisLabel.rotate": 45
    };
    this.chartSettings = {
      xAxisType: "time"
    };
    this.yAxis = {
      offset: 14,
      type: "value",
      scale: true,
      axisLabel: {
        formatter: function(value, index) {
          var value;
          if (value >= 1000) {
            value = value / 1000 + "k";
          } else if (value < 1000) {
            value = value;
          }
          return value;
        }
      }
    };
    return {};
  },
  props: {
    data: Object,
    active: String
  },
  mounted: function() {
    
  },
  watch: {
    active(v) {
      this.$nextTick(_ => {
        this.$refs["lineChart"].echarts.resize();
      });
    }
  }
};
</script>
<style scoped>
</style>
<style>
</style>


