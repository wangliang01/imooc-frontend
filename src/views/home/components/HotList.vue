<template>
  <div>
    <dl class="fly-panel fly-list-one">
      <dt class="fly-panel-title">本周热议</dt>
      <dd v-for="(item, index) in list" :key="'hotlist' + index">
        <router-link>{{ item.title }}</router-link>
        <span>
          <i class="iconfont icon-pinglun1"></i>
          {{ item.answerNum }}
        </span>
      </dd>
      <!-- 无数据时 -->
      <!--
        <div class="fly-none">没有相关数据</div>
      -->
    </dl>
  </div>
</template>

<script setup>
import { getTopWeek } from '@/api/content'
import { onMounted, ref } from 'vue'
const list = ref([])

onMounted(async () => {
  const res = await getTopWeek()
  list.value = res.data
  console.log('🚀 ~ onMounted ~ list.value:', list.value)
})
</script>

<style lang="scss" scoped></style>
