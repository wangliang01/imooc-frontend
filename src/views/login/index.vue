<template>
  <div class="mt-5 layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'register' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      name="username"
                      v-model="username"
                      v-bind="usernameAttrs"
                      placeholder="请输入用户名"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span v-if="errors.username" class="text-red-600">{{
                      errors.username.message
                    }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      name="password"
                      v-model="password"
                      v-bind="passwordAttrs"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span v-if="errors.password" class="text-red-600">{{
                      errors.password.message
                    }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label"
                      >验证码</label
                    >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        v-bind="codeAttrs"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class>
                      <span
                        class="svg"
                        @click="getCaptcha"
                        v-html="captcha"
                      ></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span v-if="errors.code" class="text-red-600">{{
                      errors.code.message
                    }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button" @click="handleLogin">
                    立即登录
                  </button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }"
                      >忘记密码？</router-link
                    >
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { getCode } from '@/api/login'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
const captcha = ref('')

const { defineField, errors, validate } = useForm({
  validationSchema: {
    username: yup
      .string()
      .required({ message: '请输入用户名' })
      .email({ message: '请输入正确的邮箱' }),
    password: yup
      .string()
      .required({ message: '请输入密码' })
      .min(6, { message: '密码不能少于6位' })
      .max(16, { message: '密码不能超过16位' }),
    code: yup
      .string()
      .required({ message: '请输入验证码' })
      .min(4, { message: '验证码只支持4位' })
      .max(4, { message: '验证码只支持4位' })
  }
})

const [username, usernameAttrs] = defineField('username', {
  validateOnModelUpdate: true
})
const [password, passwordAttrs] = defineField('password')
const [code, codeAttrs] = defineField('code')

// 登录
const handleLogin = async (e) => {
  e.preventDefault()
  const { valid } = await validate()
  if (!valid) return false
  const params = {
    username: username.value,
    password: password.value,
    code: code.value
  }

  console.log(params)
}

const getCaptcha = async () => {
  const res = await getCode()
  captcha.value = res
}

onMounted(() => {
  getCaptcha()
})
</script>

<style lang="scss" scoped></style>
