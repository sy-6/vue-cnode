<template>
  <div class="app">
    <Header />

    <div class="main">
      <router-view class="left" />
      <Pane1 v-if="!$route.path.includes('login')" class="right">
        <template #header>
          <span v-if="userInfo">个人信息</span>
          <span v-else>网站信息</span>
        </template>
        <template #content>
          <div v-if="userInfo">
            <div>
              <img :src="userInfo.avatar_url" alt="" />
              <span>{{ userInfo.loginname }}</span>
            </div>
          </div>
          <div v-else>
            <p>Node.js专业中文社区</p>
            <router-link to="/login"> 登录 </router-link>
          </div>
        </template>
      </Pane1>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Pane1 from "./layout/Pane1.vue";
export default {
  components: { Header, Pane1 },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    login() {},
  },
};
</script>

<style lang='less'>
@import url("./theme/style.less");
.app {
  h1 {
    color: @main-color;
  }
}
.main {
  background-color: #e1e1e1;
  overflow: hidden;
}
.left {
  width: 70%;
  margin-left: 5%;
  float: left;
}
.right {
  margin-left: 2%;
  width: 20%;
  float: left;
}
</style>