<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <div class="flex items-center">
        <a class="w-[200px] h-[60px]" href="/">
          <img src="../assets/img/logo-2.png" alt="layui" class="w-[200px] h-[60px]" />
        </a>
        <ul class="layui-nav fly-nav layui-hide-xs">
          <li class="layui-nav-item layui-this">
            <a href="/">
              <i class="iconfont icon-jiaoliu"></i>交流
            </a>
          </li>
          <li class="layui-nav-item">
            <a href="case/case.html">
              <i class="iconfont icon-iconmingxinganli"></i>案例
            </a>
          </li>
          <li class="layui-nav-item">
            <a href="http://www.layui.com/" target="_blank">
              <i class="iconfont icon-ui"></i>框架
            </a>
          </li>
        </ul>
        <ul class="layui-nav  ml-auto">
          <!-- 未登入的状态 -->
          <li class="layui-nav-item">
            <router-link class="iconfont icon-touxiang layui-hide-xs" to="/user123123"></router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'register' }">注册</router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入"
              class="iconfont icon-qq"></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入"
              class="iconfont icon-weibo"></a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped></style>