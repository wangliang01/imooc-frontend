<script setup>
import VHeader from '@/components/Header.vue'
console.log('VHeader', VHeader)
import VFooter from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <VHeader></VHeader>
    <router-view class="flex-1"></router-view>
    <VFooter></VFooter>
  </div>
</template>

<style>
@import url('./assets/css/layui/css/layui.css');
@import url('./assets/css/full.css');
@import url('./assets/css/global.css');
</style>
