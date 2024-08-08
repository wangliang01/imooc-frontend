<template>
  <div class="layui-container">
    <div class="layui-row flex gap-4">
      <div class="layui-col-md8">
        <ImoocTop></ImoocTop>
        <ImoocList></ImoocList>
      </div>
      <div class="layui-col-md4">
        <ImoocTips></ImoocTips>
        <ImoocSign></ImoocSign>
        <ImoocHotList></ImoocHotList>
        <ImoocAds></ImoocAds>
        <ImoocLinks></ImoocLinks>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImoocTop from '@/views/home/components/Top.vue'
import ImoocList from '@/views/home/components/List.vue'
import ImoocTips from '@/views/home/components/Tips.vue'
import ImoocSign from '@/views/home/components/Sign.vue'
import ImoocHotList from '@/views/home/components/HotList.vue'
import ImoocAds from '@/views/home/components/Ads.vue'
import ImoocLinks from '@/views/home/components/Links.vue'
</script>

<style lang="scss" scoped></style>
