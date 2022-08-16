<template>
  <p>{{age}}</p>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'

function useFeatureX() {
  const state = reactive({
    x: 1,
    y: 2
  })

  return toRefs(state)
}

export default {
  name:"WhyRef",
  setup() {
    const { x, y } = useFeatureX()

    let age = 20

    setTimeout(() => {
      age=25
    }, 1500)

    
    //普通对象直接返回的话是没有响应式的
    return {
      age 
    }
  },
}
</script>
