<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Index v-if="aa"></Index> -->
    <!-- <button @click="test1">销毁aa</button> -->
    <AdvancedUse></AdvancedUse>
  </div>
</template>

<script>
// import Index from "./components/BaseUse/Index.vue";
import AdvancedUse from "./components/AdvancedUse/index";

export default {
  name: "App",
  components: {
    // Index,
    AdvancedUse,
  },
  data() {
    return {
      aa: true,
    };
  },
  methods: {
    test1() {
      this.aa = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
