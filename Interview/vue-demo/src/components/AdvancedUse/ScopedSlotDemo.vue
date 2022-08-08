<template>
  <div>
    <slot :slotsss="web"> </slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      web: {
        title: "我是王璋",
      },
    };
  },
};
</script>