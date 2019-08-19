<template>
  <div class="cardContainer" @click="hit()">
    <div class="banner">
      <div class="profile">
        <img :src="touxiang" alt="头像" />
        <span>{{data.name}}</span>
      </div>
      <div class="tag">{{data.tag}}</div>
    </div>
    <div class="content">
      <div class="articleTitle">
        <h4>{{data.articleName}}</h4>
      </div>
      <div class="articleContent">
        <div class="Fleft articleDetail">{{data.content}}</div>
        <div class="Fright articleImg">
          <img :src="introuduce" style="width:100%;
	" alt="文章图片" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="iconContent">
        <div>
          <i class="iconfont icon" :class="icon" @click="add()" :isHited="flag">
            <span style="font-size: 16px">{{data.dianzan}}</span>
          </i>
        </div>
        <div>
          <i class="iconfont icon-pinglun icon">
            <span style="font-size: 16px">{{data.comments}}</span>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      icon: "icon-dianzan",
      touxiang: "../../static/touxiang/" + this.data.touxiang + ".jpg",
      introuduce: "../../static/introuduce/" + this.data.articleImg + ".jpg"
    };
  },
  props: {
    data: Object
  },
  methods: {
    add() {
      if (this.flag) {
        this.flag = false;
        this.icon = "icon-dianzan";
        console.log("双击");
      } else {
        this.flag = true;
        this.icon = "icon-pinglun";
        console.log("单击");
        console.log(this.touxiang);
      }
    },
    hit() {
      console.log("nihao");
    }
  }
};
</script>
<style>
.Fleft {
  float: left;
}
.Fright {
  float: right;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
}
.cardContainer {
  height: 205px;
  width: 100%;

  padding: 5px 5px 0px;
}
.banner {
  height: 30px;
  line-height: 30px;
}
.banner div {
  display: inline;
}
.profile img {
  vertical-align: middle;
  height: 28px;
  width: 28px;
  border-radius: 14px;
}
.profile {
  float: left;
  position: relative;
  left: 10px;
}
.tag {
  float: right;
  position: relative;
  right: 10px;
}
.content {
  height: 140px;

  text-align: left;
}
.articleTitle {
  height: 26px;
}
.articleContent {
  height: 114px;
}
.articleContent div img {
  height: 112px;
  height: 112px;
}
.articleDetail {
  height: 114px;
  overflow: hidden;
  padding-right: 112px;
}
.articleImg {
  position: absolute;
  right: 2px;
  width: 100px;
  height:40px;
}
.footer {
  height: 30px;

  line-height: 30px;
}
.iconContent {
  float: left;
  margin-left: 10px;
}
.iconContent div {
  display: inline-block;
  width: 44px;
  height: 28px;
}
.icon {
  font-size: 20px;
  font-weight: 500;
}
</style>
