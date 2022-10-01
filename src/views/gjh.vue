<template>
  <div>
    <h1>gjh</h1>
    <el-button @click="addaa">新增</el-button>

    <button @click="returnHome">返回</button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="author.loginname" label="用户名" width="180">
      </el-table-column>
      <el-table-column label="是否好人" width="180">
        <template slot-scope="scope">
          <span v-if="scope.row.good === true">好人</span>
          <span v-if="scope.row.good === false">坏人</span>
        </template>
      </el-table-column>
    </el-table>
    ok:
    <span>{{ ok }}</span>
    <button @click="up">+</button>
    <button @click="last">-</button>

    <add v-if="addVisible" @close='close' />

    <!-- 标题，字段：title
 用户名，字段：author对象的loginname属性
是否好人，字段：good，如果为true,显示好人，false显示坏人 -->
  </div>
</template>

<script>
import add from "./add.vue";
export default {
  components: { add },
  data() {
    return {
      addVisible: false,
      searchForm: {
        good: "",
      },
      tableData: [],
      ok: "初始",
      page: 1, //页数
      limit: 10, //多少
    };
  },
  created() {
    this.$axios
      .get(`https://cnodejs.org/api/v1/topics?limit=10&page=1`)
      .then((res) => {
        this.ok = res.success;
        this.tableData = res.data;
      });
  },
  methods: {
    
    close(){
          this.addVisible = false;
    },
    addaa() {
      this.addVisible = true;
    },
    returnHome() {
      this.$router.replace("/");
    },
    search() {},
    up() {
      this.page = this.page + 1;

      this.$axios
        .get(`https://cnodejs.org/api/v1/topics?limit=10&page=${this.page}`)
        .then((res) => {
          this.ok = res.success;
          this.tableData = res.data;
        });
    },
    last() {
      this.page = this.page - 1;
      this.$axios
        .get(`https://cnodejs.org/api/v1/topics?limit=10&page=${this.page}`)
        .then((res) => {
          this.ok = res.success;
          this.tableData = res.data;
        });
    },
  },
};
</script>

<style scoped>
</style>