<template>
  <div class="loginin">
    <input v-model.trim="token" type="text" />
    <button @click="login">登录</button>
  </div>
  <!-- ecf878d1-6052-476a-8262-824760c7872b -->
</template>

<script>
export default {
  data() {
    return {
      token: "388f2ebf-8017-4ab9-9e13-3bc64099af18",
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/accesstoken", {
          accesstoken: this.token,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/");
          const userInfo = res
          delete userInfo.success


          this.$store.commit('getUserInfo',userInfo);
        })
        .catch((err) => {
          console.log(err);
          alert("token有误");
        });
    },
  },
};
</script>

<style>
</style>