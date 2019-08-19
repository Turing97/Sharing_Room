<template>
  <div>
    <Header :title="HeaderTitle"></Header>
    <div class="content">
      <div class="profile">
        <img
          class="profileImg"
          slot="icon"
          src="../assets/touxiang/icon-test_2.png"
          width="24"
          height="24"
        />
        <div class="profileContent">
          <h3>追星少年7</h3>
          <h4>1776553221</h4>
        </div>
      </div>
      <div class="main" style="text-align:left;padding-left: 50px">
        <mt-cell title="我的" to="//github.com" is-link value="带链接"></mt-cell>
        <mt-cell title="地址" to="//github.com" is-link value="带链接"></mt-cell>
        <mt-cell title="财产" to="//github.com" is-link value="带链接"></mt-cell>
        <mt-cell title="充值" to="//github.com" is-link value="带链接"></mt-cell>
      </div>
    </div>
  </div>
</template>
<style scoped>
.content {
  padding-top: 40px;
}
.profile {
  margin-top: 30px;
  height: 70px;

  margin-bottom: 30px;
  overflow: hidden;
}
.profileImg {
  height: 70px;
  width: 70px;
  float: left;
  margin-left: 20px;
  border-radius: 35px;
}
.profileContent {
  height: 70px;
  line-height: 35px;
}
</style>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      HeaderTitle: "我的"
    };
  },
  components: {
    Header
  }
};
</script>
