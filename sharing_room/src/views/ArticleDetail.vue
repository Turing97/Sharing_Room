<template>
  <div>
    <Header :title="title" :flag='true'></Header>
    <div class="content">
      <h3>{{article.articleName}}</h3>
      <div>
        <img />
        <h4>{{article.name}}</h4>
      </div>
      <p>{{article.content}}</p>
    </div>
  </div>
</template>
<style scoped>
.content {
  margin-top: 40px;
}
</style>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  },
  data() {
      return {
        title: '详情',
          article: this.$route.params
      }
  },
  
};
</script>