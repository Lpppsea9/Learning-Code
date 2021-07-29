<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe677;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">
          &#xe613;
        </span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-if="item.imgUrl" />
    <Content />
    <Csart />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'
import Cart from './Cart.vue'

// 获取当前商铺信息
const useShopInfoEffect = () => {
  /*
    为什么这样做？为什么这边用 reactive？
    用 reactive 为什么不直接加一个对象呢
    为什么不用 ref 呢？试试其他的
    最终这个方法是定义一个大的对象中最简单的
  */
  const data = reactive({ item: {} })
  const route = useRoute()
  const getItemData = async () => {
    // route.params.id 可以获得当前页面路由的 id
    const result = await get(`api/shop/${route.params.id}`)
    if(result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, CartCart },
  setup() {
    // Router 是指当前整个大的路由的一些信息
    // route 指的是当前你访问路径的一些信息
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline:none ;
      background: none;
      color: $content-fontcolor;
      font-size: .14rem;
      &::placeholder {
        color: $content-fontcolor;

      }
    }
  }
}
</style>
