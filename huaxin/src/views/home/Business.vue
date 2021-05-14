<template>
    <div class="business">
        <div class="business__title">
            <div class="business__title__item">
                <div class="business__title__item--line"></div>
                <div class="business__title__item--word">业务介绍</div>
                <div class="business__title__item--line"></div>
            </div>
            <div class="business__title__eng">BUSINESS INTRODUCTION</div>
        </div>
        
        <div class="business__content">
            <div class="business__categories">
                <div 
                    class="business__categories__item"
                    v-for="(item, index) in businessList" :key="item.id"
                >
                    <img class="item__icon" :src="item.imgUrl" />
                    <span class="item__title">{{item.title}}</span>
                    <p class="item__desc">{{item.desc}}</p>
                </div>
                <div class="business__sideBar">
                    <div 
                        class="sideBar__item" 
                        v-for="item in sideBarList" 
                        :key="item.id"
                        @click="() => handleSideBarClick(item.pageName)"
                    >
                        <img class="sideBar__item__icon" :src="item.imgUrl" />
                        <div class="sideBar__item__desc">{{item.desc}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
    <div></div>
</template>

<script>
import { useRouter } from 'vue-router';
const businessList = [{ 
    id: 1, 
    imgUrl: '../../../static/yewu.png',
    title: '业务范围',
    desc: '业务范围包括集合资产管理业务、大集合资产管理业务、单一资产管理业务、专项资产管理业务及中国证监会批准的其它业务。'
}, { 
    id: 2, 
    imgUrl: ('../../../static/simu.png'),
    title: '集合资产管理业务（私募）',
    desc: '华鑫证券通过非公开方式向合格投资者募集、设立、运作投资者人数不少于2人、不多于200人的集合资产管理计划，涵盖产品类型包括固收类、权益类、商品及金融衍生品类、混合类、FOF类等。'
}, { 
    id: 3, 
    imgUrl: '../../../static/gongmu.png',
    title: '大集合资产管理业务（类公募）',
    desc: '华鑫证券设立管理的投资者人数不受二百人限制的集合资产管理计划，未来将按监管规定对标公募基金进行管理。'
}, { 
    id: 4, 
    imgUrl: '../../../static/danyi.png',
    title: '单一资产管理业务',
    desc: '华鑫证券接受单一投资者的委托设立单一资产管理计划，根据投资者的投资需求和风险偏好特征，提供定制化的投资管理。'
}, { 
    id: 5, 
    imgUrl: '../../../static/zhuanxiang.png',
    title: '专项资产管理业务',
    desc: '华鑫证券以管理人身份发起设立为客户办理特定目的的专项资产管理计划。'
}]

const sideBarList = [{ 
    id: 1, 
    imgUrl: '../../../static/bar-zhanghu.png', 
    desc: '我的账户', 
    pageName:'myaccount'
}, { 
    id: 2, 
    imgUrl: '../../../static/bar-kefu.png', 
    desc: '客服服务', 
    pageName: 'myservice'
}, {   
    id: 3, 
    imgUrl: '../../../static/bar-shouji.png', 
    desc: '下载APP'
}, { 
    id: 4, 
    imgUrl: '../../../static/bar-top.png', 
    desc: '返回顶部'
}]

const SideBarEffect = () => {
    const router = useRouter()
    const handleSideBarClick = (pageName) => {
        router.push({name: pageName})
        console.log(pageName)
    }
    return {handleSideBarClick}
}


export default {
    name: 'Business',
    setup() {
        const {handleSideBarClick} = SideBarEffect()
        return {businessList, sideBarList, handleSideBarClick}
    }
}
</script>

<style lang="scss" scoped>
.business {
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
    .business__content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        .business__categories {
            position: relative;
            width: 1220px;
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            &__item {
                display: flex;
                flex-direction: column;
                flex: 1 1 390px;
                height: 260px;
                margin: 10px 7.5px;
                background: #FFFFFF;
                box-shadow: 0 0 60px 0 rgba(0,0,0,0.10);
                border-radius: 4px;
                border-radius: 4px;
                .item__icon {
                    margin-left: 20px;
                    margin-top: 30px;
                    width: 40px;
                    height: 40px;
                }
                .item__title {
                    margin-left: 20px;
                    margin-top: 20px;
                    height: 26px;
                    line-height: 26px;
                    font-weight: bold;
                    font-family: MicrosoftYaHei-Bold;
                    font-size: 20px;
                    color: #333333;
                    letter-spacing: 0;
                }
                .item__desc {
                    margin-top: 20px;
                    margin-left: 20px;
                    width: 350px;
                    font-family: MicrosoftYaHei;
                    font-size: 16px;
                    color: #666666;
                    letter-spacing: 0;
                }
            }
        }
        .business__sideBar {
            position: absolute;
            top: 10px;
            right: -82.5px;
            .sideBar__item {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 80px;
                margin-bottom: 10px;
                background: rgb(244,244,244);
                cursor: pointer;
                &__icon {
                    margin-top: 15px;
                    background: no-repeat;
                }
                &__desc {
                    margin: 15px 0 15px 0;
                    color: rgb(102,102,102);
                    font-weight: bold;
                }
            }
        }
    }
    
}
</style>