<template>
  <div class="hello">
    <p>{{ num }}</p>
    <button @click="test($event)">+1</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    test(event) {
      console.log("event", event.__proto__.constructor);
      this.num++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
