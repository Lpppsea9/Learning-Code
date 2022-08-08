<template>
  <div class="home">
    <img src="../assets/logo.png">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import {useStore} from 'vuex';
export default {
  name: 'Home',
  // 一般情况下使用 vuex
  // computed: {
  //   myName() {
  //     return this.$store.state.name
  //   }
  // }

  setup() {
    const store = useStore();
    const {name} = toRefs(store.state);
    return {
      name
    }
  }
}
</script>
