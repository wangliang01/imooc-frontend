<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link v-slot="{ isExactActive }" to="/">
          <li :class="{ 'layui-this': isExactActive }" class="layui-hide-xs layui-col-sm4 layui-col-md3 layui-col-lg1">
            <a>首页</a>
          </li>
        </router-link>
        <router-link v-for="(item, index) in list" v-slot="{ isExactActive }" :key="'panel' + index" :to="item.path">
          <li :class="{ 'layui-this': isExactActive }" class="layui-col-sm4 layui-col-md3 layui-col-lg1">
            <a>
              {{ item.name }}
              <span v-if="item.isNew" class="layui-badge-dot"></span>
            </a>
          </li>
        </router-link>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
          <span class="fly-mid"></span>
        </li>

        <template v-if="isLogin">
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
            <router-link>我发表的贴</router-link>
          </li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block">
            <router-link>我收藏的贴</router-link>
          </li>
        </template>
      </ul>

      <div class="px-5 fly-column-right layui-hide-xs">
        <span class="fly-search">
          <i class="layui-icon"></i>
        </span>
        <router-link class="layui-btn">发表新帖</router-link>
      </div>
      <div class="layui-hide-sm layui-show-xs-block" style="margin-top: -10px; padding-bottom: 10px; text-align: center">
        <router-link to="/index/post" class="layui-btn">发表新帖</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
const list = ref([
  {
    name: '提问',
    path: '/index/ask',
    isNew: false
  },
  {
    name: '分享',
    path: '/index/share',
    isNew: true
  },
  {
    name: '讨论',
    path: '/index/discuss',
    isNew: false
  },
  {
    name: '建议',
    path: '/index/advise',
    isNew: false
  },
  {
    name: '公告',
    path: '/index/notice',
    isNew: false
  },
  {
    name: '动态',
    path: '/index/logs',
    isNew: false
  }
])

const userStore = useUserStore()

console.log(userStore.isLogin)

const isLogin = computed(() => {
  return userStore.isLogin
})
</script>

<style lang="scss" scoped></style>
