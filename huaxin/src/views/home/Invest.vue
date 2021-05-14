<template>
    <div class="wrap">
        <div class="class__title">
            <div class="class__title__item">
                <div class="class__title__item--line"></div>
                <div class="class__title__item--word">本周热销产品</div>
                <div class="class__title__item--line"></div>
            </div>
            <div class="class__title__eng">PRODUCTS SELL LIKE HOT CAKES</div>
        </div>
        <div class="class__imgs">
            <div class="class__div">
                <img src="../../assets/img/home/investClass.png" >
            </div>
            <div class="class__div">
                <img src="../../assets/img/home/investClass.png" >
            </div>
            <div class="class__div">
                <img src="../../assets/img/home/investClass.png" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Invest'
}
</script>

<style lang="scss" scoped>
.wrap {
    // width: 100%;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    .class__title {
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
    .class__imgs {
        margin: 80px 0 93px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .class__div {
            width: 390px;
            height: 450px;
            margin:0 7.5px;
        }
        .class__div img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>