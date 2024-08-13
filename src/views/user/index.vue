<template>
  <div class="layui-container flex">
    <div class="flex pt-4 flex-1 gap-4">
      <ul class="layui-nav layui-nav-tree h-100% sm:hidden md:block">
        <li v-for="(item, index) in navList" :key="`navList-${index}`" class="layui-nav-item layui-nav-itemed">
          <router-link :to="{ name: item.name }" class="!flex items-center" active-class="layui-this">
            <i class="layui-icon mr-2" :class="item.icon"></i>
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <div class="flex-1 flex flex-col">
        <router-view class="flex-1"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navList = ref([
  {
    icon: 'layui-icon-home',
    title: '我的主页',
    name: 'userInfo'
  },
  {
    icon: 'layui-icon-username',
    title: '用户中心',
    name: 'userCenter'
  },
  {
    icon: 'layui-icon-set',
    title: '基本设置',
    name: 'userSetting'
  },
  {
    icon: 'layui-icon-tabs',
    title: '我的帖子',
    name: 'userPost'
  },
  {
    icon: 'layui-icon-reply-fill',
    title: '我的消息',
    name: 'userMessage'
  },
  {
    icon: 'layui-icon-util',
    title: '其他设置',
    name: 'otherSetting'
  }
])
</script>

<style lang="scss" scoped></style>
