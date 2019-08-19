<template>
  <div>
    <Header :title="HeaderTitle"></Header>
    <mt-navbar v-model="active" class="navbar">
      <mt-tab-item id="chatTab1">会话</mt-tab-item>
      <mt-tab-item id="chatTab2">群聊</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="tab_container" v-model="active" swipeable>
      <mt-tab-container-item id="chatTab1">
        <chatItem v-for="(item,index) in chatData.data" :key="index" :chatData = 'item'></chatItem>
      </mt-tab-container-item>
      <mt-tab-container-item id="chatTab2">
        <chatItem v-for="n in 5" :key="n"></chatItem>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped>
.navbar {
  margin-top: 40px;
}
.tab_container {
  margin-top: 5px;
}
</style>

<script>
import Header from "../components/Header";
import chatItem from "../components/ChatItem";
export default {
  data() {
    return {
      active: "chatTab1",
      HeaderTitle: "聊天",
      chatData: []
    };
  },
  components: {
    Header,
    chatItem
  },
  
  beforeCreate() {
    this.$reqs
      .get("/chat/chatData")
      .then(res => {
        this.chatData = res
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

