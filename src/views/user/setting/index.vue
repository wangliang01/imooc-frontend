<template>
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul id="LAY_mine" class="layui-tab-title">
        <li>
          <router-link :to="{ name: 'info' }" exact-active-class="layui-this">我的资料</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'avatar' }" exact-active-class="layui-this">头像</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'password' }" exact-active-class="layui-this">密码</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'accountBinding' }" exact-active-class="layui-this">帐号绑定</router-link>
        </li>
      </ul>
      <div class="layui-tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
