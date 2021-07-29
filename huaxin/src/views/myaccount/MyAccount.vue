<template>
    <Search />
    <Header />
    <Banner />
    <Chart />
</template>

<script>
import Search from '../../components/Search.vue'
import Header from '../../components/Header.vue'
import Banner from './Banner.vue'
import Chart from './Chart.vue'


export default {
    name: 'MyAccount',
    components: { Search, Header, Banner, Chart }
}

</script>

<style scoped>

</style>

