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

export default {
    name: 'Home',
    components: { Search, Header, Banner, Notice, Business, Products, Advertisement, Invest }
}
</script>

<style>

</style>