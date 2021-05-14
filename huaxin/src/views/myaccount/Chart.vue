<template>
    <div class="wrap">
        <div class="chart">
            <div class="chart__tab">
                <div 
                    :class="{'tab__item': true, 'tab__item--active': currentTab === item.name}"
                    v-for="item in tabList"
                    :key="item.id"
                    @click="() => handleTabClick(item.name)"
                >
                    {{item.name}}
                </div>
            </div>
            <div class="chart__content">
                <div class="user">
                    <div class="user__avatar">
                        <img src="../../assets/img/myAccount/avatar.png" alt="用户">
                        <div class="user__avatar__type">积极型</div>
                    </div>
                    <div class="user__desc">
                        <div class="desc__firstLine">
                            <div class="desc__firstLine__welcome">欢迎您，吴晓岚</div>
                            <div class="desc__firstLine__recognize">（合格投资者认定：<span>未认定</span>）</div>
                        </div>
                        <div class="desc__secondLine">
                            <div class="desc__secondLine__investType">投资者：普通</div>
                            <div class="desc__secondLine__lastDate">上次登录：2021-03-23 14:30：55</div>
                        </div>
                    </div>
                    <div class="user__preInfo">预留信息</div>
                </div>
                <div class="allAssets">
                    <div class="titleLine">
                        <div class="titleLine__bar"></div>
                        <div class="titleLine__title">我的总资产（元）</div>
                        <div><img src="../../assets/img/myAccount/eye.png" alt="eyeIcon"></div>
                        <div class="titleLine__updateDate">更新时间：2021-03-23</div>
                    </div>
                    <div class="assetData">
                        <div class="assetTransit">
                            <div class="assetNumber">100000.00</div>
                            <div class="assetDesc">在途资产 <span>0.00</span> 元</div>
                        </div>
                        <div class="assetTransit">
                            <div class="assetNumber">100000.00</div>
                            <div class="assetDesc">累计收益（元）</div>
                        </div>
                    </div>
                    <!-- 扇形图 -->
                    <div class="assetEchart">
                        <div id="myEcharts" :style="{ width: '650px', height: '200px' }"></div>
                    </div>
                </div>
                <div class="myPosition">
                    <div class="titleLine">
                        <div class="titleLine__bar"></div>
                        <div class="titleLine__title">我的持仓</div>
                    </div>
                    <div class="myPosition__content">
                        <div 
                            class="myPosition__content__item"
                            v-for="(item, index) in myPositionData" :key="index"
                        >
                            <div class="itemName">{{item.name}}</div>
                            <div class="holdDetail">持有明细</div>
                            <div class="itemData">
                                <div class="col">
                                    <div class="assetNumber">{{item.growthRate}}</div>
                                    <div class="itemDesc">成立以来净值增长率</div>
                                </div>
                                <div class="col">
                                    <div class="assetNumber">{{item.income}}</div>
                                    <div class="itemDesc">累计收益（元）</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import * as echarts from "echarts";
import { onMounted, onUnmounted } from 'vue'

const tabList = [
    { id: 1, name: '资产情况'}, 
    { id: 2, name: '资产明细'},
    { id: 3, name: '账户资料'},
    { id: 4, name: '银行卡管理'},
    { id: 5, name: '交易记录'},
    { id: 6, name: '密码管理'},
    { id: 7, name: '信息定制'},
]

const myPositionData = [
    { id: 1, name: '东方红中正竞争力指数c', growthRate: '49.2%', income: '10000.00'}, 
    { id: 2, name: '东方红中正竞争力指数b', growthRate: '49.2%', income: '10000.00'}, 
    { id: 3, name: '东方红中正竞争力指数a', growthRate: '49.2%', income: '10000.00'}, 
]

const useTabEffect = () => {
    const currentTab = ref(tabList[0].name)
    const handleTabClick = (tab) => {
        currentTab.value = tab
    }
    return { currentTab, handleTabClick }
}
export default {
    name: 'Chart',
    setup() {
        let echart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            echart.dispose;
        });

        // 基础配置一下Echarts
        function initChart() {
        let chart = echart.init(document.getElementById("myEcharts"));
        // 把配置和数据放这里
        var option = {
	        title: {
                // text: '某站点用户访问来源',
                // subtext: '纯属虚构',
                // left: 'center'
            },
            tooltip: {
                show: false,
                trigger: 'item'
            },
            legend: {
                // show:false,
                orient: 'vertical',
                right: '340px',
                top:'50px',
                icon: 'circle',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    width: 'auto',
                    height: '100%',
                    right:'400px',
                    top: '0px',
                    radius: '50%',
                    label: {
                        show:false
                    },
                    data: [
                        {value: 1048, name: '固收类'},
                        {value: 735, name: '权益类'},
                        {value: 580, name: '混合类'},
                        {value: 484, name: 'FOF类'},
                        // {value: 300, name: '视频广告'}
                    ],
                    emphasis: {
                        itemStyle: {
                            // shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
	    }
        chart.setOption(option)
            window.onresize = function() {
                //自适应大小
                chart.resize();
            };
        }

        const { currentTab, handleTabClick } = useTabEffect();
        return { tabList, currentTab, myPositionData, handleTabClick, 
        initChart }
    }
}
</script>

<style lang="scss" scoped>
#myEcharts {
    top:0
}
.wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.chart{
    width: 1200px;
    margin:40px 0 290px 0;
    &__tab {
        display: flex;
        flex-direction: row;
        width: 1200px;
        height: 66px;
        background: #533687;
        .tab__item {
            // height: 74px;
            position: relative;
            padding-top: 20px;
            padding-bottom: 30px;
            font-family: MicrosoftYaHei-Bold;
            font-size: 18px;
            color:  #FFFFFF;
            letter-spacing: 0;
            margin-left: 60px;
            cursor: pointer;
            &--active {
                color: #F5A623;
                font-weight: bold;
            }
            &--active:after {
                content: '';
                position: absolute;
                left: 50%;
                margin-left: -22px;
                bottom: 0;
                height: 4px;
                width: 44px;
                background-color: #F5A623;
            }
        }
        .tab__item:first-child {
            margin-left: 20px;
        }
    }
    &__content {
        background: #FFFFFF;
        box-shadow: 0 0 60px 0 rgba(0,0,0,0.10);
        border-radius: 4px;
        border-radius: 4px;
        .user {
            display: flex;
            flex-direction: row;
            border-bottom: solid #F8F8F8 2px;
            &__avatar {
                position: relative;
                margin: 30px 40px 35px 20px;
                &__type {
                    width: 76px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    position: absolute;
                    left: 50px;
                    bottom: 75px;
                    background: #EA9E21;
                    border: 1px solid #FFFFFF;
                    border-radius: 15px;
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                }
            }
            &__desc {
                // margin-top: auto;
                // margin-bottom: 58px;
                .desc__firstLine {
                    display: flex;
                    flex-direction: row;
                    &__welcome {
                        height: 24px;
                        line-height: 24px;
                        margin-top: 54px;
                        font-family: MicrosoftYaHei-Bold;
                        font-size: 18px;
                        color: #333333;
                        letter-spacing: 0;
                        font-weight: bold;
                    }
                    &__recognize {
                        height: 19px;
                        line-height: 19px;
                        margin-left: 10px;
                        margin-top: 48px;
                        padding-top: 10px;
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                        span {
                            color: rgb(233, 158, 33);
                        }
                    }
                }
                .desc__secondLine {
                    height: 19px;
                    line-height: 19px;
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row;
                    &__investType {
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        color: #333333;
                        letter-spacing: 0;
                    }
                    &__lastDate {
                        margin-left: 20px;
                        font-family: MicrosoftYaHei;
                        font-size: 14px;
                        color: #999999;
                        letter-spacing: 0;
                    }
                }
            }
            &__preInfo {
                width: 86px;
                height: 30px;
                line-height: 30px;
                background: #EA9E21;
                border-radius: 15px;
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: center;
                margin: 55px 20px 80px auto;
                
            }
        }

    }
}
.allAssets {
    position: relative;
    .titleLine {
        margin: 30px 0 0 20px;
        display: flex;
        flex-direction: row;
        &__bar {
            width: 7px;
            height: 19px;
            background: #503483;
            border-radius: 2px;
            border-radius: 2px;
        }
        &__title {
            height: 21px;
            line-height: 21px;
            margin:0 10px;
            font-weight: bold;
            font-family: MicrosoftYaHei-Bold;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
        }
        &__updateDate {
            height: 19px;
            line-height: 19px;
            margin-left: 20px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
        }
    }
    .assetData {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        margin-left: 37px;
        .assetTransit {
            // .assetNumber {
            //     font-family: "DINCond-Bold";
            //     font-size: 40px;
            //     color: #F5A623;
            //     letter-spacing: 0;
            // }
            .assetDesc {
                font-family: MicrosoftYaHei;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0;
                margin-top: 5px;
                span {
                    color: rgb(233, 158, 33);
                }
            }
        }
        .assetTransit:nth-child(2) {
            margin-left: 200px;
        }
    }
    // 扇形图
    .assetEchart {
        position: absolute;
        top: 0;
        right: 0;
    }
}
// 数字公用样式类型
.assetNumber {
    font-family: "DINCond-Bold";
    font-size: 40px;
    color: #F5A623;
    letter-spacing: 0;
}
.myPosition {
    .titleLine {
        margin: 50px 0 0 20px;
        display: flex;
        flex-direction: row;
        &__bar {
            width: 7px;
            height: 19px;
            background: #503483;
            border-radius: 2px;
            border-radius: 2px;
        }
        &__title {
            height: 21px;
            line-height: 21px;
            margin:0 10px;
            font-weight: bold;
            font-family: MicrosoftYaHei-Bold;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
        }
    }
    &__content {
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        padding-bottom: 89px;
        justify-content: center;
        &__item {
            position: relative;
            width: 380px;
            height: 138px;
            margin: 0 5px;
            background: #FFFFFF;
            box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
            border-radius: 2px;
            .itemName {
                margin: 20px 0 0 20px;
                font-family: MicrosoftYaHei-Bold;
                font-size: 16px;
                font-weight: bolder;
                color: #333333;
                letter-spacing: 0;
            }
            .holdDetail {
                position: absolute;
                width: 68px;
                height: 28px;
                line-height: 28px;
                font-size: 14px;
                border: 1px solid #F5A623;
                border-radius: 14px;
                color: #F5A623;
                text-align: center;
                top: 20px;
                right: 10px;
            }
            .itemData {
                margin: 20px 0 0 20px;
                display: flex;
                flex-direction: row;
                .col {
                    display: flex;
                    flex-direction: column;
                    .itemDesc {
                        margin-top: 2px;
                        font-family: MicrosoftYaHei;
                        font-size: 12px;
                        color: #999999;
                        letter-spacing: 0;
                    }
                }
                .col:nth-child(2) {
                    margin-left: 120px;
                }
            }
            
        }
    }
}
</style>