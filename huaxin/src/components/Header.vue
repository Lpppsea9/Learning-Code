<template>
    <div class="nav">
        <div class="nav__img"></div>
        <div class="nav__options">
            <div 
                :class="{'nav__item': true, 'nav__item--active': currentTab === item.tab}"
                v-for="item in tabItems"
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
    // const route = useRoute()
    // const router = useRouter()
    const handleTabClick = (tab) => {
        currentTab.value = tab 
        // console.log(currentTab)
        // console.log(route.params.id)
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
.nav {
    display: flex;
    flex-direction: row;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
    &__img {
        width: 190px;
        height: 44px;
        margin: 28px 0 28px 361px;
        background: url('../assets/img/huaxin_logo.png');
    }
    &__options {
        list-style: none;
        display: flex;
        flex: 1;
        flex-wrap: nowrap;
        margin: 37px 0 39px 292px;
        height: 24px;
    }
    &__item {
        margin-right: 50px;
        height: 24px;
        line-height: 24px;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #333333;
        letter-spacing: 0;
        padding: 0 0 25px 0;
        cursor: pointer;
        &--active {
            color: #F5A623;
            font-weight: bold;
            border-bottom: 4px solid #F5A623;
            padding: 0 0 25px 0;
            border-radius: 1px;
        }
    }
    
    &__link {
        text-decoration: none;
    }
    
}
li {
    // list-style: none;
}

// .home_navigation{
//     list-style:none;
//     cursor:pointer;
//   }
//   li:hover{
//     color:#36A6FE;
//     // border-bottom:4px solid #F5A623;
//   }
//   .activeTab{
//     // color:#36A6FE;
//     border-bottom:4px solid #F5A623;
//   }


</style>