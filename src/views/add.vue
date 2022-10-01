<template>
  <el-drawer class="eldrawer" :visible="true" size="80%">
    <el-button
      @click="
        () => {
          this.$emit('close');
        }
      "
      >关闭</el-button
    >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="tab">
        <el-select v-model="form.tab" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
      </el-form-item>
      <el-form-item label="content">
        <el-input v-model="form.content" />
      </el-form-item>
    </el-form>
    <el-button @click="add">保存</el-button>
  </el-drawer>
</template>

<script>
export default {
  data() {
    return {
     form:{},
     options:[
         {label:'ask',value:'ask'},
         {label:'share',value:'share'},
         {label:'job',value:'job'},
         {label:'dev',value:'dev'}
         ]
    };
  },
  created(){
  },
  methods:{
add(){
  this.$axios
      .post(`https://cnodejs.org/api/v1/topics?accesstoken=ff877521-4278-4eb1-b9d4-f39cfb107049&title=${this.form.title}&options="dev"&content=${this.form.content}`,this.from)
     
}
  }
};
</script>

<style>
</style>