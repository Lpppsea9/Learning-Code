<template>
    <div class="mt-20 w-full flex justify-center">
        <div class="w-300 h-75 leading-75 text-center text-5xl font-bold text-white bg-home-adv tracking-normal">
            广告/新闻/咨询
        </div>
    </div>
</template>

<script>
export default {
    name: 'Advertisement'
}
</script>

<style lang="scss" scoped>
.wrap {
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.advertiseImg {
    width: 1200px;
    height: 300px;
    line-height: 300px;
    font-weight: bold;
    background: url('../../assets/img/home/advertise.png') no-repeat;
    font-family: MicrosoftYaHei-Bold;
    font-size: 50px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}
</style>