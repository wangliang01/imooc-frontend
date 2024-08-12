<template>
  <div class="layui-container flex">
    <div class="flex pt-4 flex-1 gap-4">
      <ul class="layui-nav layui-nav-tree h-100%">
        <li v-for="(item, index) in navList" :key="`navList-${index}`" class="layui-nav-item layui-nav-itemed">
          <a href="javascript:;">
            <i class="iconfont mr-2" :class="item.icon"></i>
            {{ item.title }}
          </a>
        </li>
      </ul>
      <div class="content flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navList = ref([
  {
    icon: 'icon-zhuye',
    title: '我的主页',
    path: '/'
  },
  {
    icon: 'icon-shezhi',
    title: '基本设置',
    path: '/'
  },
  {
    icon: 'icon-tiezi',
    title: '我的帖子',
    path: '/'
  },
  {
    icon: 'icon-xiaoxi',
    title: '我的消息',
    path: '/'
  },
  {
    icon: 'icon-qitashezhi',
    title: '其他设置',
    path: '/'
  }
])
</script>

<style lang="scss" scoped></style>
