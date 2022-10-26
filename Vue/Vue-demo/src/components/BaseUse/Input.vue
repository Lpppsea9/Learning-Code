<template>
  <div class="Input"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  beforeDestroy() {
    console.log("child beforeDestroy");
  },
  destroyed() {
    console.log("child destroyed");
  },
};
</script>


