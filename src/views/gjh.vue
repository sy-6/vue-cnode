<template>
  <div>
    <h1>gjh</h1>
    <button @click="returnHome">返回</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      returnHome(){
        this.$router.replace('/')
      }
  }
};
</script>

<style scoped>
</style>