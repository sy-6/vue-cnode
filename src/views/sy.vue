<template>
  <div>
    <h1>sy</h1>
    <button @click="returnHome">返回</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created(){
       const res =  this.$axios.get(`https://cnodejs.org/api/v1/topics`);
       console.log(res)
  }
  ,
  methods:{
      returnHome(){
        this.$router.replace('/')
      }
  }
};
</script>

<style scoped>
</style>