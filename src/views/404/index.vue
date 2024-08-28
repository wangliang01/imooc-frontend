<template>
  <div class="layui-container flex">
    <img src="../../assets/img/icon-404.png" width="100px" alt="404" />
    <p class="my-4 text-[#999]">找不到页面了</p>
    <router-link :to="{ name: 'index' }" class="layui-btn">回到首页</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.flex {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
