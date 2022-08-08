<template>
  <div>
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"],
    };
  },
  methods: {
    addItem() {
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);

      const ulElem = this.$refs.ul1;
      console.log(ulElem.childNodes.length);
    },
  },
};
</script>
