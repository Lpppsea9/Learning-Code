<template>
    <div class="w-full">
        <ItemTitle :msg="titleProduct" />
        <div class="w-full flex justify-center">
            <div class="mt-10 flex flex-col items-center w-300">
                <div class="flex w-full h-18.5 bg-mypurple rounded">
                    <div 
                        :class="{'relative ml-12.5 pt-5 pb-7.5 text-lg text-white tracking-normal cursor-pointer': true, 'tab__item--active': currentTab === item.name}"
                        v-for="item in tabList"
                        :key="item.id"
                        @click="() => handleTabClick(item.name)"
                    >
                        {{item.name}}
                    </div>
                </div>
                <div class="flex relative w-300 h-17.5 bg-productwhite" >
                    <div 
                        id="fundSame"
                        class="py-6 absolute text-mybusdesc tracking-normal" 
                        v-for="item in categoryList" 
                        :key="item.id"
                    >
                        {{item.name}}
                    </div>
                </div>
                <div class="w-300 flex flex-col">
                    <div 
                        id="fund-line" 
                        class="flex h-17.5 relative" 
                        v-for="item in fundList" :key="item.id"
                    >
                        <div class="fund-base">{{item.name}}</div>
                        <div class="fund-base">{{item.code}}</div>
                        <div class="fund-base">{{item.date}}</div>
                        <div class="fund-base">{{item.base}}</div>
                        <div class="absolute top-1/2 -mt-5 right-48 w-24 h-9 leading-9 text-center border border-solid border-mypurple rounded text-mypurple cursor-pointer">查看详情</div>
                        <div 
                            :class="{'absolute top-1/2 -mt-5 right-12 w-24 h-9 leading-9 text-center border border-solid border-myorange rounded text-myorange cursor-pointer': true, 'subBtn--active': currentBtnId === item.id}"
                            @click="handleSubBtnClick"
                        >
                            申购
                        </div>
                    </div>
                    <div class="w-300 h-9.25 bg-white shadow-mybusitem"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import ItemTitle from '../../components/ItemTitle.vue'
const tabList = [
    { id: 1, name: '大集合', },
    { id: 2, name: '混合型' },
    { id: 3, name: 'FOF型' },
    { id: 4, name: '固定收益类' },
    { id: 5, name: '权益类' },
]
const categoryList = [
    { id: 1, name: '基金名称', },
    { id: 2, name: '基金代码' },
    { id: 3, name: '成立日期' },
    { id: 4, name: '业绩报酬计提基准' },
    { id: 5, name: '操作' },
]

const fundList = [
    { id: 1, name: '这里是基金名称', code: '000480', date: '2021-03-20', base: '3.361' },
    { id: 2, name: '这里是基金名称', code: '000481', date: '2021-03-21', base: '3.362' },
    { id: 3, name: '这里是基金名称', code: '000482', date: '2021-03-22', base: '3.363' },
    { id: 4, name: '这里是基金名称', code: '000483', date: '2021-03-23', base: '3.364' },
    { id: 5, name: '这里是基金名称', code: '000484', date: '2021-03-24', base: '3.365' },
    { id: 6, name: '这里是基金名称', code: '000485', date: '2021-03-25', base: '3.366' },
]

const titleProduct = reactive({ cntitle: '本周热销产品', engtitle: 'PRODUCTS SELL LIKE HOT CAKES'})


// 热销产品的标题切换
const useTabEffect = () => {
    const currentTab = ref(tabList[0].name)
    const handleTabClick = (tab) => {
        currentTab.value = tab
    }
    return { currentTab, handleTabClick }
}

// 申购按钮的切换
const useSubBtnEffect = () => {
    const currentBtnId = ref(fundList[5].id)
    const handleSubBtnClick = () => {
        
    }
    return { currentBtnId, handleSubBtnClick}
}

export default {
    name: 'Products',
    components: { ItemTitle },
    setup() {
        const {currentTab, handleTabClick} = useTabEffect()
        const {currentBtnId, handleSubBtnClick} = useSubBtnEffect()
        return {tabList, currentTab, categoryList, fundList, currentBtnId, titleProduct, handleSubBtnClick, handleTabClick}
    }
}
</script>

<style lang="scss" scoped>
.tab__item--active {
    color: #F5A623;
    font-weight: bold;
}
.tab__item--active:after {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -18px;
    bottom: 0;
    height: 4px;
    width: 36px;
    background-color: #F5A623;
}
#fundSame:nth-child(1) {
    left: 50px;
}
#fundSame:nth-child(2) {
    left:244px;
}
#fundSame:nth-child(3) {
    left:438px;
}
#fundSame:nth-child(4) {
    left:632px;
}
#fundSame:last-child {
    right: 50px;
}

.fund-base {
        padding: 25px 0 24px 0;
        position: absolute;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
}
.fund-base:nth-child(1) {
    left: 50px;
}
.fund-base:nth-child(2) {
    left:244px;
}
.fund-base:nth-child(3) {
    left:438px;
}
.fund-base:nth-child(4) {
    left:632px;
}
.subBtn--active {
    color: #FFFFFF;
    background: #D8D8D8;
    border: 1px solid #D8D8D8;
}
#fund-line:nth-child(odd) {
    background: #FFFFFF;
    box-shadow: 0 0 60px 0 rgba(0,0,0,0.10);
}
#fund-line:nth-child(even) {
    background: #F8F8F8;
}

</style>