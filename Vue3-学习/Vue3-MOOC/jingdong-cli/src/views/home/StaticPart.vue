<template>
  <div class="position">
      <span class="iconfont position__icon">&#xe70b;</span>
      上海理工大学国防科技园2号楼10层上海理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xecaa;</span>
    </div>

  <div class="search">
    <div class="iconfont">&#xe613;</div>
    <input value="山姆会员商店优惠商品" class="search__text" />
  </div>

  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>

  <div class="icons">
    <div class="icons__item" v-for="item in iconsList" :key="item.id">
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <p class="icons__item__desc">{{item.desc}}</p>
    </div>
  </div>

  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花种植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '烘培蛋糕' },
      { imgName: '蛋糕', desc: '超市便利' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.position {
  color:$content-fontcolor;
  overflow: hidden;
  position: relative;
  // margin-right: .24rem; //不用margin,否则🔔图标也会向右偏移
  padding: .16rem .24rem .16rem 0 ;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.search {
  display: flex;
  margin-bottom: .12rem;
  height: .32rem;
  line-height: .32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    width: .16rem;
    position: relative;
    display: inline-block;
    font-size: .16rem;
    padding: 0 .12rem 0 .16rem;
  }
  &__text {
    width: 2.9rem;
    display: inline-block;
    font-size: .14rem;
    border: none;
  }
  input {
    flex: 1;
    // background: green ;
    background: $search-bgColor;
    border-radius: 0 .16rem .16rem 0;
    width: 100%;
    border: 0;
    outline: none;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    cursor: text;
    margin: 0rem;
    padding: 10px 0 10px 0;
    overflow: hidden;
  }
}
.banner {
  // 防止轮播区域抖动,影响到下面的元素
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
