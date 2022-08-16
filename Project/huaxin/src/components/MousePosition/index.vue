<template>
  <p>mouse position {{x}} {{y}}</p>
</template>

<script>
import { reactive } from 'vue';
import useMousePosition from './useMousePosition'
export default {
  name:"MousePosition",
  setup() {
    const {x, y} = useMousePosition()

    return { x, y}
  },
}
</script>

