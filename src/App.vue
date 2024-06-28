<script setup>
import VHeader from '@/components/Header.vue'
console.log("VHeader", VHeader)
import VFooter from '@/components/Footer.vue'

</script>

<template>
  <VHeader></VHeader>
  <router-view></router-view>
  <VFooter></VFooter>
</template>

<style>
@import url("./assets/css/full.css");
@import url("./assets/css/global.css");
@import url("./assets/css/layui-layer/layer.css");
</style>
