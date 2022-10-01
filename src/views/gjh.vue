<template>
  <div>
    <h1>gjh</h1>
    <button @click="returnHome">返回</button>

    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="author.loginname" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="good" label="是否好人" width="180">
          
        </el-table-column>
      </el-table>
      ok: 
      <span>{{ok}}</span>
    </template>
    <!-- 标题，字段：title
 用户名，字段：author对象的loginname属性
是否好人，字段：good，如果为true,显示好人，false显示坏人 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      ok: '初始',
    };
  },
  created() {
    this.$axios.get(`https://cnodejs.org/api/v1/topics`).then(res=> {
      this.ok = res.success
      this.tableData = res.data
      
      console.log(res);
    })
  },
  methods: {
    returnHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
</style>