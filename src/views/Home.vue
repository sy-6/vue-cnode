<template>
  <div class="home">
    <Pane1>
      <template #header>
        <div class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/good">精华</router-link>
          <router-link to="/share">分享</router-link>
          <router-link to="/ask">问答</router-link>
          <router-link to="/job">招聘</router-link>
          <router-link to="/dev">客户端测试</router-link>
        </div>
      </template>
      <template #content>
        <div v-if="posts.length">
          <div class="post-item" v-for="post in posts" :key="post.id">
            <router-link :to="`/user/${post.author.loginname}`">
              <img
                class="avatar"
                :title="post.author.loginname"
                :src="post.author.avatar_url"
                alt=""
              />
            </router-link>

            <span>
              <span class="count">
                <span class="reply_count">{{ post.reply_count }}</span
                >/<span class="visit_count">{{ post.visit_count }}</span>
              </span>
              <span
                v-if="!tab || post.top || post.good || tab === 'all'"
                :class="post.top || post.good ? 'active-tab' : 'tab'"
                >{{ post | getPostChineseTab }}</span
              >
              <router-link
                class="title"
                :to="{ name: 'topic', params: { topicId: post.id } }"
                >{{ post.title }}</router-link
              >
            </span>
          </div>
        </div>
      </template>
    </Pane1>
  </div>
</template>   

<script>
import Pane1 from "../layout/Pane1.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  watch: {
    tab: {
      async handler(newValue) {
        const tab = newValue || "all";
        const res = await this.$axios.get(`/topics?page=1&limit=40&tab=${tab}`);
        this.posts = res.data;
      },
      immediate: true,
    },
  },
  computed: {
    tab() {
      return this.$route.params.tab;
    },
  },

  components: { Pane1 },
};
</script>
<style scoped>
.nav {
  background-color: #f6f6f6;
}

.nav a {
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
  margin: 0 10px;
  background-color: #80bd01;
}
.post-item {
  height: 50px;
  border-bottom: 1px #f0f0f0 solid;
  background-color: #ffffff;
}
.post-item img {
  float: left;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin: 10px;
}
.count {
  text-align: left;
  line-height: 2em;
  font-size: 10px;
  line-height: 50px;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.visit_count {
  color: #b4b4b4;
}
.title {
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #333;
}
.tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
  margin: 10px;
}
.active-tab {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin: 10px;
}
</style>
