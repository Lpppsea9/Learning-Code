<template>
  <!--例如 vue 颜色选择 -->
  <input
    type="text"
    :value="text"
    @input="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  name: "CustomVModel",
  model: {
    prop: "text", //对应 props text
    event: "change",
  },
  props: {
    text: String,
    default: () => "",
  },
};
</script>

<style>
</style>