<template>
  <mt-header class="header" :title="title" fixed>
    <router-link to="/" slot="left" v-if="flag">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
<style scoped>
.header {
  font-size: 18px;
  font-weight: 900;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    flag: false
  }
};
</script>

