<template>
    <div class="flex justify-center w-full">
        <div class="w-300 mt-10 mb-72.5">
            <div class="flex w-300 h-16.5 bg-mypurple">
                <div class="flex ml-5 w-full h-16.5">
                    <div 
                        :class="{'relative mr-15 pt-5 pb-7.5 text-lg text-white tracking-normal cursor-pointer': true, 'tab-active': currentTab === item.name}"
                        v-for="item in tabList"
                        :key="item.id"
                        @click="() => handleTabClick(item.name)"
                    >
                        {{item.name}}
                    </div>
                </div>
            </div>
            <div class="w-full h-162.5 bg-white shadow-mybusitem rounded">
                <div class="w-full h-41.25 flex border-solid border-b-2 border-mynoticebgc">
                    <div class="relative mt-7.5 mr-10 mb-8.75 ml-5">
                        <img src="../../assets/img/myAccount/avatar.png" alt="用户">
                        <div class="absolute left-12.5 bottom-18.75 w-19 h-7.5 leading-7.5 bg-positive border border-solid border-white rounded-15px text-sm text-center text-white tracking-normal">积极型</div>
                    </div>
                    <div class="desc">
                        <div class="flex">
                            <div class="mt-13.5 h-6 leading-6 text-lg text-myfontcolor font-bold tracking-normal">欢迎您，吴晓岚</div>
                            <div class="ml-2.5 mt-14.5 h-4.75 leading-4.75  text-14px text-myfontcolor tracking-normal">（ 合格投资者认定：<span class="text-myorange">未认定</span> ）</div>
                        </div>
                        <div class="flex mt-2.5 h-4.75 leading-4.75">
                            <div class="text-14px text-myfontcolor tracking-normal">投资者：普通</div>
                            <div class="ml-5 text-14px text-lastdate tracking-normal">上次登录：2021-03-23 14:30：55</div>
                        </div>
                    </div>
                    <div class="mt-14 mr-5 mb-20 ml-auto w-21.5 h-7.5 leading-7.5 bg-preinfo rounded-2xl text-sm text-white text-center tracking-normal">预留信息</div>
                </div>
                <div class="relative h-38.75">
                    <div class="mt-7.5 mr-0 mb-0 ml-5 flex">
                        <div class="w-2 h-5 bg-mypurple rounded-sm"></div>
                        <div class="my-0 mx-2.5 h-5 leading-5 text-base text-myfontcolor font-bold tracking-normal">我的总资产（元）</div>
                        <div class="flex items-center"><img src="../../assets/img/myAccount/eye.png" alt="eyeIcon"></div>
                        <div class="ml-5 h-5 leading-5 text-sm text-lastdate tracking-normal">更新时间：2021-03-23</div>
                    </div>
                    <div class="flex mt-10 ml-9">
                        <div>
                            <div class="assetNumber text-40px text-myorange tracking-normal">100000.00</div>
                            <div class="mt-1 text-sm text-lastdate tracking-normal">在途资产 <span class="text-myorange">0.00</span> 元</div>
                        </div>
                        <div class="ml-50">
                            <div class="assetNumber text-40px text-myorange tracking-normal">100000.00</div>
                            <div class="mt-1 text-sm text-lastdate tracking-normal">累计收益（元）</div>
                        </div>
                    </div>
                    <!-- 扇形图 -->
                    <div id="myEcharts" class="absolute left-162.5" :style="{ width: '650px', height: '180px' }"></div>
                </div>
                <div>
                    <div class="flex mt-12 mr-0 mb-0 ml-5">
                        <div class="w-2 h-5 bg-mypurple rounded-sm"></div>
                        <div class="my-0 mx-2.5 h-5 leading-5 text-base text-myfontcolor font-bold tracking-normal">我的持仓</div>
                    </div>
                    <div class="flex justify-center mt-7.5 pb-24">
                        <div 
                            class="relative my-0 mx-1 w-95 h-36 bg-white shadow-myposition rounded-sm"
                            v-for="(item, index) in myPositionData" :key="index"
                        >
                            <div class="mt-5 mr-0 mb-0 ml-5 text-base text-myfontcolor font-bold tracking-normal">{{item.name}}</div>
                            <div class="absolute top-5 right-2.5 w-17 h-7 leading-7 text-sm text-myorange text-center border border-solid border-myorange rounded-xl">持有明细</div>
                            <div class="flex mt-2 mr-0 mb-0 ml-5">
                                <div class="flex flex-col">
                                    <div class="assetNumber text-40px text-myorange tracking-normal">{{item.growthRate}}</div>
                                    <div class="mt-0.5 text-xs text-lastdate tracking-normal">成立以来净值增长率</div>
                                </div>
                                <div class="flex flex-col ml-30">
                                    <div class="assetNumber text-40px text-myorange tracking-normal">{{item.income}}</div>
                                    <div class="mt-0.5 text-xs text-lastdate tracking-normal">累计收益（元）</div>
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
                color:[ '#F2734E','#7DCAA6','#7878FA', '#68C7EB' ],
                tooltip: {
                    show: false,
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    height: '160px',
                    itemGap: 15,
                    itemWidth:15,
                    itemHeight:15,
                    right: '370px',
                    top:'25px',
                    icon: 'circle',
                    itemStyle: {
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        width: 'auto',
                        height: '100%',
                        right:'400px',
                        top: '-10px',
                        radius: '80%',
                        itemStyle: {
                            borderWidth:2,
                            borderColor: '#fff'
                        },
                        label: {
                            show:false
                        },
                        data: [
                            {value: 25, name: '固收类'},
                            {value: 12, name: '权益类'},
                            {value: 25, name: '混合类'},
                            {value: 28, name: 'FOF类'},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                borderColor: '#fff'
                            }
                        }
                    }
                ]
	        }
            chart.setOption(option)
            // window.onresize = myChart.resize;
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
.tab-active {
    color: #F5A623;
    font-weight: bold;
}
.tab-active:after {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -22px;
    bottom: 0;
    height: 4px;
    width: 44px;
    background-color: #F5A623;
}
.assetNumber {
    font-family: "DINCond-Bold";
}
.assetEchart {
    position: absolute;
    top: 0;
    right: 0;
}
#myEcharts {
    top:0
}
</style>