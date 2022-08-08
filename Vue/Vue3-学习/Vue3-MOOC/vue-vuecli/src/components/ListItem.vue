<template>
  <li class="button">{{msg}}</li>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        msg: String
    }
}
// 父组件的样式也能在子组件中使用
</script>

<style>

</style>