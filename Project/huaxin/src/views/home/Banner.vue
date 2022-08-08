<template>
  <div class="relative flex justify-center w-full h-112.5 bg-home-banner bg-no-repeat ">
    <div class="w-34 h-5 absolute bottom-5 flex items-center justify-center  bg-mydotsbgc rounded-10px">
      <div 
        v-for="(item, index) in dotsList" :key="index"
        :class="{
          'mx-2 w-2 h-2 bg-white rounded-50% hover:bg-myorange cursor-pointer': true,
          'dots--active': currentIndex === item.index
        }"
      >
      </div>
    </div>
    <div class="absolute flex flex-col items-center top-7.5 right-90 bottom-7.5 left-auto w-75 h-95 rounded-lg bg-myscanbgc">
      <div class="mt-7.5 w-65 h-12.5 leading-12.5 font-bold text-lg text-center text-white rounded-lg bg-myorange ">我要登录</div>
      <div class="mt-5 w-65 h-12.5 leading-12.5 font-bold text-lg text-center text-white rounded-lg bg-myorange ">我要开户</div>
      <div class="mt-5 w-40 h-40 bg-home-scan bg-contain bg-no-repeat "></div>
      <div class="mt-2.5 tracking-normal text-mypurple">扫一扫关注微信公众号</div>
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
</style>