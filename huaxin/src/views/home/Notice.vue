<template>
  <div class="notice">
      <div class="notice__icon"></div>
      <div class="notice__word">通知：这里是通知的相关信息</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.notice {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 70px;
    background: #F8F8F8;
    line-height: 70px;
    &__icon {
        width: 30px;
        height: 30px;
        margin-left: 360px;
        background: url('../../assets/img/home/notice_icon.png') no-repeat;
    }
    &__word {
        margin-left: 20px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #533687;
        letter-spacing: 0;
    }
}
</style>