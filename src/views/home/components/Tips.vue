<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear imooc-quick">
        <li v-for="(item, index) in list" :key="'tips' + index" class="layui-col-xs6">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getTips } from '@/api/content'
import { onMounted, ref } from 'vue'
const list = ref([])

onMounted(async () => {
  const res = await getTips()
  list.value = res.data
})
</script>

<style lang="scss" scoped></style>
