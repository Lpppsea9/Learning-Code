<template>
  <div class="search">
      <div class="search__welcome">华鑫证券欢迎您！</div>
      <div class="search__callicon"></div>
      <div class="search__callnumber">95323（全国统一服务热线）</div>
      <div class="search__item">
          <input class="search__item__input" />
          <div class="search__item__button">
              <div class="button__img"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style lang="scss" scoped>
.search {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #533687;
    height: 60px;
    position: relative;
    // align-items: center;
    // line-height: 60px;
    &__welcome {
        width: 112px;
        white-space: nowrap;
        height: 19px;
        margin: 21px 0 20px 360px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: hsl(0, 0%, 100%);
        letter-spacing: 0;
    }
    &__callicon {
        width: 19.9px;
        height: 19.9px;
        margin: 21px 0 20px 476px;
        background: url('../assets/img/phone_icon.png') no-repeat center;
    }
    &__callnumber {
        width: 182px;
        height: 20px;
        margin: 21px 0 20px 10.1px;
        white-space: nowrap;
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    &__item {
        display: flex;
        position: absolute;
        right: 18.8%;
        flex-direction: row;
        width: 380px;
        height: 44px;
        margin: 9px 0px 7px 20px;
        background: #FFFFFF;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.67); //透明度不影响子元素
        &__input {
            // background-color: rgba(255, 255, 255, 0.67); 
            background: rgb(199,189,215);
            width: 280px;
            border: none;
            line-height: 42px;
            border-radius: 8px 0 0 8px;
            outline: none;
        }
        &__button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100px;
            height: 44px;
            background: #F5A623;
            border-radius: 0px 8px 8px 0px;
            cursor: pointer;
            .button__img {
                align-self: center;
                width: 26px;
                height: 26px;
                background: #F5A623;
                background: url('../assets/img/search_icon.png');
            }
        }
    }
}
</style>>
