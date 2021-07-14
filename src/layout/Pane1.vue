<template>
  <div :style="{ width: formatWidth }" class="pane1">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      /* default: "100%", */
    },
  },
  computed: {
    formatWidth() {
      const { width } = this;
      return typeof width === "number"
        ? width + "px"
        : Number(width)
        ? width + "px"
        : width;
    },
  },
};
</script>

<style>
.pane1 {
  border-radius: 4px;
  padding-top: 15px;
}
.header {
  padding: 10px;
  background-color: #f6f6f6;
}
.content {
  /* padding: 10px; */
  background-color: #FFFFFF;
}
</style>