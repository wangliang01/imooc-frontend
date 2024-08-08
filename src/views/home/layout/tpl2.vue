<template>
  <div class="layui-container">
    <div class="layui-row flex gap-4">
      <div class="layui-col-md8">
        <List></List>
      </div>
      <div class="layui-col-md4">
        <HotList></HotList>
        <Ads></Ads>
        <Links></Links>
      </div>
    </div>
  </div>
</template>

<script setup>
import List from '@/views/home/components/List.vue'
import HotList from '@/views/home/components/HotList.vue'
import Ads from '@/views/home/components/Ads.vue'
import Links from '@/views/home/components/Links.vue'
</script>

<style lang="scss" scoped></style>
