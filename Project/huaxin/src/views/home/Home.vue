<template>
    <Search />
    <Header />
    <Banner />
    <Notice />
    <Business />
    <Products />
    <Advertisement />
    <Invest />
    <router-view></router-view>
</template>

<script>
import Search from '../../components/Search.vue'
import Header from '../../components/Header.vue'
import Banner from '../home/Banner.vue'
import Notice from '../home/Notice.vue'
import Business from './Business.vue'
import Products from './Products.vue'
import Advertisement from './Advertisement.vue'
import Invest from './Invest.vue'

import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  name: 'Home',
  components: { Search, Header, Banner, Notice, Business, Products, Advertisement, Invest },
  // 等于 beforeCeate created（setup整合了这两个）
  setup() {
    onBeforeMount(() => {
      console.log("Home onBeforeMount");
    })
     
    onMounted(() => {
        console.log("Home onMounted");
      })
  }
    
    // onBeforeUpdate(() =>{})
}
</script>

<style>
</style>