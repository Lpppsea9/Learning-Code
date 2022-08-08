<template>
    <div class="h-25 flex bg-white shadow-myshadow ">
        <div class="ml-90 flex items-center cursor-pointer">
            <img class="w-48 h-11" src="../assets/img/huaxin_logo.png" alt="logo">
        </div>
        <div class="flex h-25 flex-1 ml-72 mr-90 items-center">
            <div 
                v-for="item in tabItems"
                :class="{'ml-12 mt-9 leading-6 font-bold pb-7 cursor-pointer whitespace-nowrap text-myfontcolor': true, 'nav_active': currentTab === item.tab}"
                :key="item.id"
                @click="() => handleTabClick(item.tab)"
            >
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const tabItems = [
    { id: 0, name: "首页" , tab: 'home'},
    { id: 1, name: "旗下产品", tab: 'product' },
    { id: 2, name: "专项资管业务", tab: 'business' },
    { id: 3, name: "客户服务", tab: 'service' },
    { id: 4, name: "投教课堂", tab: 'classroom' },
    { id: 5, name: "走进华鑫资管", tab: 'walkin' },
]

// tab栏切换功能抽离
const useTabEffect = () => {
    const currentTab = ref(tabItems[0].tab)
    const handleTabClick = (tab) => {
        currentTab.value = tab 
    }
    return { currentTab, handleTabClick }
}

export default {
    name: 'Header',
    setup() {
        const { currentTab, handleTabClick } = useTabEffect();
        return { tabItems, currentTab, handleTabClick }
    }
}
</script>

<style lang="scss" scoped>
.nav_active {
    color: #F5A623;
    font-weight: bold;
    border-bottom: 4px solid #F5A623;
    padding: 0 0 25px 0;
    border-radius: 1px;
}


</style>