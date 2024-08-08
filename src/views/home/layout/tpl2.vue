<template>
  <div class="layui-container">
    <div class="layui-row">
      <div class="layui-col-md8">
        <List></List>
      </div>
      <div class="layui-col-md4">
        <div class="flex flex-col gap-4">
          <HotList></HotList>
          <Ads></Ads>
          <Links></Links>
        </div>
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

<style lang="scss" scoped>

</style>
