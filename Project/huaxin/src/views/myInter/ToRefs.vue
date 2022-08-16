<template>
  <p>msg: {{msg}}</p>
  <p>ToRef: {{age}} - {{name}} - {{ageRef}}</p>
</template>

<script>

import { reactive, ref, toRef, toRefs } from 'vue'

export default {
  name: "toRefs",
  props: {
    msg: String,
  },
  emits:['onSayHi'],
  setup(props, {emit}) {
    const state = reactive({
      age:24,
      name: "lppp",
      
    })

    emit('onSayHi', "lplplp")

    const stateAsRefs = toRefs(state) // 将响应式对象，变成普通对象

    // const {age:ageRef, name:nameRef} = stateAsRefs //每个属性， 都是Ref对象

    // return {
    //   state,
    //   ageRef,
    //   nameRef
    // }

    // return{...state}  直接结构的话，失去响应式
    return stateAsRefs
  },
}
</script>