<script setup>
import { onMounted, ref } from 'vue'
import request from '@/utils/request'

const captcha = ref('')

const getCaptcha = async () => {
  const res = await request.get('/captcha')
  captcha.value = res
}

onMounted(() => {
  getCaptcha()
})

</script>

<template>
  <div class="bg-[#f2f2f2] min-h-screen flex items-center">
    <div class="flex gap-2 layui-container rounded-xl overflow-hidden items-center bg-white">
      <div class="w-[700px] h-[600px]">
        <img src="https://picsum.photos/700/600" alt="">
      </div>
      <div class="flex-1">
        <h1 class="text-center font-bold text-2xl">IMOOC管理系统</h1>
        <form class="layui-form flex-1">
          <div class="demo-login-container">
            <div class="layui-form-item">
              <div class="layui-input-wrap">
                <div class="layui-input-prefix">
                  <i class="layui-icon layui-icon-username"></i>
                </div>
                <input type="text" name="username" value="" lay-verify="required" placeholder="用户名" lay-reqtext="请填写用户名"
                  autocomplete="off" class="layui-input" lay-affix="clear">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-wrap">
                <div class="layui-input-prefix">
                  <i class="layui-icon layui-icon-password"></i>
                </div>
                <input type="password" name="password" value="" lay-verify="required" placeholder="密   码"
                  lay-reqtext="请填写密码" autocomplete="off" class="layui-input" lay-affix="eye">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-row">
                <div class="layui-col-xs7">
                  <div class="layui-input-wrap">
                    <div class="layui-input-prefix">
                      <i class="layui-icon layui-icon-vercode"></i>
                    </div>
                    <input type="text" name="captcha" value="" lay-verify="required" placeholder="验证码"
                      lay-reqtext="请填写验证码" autocomplete="off" class="layui-input" lay-affix="clear">
                  </div>
                </div>
                <div class="layui-col-xs5">
                  <div style="margin-left: 10px;">
                    <div v-html="captcha" @click="getCaptcha" class="cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="layui-form-item">
              <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
              <a href="#forget" style="float: right; margin-top: 7px;">忘记密码？</a>
            </div>
            <div class="layui-form-item">
              <button class="layui-btn layui-btn-fluid" lay-submit lay-filter="demo-login">登录</button>
            </div>
            <div class="layui-form-item demo-login-other">
              <label>社交账号登录</label>
              <span style="padding: 0 21px 0 6px;">
                <a href="javascript:;"><i class="layui-icon layui-icon-login-qq" style="color: #3492ed;"></i></a>
                <a href="javascript:;"><i class="layui-icon layui-icon-login-wechat" style="color: #4daf29;"></i></a>
                <a href="javascript:;"><i class="layui-icon layui-icon-login-weibo" style="color: #cf1900;"></i></a>
              </span>
              或 <a href="#reg">注册帐号</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-login-container {
  width: 320px;
  margin: 21px auto 0;
}

.demo-login-other .layui-icon {
  position: relative;
  display: inline-block;
  margin: 0 2px;
  top: 2px;
  font-size: 26px;
}
</style>
