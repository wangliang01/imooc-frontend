<template>
  <div class="h-15 layui-bg-black">
    <div class="layui-container">
      <div class="flex items-center">
        <a class="w-[200px] h-[60px]" href="/">
          <img src="../assets/img/logo-2.png" alt="layui" class="w-[200px] h-[60px]" />
        </a>
        <ul class="ml-auto layui-nav layui-hide-xs">
          <li class="layui-nav-item layui-this">
            <a href="/" class="flex items-center"> <i class="iconfont icon-jiaoliu"></i>交流 </a>
          </li>
          <li class="layui-nav-item">
            <a href="case/case.html" class="flex items-center"> <i class="iconfont icon-iconmingxinganli"></i>案例 </a>
          </li>
          <li class="layui-nav-item">
            <a href="http://www.layui.com/" target="_blank" class="flex items-center"> <i class="iconfont icon-ui"></i>框架 </a>
          </li>
        </ul>
        <ul class="ml-auto layui-nav">
          <!-- 未登入的状态 -->
          <template v-if="!isLogin">
            <li class="layui-nav-item">
              <router-link class="iconfont icon-touxiang layui-hide-xs" to="/user123123"></router-link>
            </li>
            <li class="layui-nav-item layui-hide-sm layui-show-md-inline-block">
              <router-link :to="{ name: 'login' }">登入</router-link>
            </li>
            <li class="layui-nav-item layui-hide-sm layui-show-md-inline-block">
              <router-link :to="{ name: 'register' }">注册</router-link>
            </li>
            <li class="layui-nav-item layui-hide-sm layui-show-md-inline-block">
              <a href onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入" class="iconfont icon-qq"></a>
            </li>
            <li class="layui-nav-item layui-hide-sm layui-show-md-inline-block">
              <a href onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入" class="iconfont icon-weibo"></a>
            </li>
          </template>
          <!-- 已登入的状态 -->
          <template v-else>
            <!-- <li class="layui-nav-item">
              <div class="flex items-center">
                <a href="javascript:;" class="layui-hide-xs">
                  <span class="pr-2">{{ userInfo.nickname }}</span>
                  <img :src="userInfo.avatar" alt="头像" class="w-[40px] h-[40px] rounded-full" />
                </a>
              </div>
            </li> -->
            <li class="layui-nav-item" @mouseover="show()" @mouseleave="hide()">
              <a class="fly-nav-avatar">
                <cite class="layui-hide-xs">{{ userInfo.nickname }}</cite>
                <!-- <i class="iconfont icon-renzheng layui-hide-xs" title="认证信息：layui 作者"></i> -->
                <i v-show="userInfo.vip !== '0'" class="layui-badge fly-badge-vip layui-hide-xs">VIP{{ userInfo.vip }}</i>
                <img v-lazy="userInfo.avatar" class="w-[40px] h-[40px] rounded-full" />
              </a>
              <dl class="layui-nav-child layui-anim layui-anim-upbit" :class="{ 'layui-show': isHover }">
                <dd class="cursor-pointer flex items-center">
                  <router-link :to="{ name: 'userSetting' }"> <i class="layui-icon layui-icon-set !text-[18px] mr-2"></i>基本设置 </router-link>
                </dd>
                <dd class="cursor-pointer flex items-center">
                  <router-link :to="{ name: 'userMessage' }"> <i class="layui-icon layui-icon-reply-fill !text-[18px] mr-2"></i>我的消息 </router-link>
                </dd>
                <dd class="cursor-pointer flex items-center">
                  <router-link :to="{ name: 'userInfo' }"> <i class="layui-icon layui-icon-home !text-[18px] mr-2"></i>我的主页 </router-link>
                </dd>
                <hr style="margin: 5px 0" />
                <dd>
                  <a href="javascript: void(0)" style="text-align: center" @click="logout()">退出</a>
                </dd>
              </dl>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()
console.log('🚀 ~ userStore:', userStore.user)
const isLogin = toRef(userStore, 'isLogin')
const userInfo = toRef(userStore, 'user')

const isHover = ref(false)
const timer = ref(null)

console.log('userInfo', userStore.user)

const show = () => {
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    isHover.value = true
  }, 200)
}

const hide = () => {
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    isHover.value = false
  }, 500)
}

const logout = () => {
  userStore.logout()
  router.push({ name: 'index' })
}
</script>

<style lang="scss" scoped></style>
