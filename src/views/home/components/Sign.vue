<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a id="LAY_signinHelp" href="javascript:;" class="fly-link" @click="showInfo()">说明</a>
      <i class="fly-mid"></i>
      <a id="LAY_signinTop" href="javascript:;" class="fly-link" @click="showTop()">
        活跃榜
        <span class="layui-badge-dot"></span>
      </a>
      <span v-show="isSign || isLogin" class="fly-signin-days">
        已连续签到
        <cite>{{ count }}</cite
        >天
      </span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <template v-if="!isSign">
        <button id="LAY_signin" class="layui-btn layui-btn-danger" @click="sign()">今日签到</button>
        <span class="layui-hide-sm layui-show-md-inline-block">
          可获得
          <cite>{{ favs }}</cite
          >飞吻
        </span>
      </template>
      <!-- 已签到状态 -->
      <template v-else>
        <button class="layui-btn layui-btn-disabled">{{ msg }}</button>
        <span>
          获得了
          <cite>{{ favs }}</cite
          >飞吻
        </span>
      </template>
    </div>
    <sign-info :is-show="isShow" @close-modal="close()"></sign-info>
    <sign-list v-model="showList"></sign-list>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SignInfo from './SignInfo.vue'
import SignList from './SignList.vue'
import { userSign } from '@/api/user'
import { useUserStore } from '../../../store/user'

const isShow = ref(false)
const loading = ref(false)
const userStore = useUserStore()
const isSign = computed(() => {
  return userStore.user?.isSign || false
})
const msg = computed(() => {
  return isSign.value ? '今日已签到' : '今日签到'
})
const favs = computed(() => {
  const count = userStore.user?.count || 0
  if (count < 5) {
    return 5
  }
  if (count < 15) {
    return 10
  }
  if (count < 30) {
    return 15
  }
  if (count < 100) {
    return 20
  }
  if (count < 365) {
    return 30
  }
  return 50
})

const count = computed(() => {
  return userStore.user?.count || 0
})

const isLogin = computed(() => {
  return userStore.isLogin
})

const showList = ref(false)

// 显示签到说明
const showInfo = () => {
  isShow.value = true
}

// 显示签到排行榜
const showTop = () => {
  showList.value = true
}

// 签到
const sign = async () => {
  console.log('签到')
  if (loading.value) return
  loading.value = true
  const res = await userSign().finally(() => {
    loading.value = false
  })

  const userInfo = {
    ...useUserStore.user,
    ...res.data,
    isSign: true
  }

  userStore.setUser(userInfo)
}

// 关闭弹窗
const close = () => {
  isShow.value = false
}
</script>

<style lang="scss" scoped></style>
