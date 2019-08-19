<template>
  <div>
    <Header :title="HeaderTitle"></Header>
    <div class="navbar">
      <div class="banner">
        <div style="overflow: hidden">
          <span class="Fleft">
            总资产（元）
            <i :class="Icon" class="iconfont icon" @click="dianji()"></i>
          </span>
          <span class="Fright">本月使用</span>
        </div>
        <div>
          <span class="Fleft number">500</span>
          <span class="Fright number">100</span>
        </div>
      </div>
      <div>
        <mt-navbar v-model="active">
          <mt-tab-item id="totalCost">总计</mt-tab-item>
          <mt-tab-item id="waterEct">水电气</mt-tab-item>
          <mt-tab-item id="ontherCost">其他</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="totalCost" class="chartPart">
            <div class="chartContent">
              <LineChart :data="chartData" :active="selected"></LineChart>
            </div>
            <div class="chartContent" style>
              <PieChart :active="selected"></PieChart>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="waterEct">
            <ArticleCard v-for="(n,k) in 10" :key="k"></ArticleCard>
          </mt-tab-container-item>
          <mt-tab-container-item id="ontherCost">
            <ArticleCard v-for="(n,k) in 10" :key="k"></ArticleCard>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  margin-top: 40px;
}
.banner {
  box-sizing: border-box;
  height: 80px;
  background-color: #26a2ff;
  color: white;
  padding: 5px;
}
.number {
  font-size: 30px;
  font-weight: 900;
}
.chartPart {
  padding: 10px;
  padding-bottom: 110px;
  box-sizing: border-box;
}
.chartContent {
  height: 350px;
  box-sizing: border-box;
  padding: 10px;
}
</style>
<script>
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import LineChart from "../components/lineChart";
import PieChart from "../components/pieChart";
export default {
  data() {
    return {
      HeaderTitle: "财产",
      Icon: "icon-dianzan",
      active: "totalCost",
      //表格数据
      chartData: {},
    };
  },
  props: {
    selected: String
  },
  watch: {},
  beforeCreate: function() {
    console.log("beforeCreate");
    var _this = this;
    this.$reqs
      .get("/property/lineChartData")
      .then(function(res) {
        console.log(_this.chartData);
        _this.chartData = res.data;
        console.log(_this.chartData);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log("失败了");
        console.log(error);
      });

      
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(this.chartData);
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate() {},
  updated: function() {
    console.log("Update");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  components: {
    Header,
    ArticleCard,
    LineChart,
    PieChart
  },
  methods: {
    dianji() {
      console.log("您点击了小图标");
      this.Icon = "icon-dianzan1";
    }
  }
};
</script>
