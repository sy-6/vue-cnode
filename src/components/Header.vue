<template>
  <header>
    <router-link class="logo" to="/">
      <img alt="Vue logo" src="../assets/cnodejs_light.svg" />
    </router-link>
    <router-link class="info" to="/"> 未读消息 </router-link>
    <span class="signout"> 退出 </span>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style>
header {
  width: 100%;
  height: 50px;
  background-color: #444;
  line-height: 50px;
  color: #fff;
}
.logo img {
  width: 120px;
  margin-left: 5%;
}
a.info {
  text-shadow: none;
  color: #ccc;
  margin-left: 65%;
  margin-right: 30px;
  font-size: 13px;
}
span.signout {
  cursor: pointer;
  text-shadow: none;
  color: #ccc;
  font-size: 13px;
}
</style>