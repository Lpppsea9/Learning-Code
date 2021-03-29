<template>
  <div>
    <a-menu mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <a-menu-item><router-link to="/">Home</router-link></a-menu-item>
      <!-- 引用其他子应用 -->
      <a-menu-item><router-link to="/vue1">vue应用1</router-link></a-menu-item>
      <a-menu-item><router-link to="/vue2">vue应用2</router-link></a-menu-item>
    </a-menu>
    <router-view v-show=""></router-view>
    <div id="vue1"></div>
    <div id="vue2"></div>
  </div>
</template>
