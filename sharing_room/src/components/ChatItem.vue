<template>
  <mt-cell style="text-align: left" :title="chatData.wangming" :label="chatData.chatPre" >
    <img class="profile" slot="icon" :src="imgsrc"/>
  </mt-cell>
</template>
<style scoped>
.profile {
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
}
</style>
<script>
export default {
    data() {
        return {
          imgsrc: "../../static/touxiang/"+this.chatData.touxiang+".png" 
        }
    },
    props: {
    chatData: Array
  },
}
</script>


