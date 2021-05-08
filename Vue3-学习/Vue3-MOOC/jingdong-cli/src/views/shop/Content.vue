<template>
  <div class="content">
    <div class="category">
      <div
        :class="{'category__item': true, 'category__item--active': currentTab === item.tab}"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{item.name}}
      </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
      >
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__sales">月售 {{item.sales}}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{item.price}}
            <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__item__number">
          <span class="product__item__number__minus">-</span>
          0
          <span class="product__item__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit'}
]

// Tab 切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    /*  getContentData(tab)
        每次点击侧边栏的种类都会去请求不同的数据，
        虽然在页面上是一样的，
        但是在Network中是实现了products?tab=all的操作*/
    // getContentData(tab)
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 列表内容相关的逻辑
const useCurrentListEffect = (currentTab) => {
  const route = useRoute()
  const shopId = route.params.id
  const content = reactive({ list: [] })

  // 传一个参数进来,表明你是想取哪一种数据, 是全部商品?秒杀?新鲜水果
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if(result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
    // console.log(result)
  }

  // watchEffect指的是当页面首次加载的时候以及他监听的一些数据发生变化的时候，他就会执行
  watchEffect(() => { getContentData() })

  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup() {
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab)


    // getContentData('all')
    // const { contentList } = toRefs(data)
    return { categories, currentTab, list, handleTabClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  // background: #ccc;
}
.category {
  overflow: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: 14px;
    color: $content-fontcolor;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    display: flex;
    position: relative;
    // padding: .12rem .16rem;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    // 加减按钮的样式
    &__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
}
</style>
