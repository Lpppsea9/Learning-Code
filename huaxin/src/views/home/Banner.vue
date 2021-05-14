<template>
  <div class="banner">
    <div class="banner__dots">
      <div 
        v-for="(item, index) in dotsList" :key="index"
        :class="{
          'banner__dots__item': true,
          'banner__dots__item--active': currentIndex === item.index
        }"
      >

      </div>
      <!-- <div class="banner__dots__item"></div>
      <div class="banner__dots__item"></div>
      <div class="banner__dots__item"></div> -->
    </div>
    <div class="banner__scan">
      <div class="banner__scan__login">我要登录</div>
      <div class="banner__scan__open">我要开户</div>
      <div class="banner__scan__img"></div>
      <div class="banner__scan__desc">扫一扫关注微信公众号</div>
    </div>
  </div>
</template>

<script>
const dotsList = [0,1,2,3]
const currentIndex = dotsList[2]
export default {
    name:'Banner',
    setup() {
      return { dotsList, currentIndex }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 450px;
    background: url('../../assets/img/banner.png') no-repeat center;
    background-size: 100% 450px;
    &__dots {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 136px;
      height: 20px;
      background: rgba(255,255,255,0.54);
      border-radius: 10px;
      border-radius: 10px;
      bottom: 20px;
      &__item {
        margin-left: 7px;
        margin-right: 7px;
        width: 9px;
        height: 9px;
        background: #FFFFFF;
        border-radius: 50%;
        &--active {
          background: #F08200;
        }
      }
      &__item:hover {
        cursor: pointer;
        background: #F08200;
      }
      
    }
    &__scan {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      left: 1260px;
      right: 360px;
      top:30px;
      bottom: 40px;
      width: 300px;
      height: 380px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 8px;
      &__login, &__open {
        width: 260px;
        height: 50px;
        line-height: 50px;
        margin-top: 30px;
        background: #F5A623;
        text-align: center;
        font-family: MicrosoftYaHei-Bold;
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        letter-spacing: 0;
        border-radius: 8px;
        border-radius: 8px;
        cursor: pointer;
      }
      &__open {
        margin-top: 20px;
      }
      &__img {
        width: 160px;
        height: 160px;
        background: url('../../assets/img/home/scanImg.png') no-repeat ;
        background-size: 100% 100%;
        margin-top: 20px;
      }
      &__desc {
        margin-top: 10px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #533687;
        letter-spacing: 0;
      }
    }

}

</style>