<template>
  <div>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索" class="search">
      <mt-cell v-for="(item,n) in result" :key="n" :title="item.title" :value="item.value"></mt-cell>
    </mt-search>
    <mt-navbar v-model="active">
      <mt-tab-item id="tab1">租友</mt-tab-item>
      <mt-tab-item id="tab2">房子</mt-tab-item>
      <mt-tab-item id="tab3">论坛</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="active" swipeable>
      <mt-tab-container-item id="tab1" >
        <ArticleCard v-for="(article, index) in articleData" :key="index" :data="article" @click.native="hit(article)"></ArticleCard>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2"></mt-tab-container-item>
      <mt-tab-container-item id="tab3"></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped>
.search {
  height: auto;
}
* {
  padding: 0;
  margin: 0;
}
html,
body {
  padding: 0;
  margin: 0;
}
</style>

<script>
import ArticleCard from "../components/ArticleCard";
export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      value: "",
      result: [
        {
          title: "1",
          value: "2"
        },
        {
          title: "2",
          value: "2"
        },
        {
          title: "3",
          value: "3"
        }
      ],
      active: "tab1",
      flag: false,
      articleData: []
    };
  },
  methods: {
    hit(article) {
      var _this = this
      console.log(article)
      this.$router.push({
        path: "Article",
        name: "Article",
        params: 
          article
        
      });
    }
  },
  beforeCreate() {
    var _this = this;
    this.$reqs
      .get("/friends/article")
      .then(function(res) {
        
        _this.articleData = res.data;
        
        _this.flag = true;
        console.log(res.data);
      })
      .catch(function(error) {
        console.log("异步获取数据失败");
        
      });
  },
  created() {},
  beforeMount() {},
  mounted() {}
};
</script>

