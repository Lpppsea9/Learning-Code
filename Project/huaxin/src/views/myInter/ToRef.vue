<template>
  <p>ToRef: {{state.age}} - {{state.name}} - {{ageRef}}</p>
</template>

<script>

import { reactive, ref, toRef } from 'vue'

export default {
  name:"toRef",
  setup() {
    const state = reactive({
      name: "lppp",
      age:24
    })

    /* 
      普通对象用reactive实现响应式
      一个响应式对象中的属性需要单独出来实现响应式，用toref
    */
    const ageRef = toRef(state,'age')

    setTimeout(() => {
      state.age=18
    }, 1500);

    setTimeout(() => {
      ageRef.value = 15
    }, 2000)

    return{state, ageRef}
  },
}
</script>