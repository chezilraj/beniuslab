<template>
  <main>
    <HeroVideo />
  </main>
</template>

<script>
import works from "~/mixins/works.js";
export default {
  mixins: [works],
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  head: {
    title: "Benius Lab",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "",
      },
    ],
  },
};
</script>
