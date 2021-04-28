<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1 >{{name}}</h1>
  </div>
</template>

<script>
// https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register
import { toRefs } from "vue";
import { useStore } from "vuex"
import axios from 'axios'
export default ({
  name: 'Home',
  setup() {
    axios.get('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register')
      .then((response) => {
        console.log(response)
      })
    const store = useStore();
    const {name} = toRefs(store.state)
    const handleClick = () => {
      // store.commit('changeName', '新的直接cmmit方法')
      store.dispatch('getData', '新的直接cmmit方法')
    }
    return {name,handleClick}

  },
  // methods: {
  //   handleClick() {
  //     // 想改变数据, vuex 要求第一步, 必须派发一个action
  //     this.$store.dispatch('change', 'hello 刘鹏')
  //   }
  // },
})
/* 
  vueX 总结:
    1. dispatch 方法, 派发一个 action
    2. 感知到change这个action, 执行 store 中 actions 下面的 change 方法
    3. 提交 commit, 一个叫做 change 的数据改变
    4. mutation 感知到提交的 change 改变, 执行 change 方法改变数据
*/
</script>
