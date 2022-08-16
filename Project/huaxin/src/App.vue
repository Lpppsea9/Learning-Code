<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <router-view /> -->
  <!-- <to-ref></to-ref> -->
  <!-- <to-refs :msg="msg" @onSayHi="sayHello"></to-refs> -->

  <MousePosition v-if="flag"/>


  <hr>
  <button @click="changeHandler">change msg</button>
  <button @click="changeFlagHandler">change flag</button>
</template>

<script>
// import Home from './views/home/Home.vue';
// import ToRef from './views/myInter/ToRef.vue';
// import ToRefs from './views/myInter/ToRefs.vue';

import MousePosition from './components/MousePosition/index.vue'

export default {
  name: 'App',
  components: {
    // Home
    // ToRef,
    // ToRefs,
    MousePosition
  },
  data() {
    return {
        msg: "hello vue3",
        flag: true
      }
  },  
  methods: {
    sayHello(info) {
      console.log("App， hello", info);
    },

    changeHandler() { },

    changeFlagHandler() {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
</style>
