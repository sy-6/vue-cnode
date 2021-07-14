<template>
  <div v-if="topic">
    <pane1>
      <template #content>
        <div>
          <h2>{{ topic.title }}</h2>
          <button v-if="true" @click="collect">
            {{ topic.is_collect ? "取消收藏" : "收藏" }}
          </button>
          <div v-html="topic.content"></div>
        </div>
      </template>
    </pane1>
    <pane1>
      <template #header>
        <span>回复</span>
      </template>
      <template #content>
        <div>
          <div v-for="comment in topic.replies" :key="comment.id">
            <img width="30px" :src="comment.author.avatar_url" alt="" />
            <span>{{ comment.author.loginname }}</span>
            <span v-html="comment.content"></span>
            <div>
              <button
                @click="upClick(comment.id)"
                :class="{ 'up-active': comment.is_uped }"
              >
                点赞{{ comment.ups.length }}
              </button>
              <button v-if="isLogin" @click="otherSubmit(comment)">回复</button>
              <div v-if="comment.id === reply_id">
                <textarea ref="textarea" v-model="reply_text"></textarea>
                <button @click="otherSubmit1(comment.id)">回复</button>
              </div>
            </div>
            <hr />
            <br />
          </div>
          <div>
            <textarea v-model.trim="text"></textarea>
            <button @click="submit">回复</button>
          </div>
        </div>
      </template>
    </pane1>
  </div>
</template>

<script>
import Pane1 from "../layout/Pane1.vue";
export default {
  components: { Pane1 },
  name: "Topic",
  computed: {
    isLogin() {
      return true;
    },
  },
  data() {
    return {
      topic: null,
      text: "",
      reply_id: "",
      reply_text: "",
    };
  },
  async created() {
    const { topicId } = this.$route.params;
    const token = true;
    const url = token
      ? `/topic/${topicId}?accesstoken=21fe023f-ef69-4e05-9150-426254895ca1`
      : `/topic/${topicId}`;
    const res = await this.$axios.get(url);
    console.log(res.data);
    this.topic = res.data;
  },
  methods: {
    getTopic() {},
    async upClick(id) {
      // 60969f644d20cb55bd691608
      console.log(id);

      if (true) {
        const res = await this.$axios.post(`/reply/${id}/ups`, {
          accesstoken: "21fe023f-ef69-4e05-9150-426254895ca1",
        });
        //   console.log(res);
        const userId = "60969f644d20cb55bd691608";
        const currentComment = this.topic.replies.find(
          (item) => item.id === id
        );
        currentComment.is_uped = res.action === "up" ? true : false;
        console.log(currentComment.is_uped);
        res.action === "up"
          ? currentComment.ups.push(userId)
          : // : currentComment.ups.pop();
            currentComment.ups.splice(
              currentComment.ups.indexOf("60969f644d20cb55bd691608"),
              1
            );
      }
    },
    async submit() {
      const { text } = this;
      if (text) {
        const res = await this.$axios.post(`/topic/${this.topic.id}/replies`, {
          accesstoken: "21fe023f-ef69-4e05-9150-426254895ca1",
          content: text,
        });
        const newComment = {
          id: res.reply_id,
          is_uped: false,
          ups: [],
          content: `<p>${text}</p>`,
          author: {
            avatar_url:
              "https://avatars.githubusercontent.com/u/79734814?v=4&s=120",
            loginname: "sy-6",
          },
        };
        this.topic.replies.push(newComment);
        this.text = "";
      }
    },
    otherSubmit(comment) {
      console.log(id);
      const { id, author } = comment;
      this.reply_id = id;
      this.reply_text = `@${author.loginname} `;
      this.$nextTick(function () {
        this.$refs.textarea[0].focus();
      });
    },
    async otherSubmit1(id) {
      const { reply_text } = this;
      const res = await this.$axios.post(`/topic/${this.topic.id}/replies`, {
        accesstoken: "21fe023f-ef69-4e05-9150-426254895ca1",
        content: reply_text,
        reply_id: id,
      });
      const newComment = {
        id: res.reply_id,
        is_uped: false,
        ups: [],
        content: `<p>${reply_text.replace(
          /@[\w-]+ /,
          `<a href='/user/xxx'>@xxx</a>`
        )}</p>`,
        author: {
          avatar_url:
            "https://avatars.githubusercontent.com/u/79734814?v=4&s=120",
          loginname: "sy-6",
        },
      };
      this.topic.replies.push(newComment);
      this.reply_text = "";
      this.reply_id = "";
    },
    async collect() {
      const { is_collect, id } = this.topic;
      console.log(is_collect, id);
      const token = "21fe023f-ef69-4e05-9150-426254895ca1";
      if (is_collect) {
        await this.$axios.post("/topic_collect/de_collect", {
          topic_id:id,
          accesstoken: token,
        });
        this.topic.is_collect = false;
      } else {
        await this.$axios.post("/topic_collect/collect", {
          topic_id: id,
          accesstoken: token,
        });
        this.topic.is_collect = true;
      }
    },
  },
};
</script>

<style>
.markdown-text p img {
  max-width: 100%;
}
h2 {
  margin: 0;
}
.up-active {
  color: red;
}
</style>