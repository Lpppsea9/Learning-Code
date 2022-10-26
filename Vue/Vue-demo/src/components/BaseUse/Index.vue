<template>
  <div class="hello">
    <p>{{ num }}</p>
    <button @click="test($event)">销毁</button>
    <Input v-if="show"></Input>
  </div>
</template>

<script>
import Input from "@/components/BaseUse/Input.vue";
export default {
  name: "HelloWorld",
  components: {
    Input,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      num: 0,
      show: true,
    };
  },
  beforeDestroy() {
    console.log("Index beforeDestroy");
  },
  destroyed() {
    console.log("Index destroyed");
  },
  methods: {
    test() {
      // this.$destroyed;
      this.show = false;
    },
  },
};
</script>


