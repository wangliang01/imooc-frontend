<template>
  <div class="bg-white rounded-sm p-4">
    <div class="text-[#666] text-lg">Hi, Admin，你已经是我们的正式会员！</div>
    <div class="mt-4">
      <div class="flex gap-4">
        <div class="flex-1 border rounded-sm">
          <div class="h-[50px] leading-[50px] px-4 border-b border-dotted border-[#e9e9e9] text-[#333]">我的会员信息</div>
          <div class="px-4 py-3">
            <p class="text-[#666] text-sm">
              积分经验值：
              <cite class="text-[#f00]">66</cite>
            </p>
            <p class="text-[#666] text-sm">
              您当前为:
              <cite class="text-[#f00]">非VIP</cite>
            </p>
          </div>
        </div>
        <div class="flex-1">
          <Sign class="border !m-0"></Sign>
        </div>
      </div>
      <div class="mt-4">
        <div class="border rounded-sm">
          <div class="h-[50px] leading-[50px] px-4 border-b border-dotted border-[#e9e9e9] text-[#333]">快捷方式</div>
          <div class="px-4 py-3" style="height: auto">
            <ul class="grid gap-5 grid-flow-row sm:grid-cols-4 xs:grid-cols-3">
              <li v-for="(item, index) in list" :key="'user-center' + index" class="cursor-pointer text-center">
                <a>
                  <div class="layui-icon shortcut !text-[20px]" :class="item.icon"></div>
                  <p class="mt-1">{{ item.name }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sign from '@/views/home/components/Sign.vue'

const list = ref([
  {
    name: '修改信息',
    route: 'info',
    icon: 'layui-icon-set'
  },
  {
    name: '修改头像',
    route: 'pic',
    icon: 'layui-icon-face-smile'
  },
  {
    name: '修改密码',
    route: 'passwd',
    icon: 'layui-icon-password'
  },
  {
    name: '账号绑定',
    route: 'account',
    icon: 'layui-icon-app'
  },
  {
    name: '发表新贴',
    route: '',
    icon: 'layui-icon-add-circle'
  },
  {
    name: '查看分享',
    route: '',
    icon: 'layui-icon-share'
  },
  {
    name: '我的帖子',
    route: 'mypost',
    icon: 'layui-icon-username'
  },
  {
    name: '我的收藏',
    route: 'mycollection',
    icon: 'layui-icon-rate-solid'
  },
  {
    name: '其他资料',
    route: '',
    icon: 'layui-icon-template-1'
  },
  {
    name: '关注公众号',
    route: '',
    icon: 'layui-icon-login-wechat'
  },
  {
    name: '文档',
    route: '',
    icon: 'layui-icon-read'
  },
  {
    name: '后台管理',
    route: '',
    icon: 'layui-icon-user'
  }
])
</script>

<style lang="scss" scoped></style>
