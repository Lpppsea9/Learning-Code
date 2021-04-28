<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe70b;</span>
      上海理工大学国防科技园2号楼10层上海理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xecaa;</span>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f9;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6bc;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe63e;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixin.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
  .position {
    color:$content-font-color;
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
}
.docker {
  color: $content-font-color;
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top
  }
}
</style>
