<template>
  <div>
    <!--TabCotainer-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="friends">
        <friends></friends>
      </mt-tab-container-item>
      <mt-tab-container-item id="chat">
        <chat></chat>
      </mt-tab-container-item>
      <mt-tab-container-item id="property">
        <property :selected="selected"></property>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <mine></mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="friends">
        <img slot="icon" src="../assets/imgIcon/shouye.png" />
        租友
      </mt-tab-item>
      <mt-tab-item id="chat">
        <img slot="icon" src="../assets/imgIcon/jiaoliu.png" />
        聊天
      </mt-tab-item>
      <mt-tab-item id="property">
        <img slot="icon" src="../assets/imgIcon/xueyuan-fufeikecheng.png" />
        共同
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/imgIcon/weidenglu.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import friends from "./Friends";
import chat from "./Chat";
import property from "./Property";
import mine from "./Mine";

export default {
  data() {
    return {
      selected: "friends",
      active: "friends"
    };
  },
  
  created() {},
  mounted() {},

  components: {
    friends,
    chat,
    property,
    mine
  }
};
</script>

