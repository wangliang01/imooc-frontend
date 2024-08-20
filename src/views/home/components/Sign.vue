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
    <!-- <sign-list :isShow="showList" @closeModal="close()"></sign-list> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SignInfo from './SignInfo.vue'

const isShow = ref(false)

const showInfo = () => {
  isShow.value = true
}

const close = () => {
  isShow.value = false
}
</script>

<style lang="scss" scoped></style>
