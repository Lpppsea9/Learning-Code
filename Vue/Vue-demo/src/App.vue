<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Index v-if="aa"></Index> -->
    <!-- <button @click="test1">销毁aa</button> -->
    <!-- <AdvancedUse></AdvancedUse> -->
    <div v-for="(item, key) in mydata" :key="key" @click="handleExpand(key)">{{key}}</div>
    <div v-for="(item, key) in rightObj" :key="key" > {{item}}</div>
  </div>
</template>

<script>
// import Index from "./components/BaseUse/Index.vue";
// import AdvancedUse from "./components/AdvancedUse/index";
import { mydata } from './data/data'

export default {
  name: "App",
  components: {
    // Index,
    // AdvancedUse,
  },
  data() {
    return {
      aa: true,
      mydata,
      rightObj:{},
      
    };
  },
  methods: {
    test1() {
      this.aa = false;
    },
    handleExpand(key) {
      console.log(mydata[key])
      this.rightObj = mydata[key]
    }
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
