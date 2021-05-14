<template>
    <div class="products">
        <div class="products__title">
            <div class="products__title__item">
                <div class="products__title__item--line"></div>
                <div class="products__title__item--word">本周热销产品</div>
                <div class="products__title__item--line"></div>
            </div>
            <div class="products__title__eng">PRODUCTS SELL LIKE HOT CAKES</div>
        </div>
        <div class="products__content">
            <div class="content__tab">
                <div 
                    :class="{'tab__item': true, 'tab__item--active': currentTab === item.name}"
                    v-for="item in tabList"
                    :key="item.id"
                    @click="() => handleTabClick(item.name)"
                >
                    {{item.name}}
                </div>
            </div>
            <div class="content__categories" >
                <div 
                    class="fundSame" 
                    v-for="item in categoryList" 
                    :key="item.id"
                >
                    {{item.name}}
                </div>
            </div>
            <div class="content__list">
                <div class="fund__line" v-for="item in fundList" :key="item.id">
                    <div class="fund__base">{{item.name}}</div>
                    <div class="fund__base">{{item.code}}</div>
                    <div class="fund__base">{{item.date}}</div>
                    <div class="fund__base">{{item.base}}</div>
                    <div class=" fund__line__detailBtn">查看详情</div>
                    <div 
                        :class="{'fund__line__subBtn': true, 'fund__line__subBtn--active': currentBtnId === item.id}"
                        @click="handleSubBtnClick"
                    >
                        申购
                    </div>
                </div>
                <div class="fund__bottom"></div>
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
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
    setup() {
        const {currentTab, handleTabClick} = useTabEffect()
        const {currentBtnId, handleSubBtnClick} = useSubBtnEffect()
        return {tabList, currentTab, categoryList, fundList, currentBtnId, handleSubBtnClick, handleTabClick}
    }
}
</script>

<style lang="scss" scoped>
.products {
    width: 100%;
    &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 71px;
        margin-top: 80px;
        &__item {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 37px;
            &--line {
                width: 30px;
                height: 4px;
                background: #F5A623;
                border-radius: 8px;
                border-radius: 2px;
                
            }
            &--word {
                line-height: 37px;
                margin: 0 10px 0 10px;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                font-size: 28px;
                color: #533687;
                letter-spacing: 0;
            }
        }
        &__eng {
            margin-top: 10px;
            font-family: MicrosoftYaHei-Bold;
            font-size: 18px;
            color: #998DAE;
            letter-spacing: 0;
        }
    }
    &__content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        .content__tab {
            display: flex;
            flex-direction: row;
            width: 1200px;
            height: 74px;
            background: #533687;
            border-radius: 4px;
            border-radius: 4px;
            .tab__item {
                // height: 74px;
                position: relative;
                padding-top: 20px;
                padding-bottom: 30px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 18px;
                color:  #FFFFFF;
                letter-spacing: 0;
                margin-left: 50px;
                cursor: pointer;
                &--active {
                    color: #F5A623;
                    font-weight: bold;
                }
                &--active:after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    margin-left: -18px;
                    bottom: 0;
                    height: 4px;
                    width: 36px;
                    background-color: #F5A623;
                }
            }
        }
        .content__categories {
            width: 1200px;
            height: 70px;
            background: #E8E8E8;
            display: flex;
            position: relative;
            flex-direction: row;
            .fundSame {
                position: absolute;
                padding: 25px 0 24px 0;
                font-family: MicrosoftYaHei;
                font-size: 16px;
                color: #666666;
                letter-spacing: 0;
                // margin-left: 50px;
            }
            .fundSame:nth-child(1) {
                left: 50px;
            }
            .fundSame:nth-child(2) {
                left:244px;
            }
            .fundSame:nth-child(3) {
                left:438px;
            }
            .fundSame:nth-child(4) {
                left:632px;
            }
            .fundSame:last-child {
                right: 50px;
            }
        }
        .content__list {
            width: 1200px;
            display: flex;
            flex-direction: column;
            .fund__line {
                height: 70px;
                display: flex;
                position: relative;
                flex-direction: row;
                
                .fund__base {
                    padding: 25px 0 24px 0;
                    position: absolute;
                    font-family: MicrosoftYaHei;
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0;
                }
                .fund__base:nth-child(1) {
                    left: 50px;
                }
                .fund__base:nth-child(2) {
                    left:244px;
                }
                .fund__base:nth-child(3) {
                    left:438px;
                }
                .fund__base:nth-child(4) {
                    left:632px;
                }
                &__detailBtn {
                    position: absolute;
                    width: 94px;
                    height: 38px;
                    line-height: 38px;
                    text-align: center;
                    top: 50%;
                    margin-top: -19px;
                    right: 194px;
                    border: 1px solid #533687;
                    border-radius: 4px;
                    color: #533687;
                    cursor: pointer;
                }
                &__subBtn {
                    position: absolute;
                    width: 94px;
                    height: 38px;
                    line-height: 38px;
                    text-align: center;
                    top: 50%;
                    margin-top: -19px;
                    right: 50px;
                    border: 1px solid #F5A623;
                    border-radius: 4px;
                    color: #F5A623;
                    cursor: pointer;
                }
                &__subBtn--active {
                    color: #FFFFFF;
                    background: #D8D8D8;
                    border: 1px solid #D8D8D8;
                }
                
            }
            .fund__line:nth-child(odd) {
                background: #FFFFFF;
                box-shadow: 0 0 60px 0 rgba(0,0,0,0.10);
            }
            .fund__line:nth-child(even) {
                background: #F8F8F8;
            }
            .fund__bottom {
                width: 1200px;
                height: 37px;
                background: #FFFFFF;
                box-shadow: 0 0 60px 0 rgba(0,0,0,0.10);
            }
        }
    }
}
</style>