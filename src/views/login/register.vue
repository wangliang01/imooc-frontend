<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div id="LAY_ucm" class="layui-form layui-tab-content" style="padding: 20px 0">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form ref="formRef" method="post">
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_email" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <input v-model="username" type="text" name="username" v-bind="usernameAttrs" placeholder="请输入用户名" autocomplete="off" class="layui-input" />
                    </div>
                    <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  </div>
                  <div class="layui-row">
                    <span v-if="errors.username" class="text-red-600">{{ errors.username.message }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="nickname" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input v-model="nickname" type="text" name="nickname" v-bind="nicknameAttrs" placeholder="请输入昵称" autocomplete="off" class="layui-input" />
                  </div>
                  <div class="layui-form-mid">
                    <span v-if="errors.nickname" class="text-red-600">{{ errors.nickname.message }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <input v-model="password" type="password" name="password" v-bind="passwordAttrs" placeholder="请输入密码" autocomplete="off" class="layui-input" />
                    </div>
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                  </div>
                  <div class="layui-row">
                    <span v-if="errors.password" class="text-red-600">{{ errors.password.message }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="confirmPassword" class="layui-form-label">确认密码</label>
                    <div class="layui-input-inline">
                      <input
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        v-bind="confirmPasswordAttrs"
                        placeholder="请输入密码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                  </div>
                  <div class="layui-row">
                    <span v-if="errors.confirmPassword" class="text-red-600">{{ errors.confirmPassword.message }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="code" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input id="code" v-model="code" type="text" name="code" v-bind="codeAttrs" placeholder="请输入验证码" autocomplete="off" class="layui-input" />
                    </div>
                    <div class="inline-block">
                      <span class="svg cursor-pointer relative top-[-4px]" @click.stop="getCaptcha" v-html="captcha"></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span v-if="errors.code" class="text-red-600">{{ errors.code.message }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button" @click="handleRegister">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a href onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                  <a href onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
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
import { ref, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { getCode } from '@/api/login'
import { useGlobalStore } from '../../store/global'
import { v4 as uuid } from 'uuid'
import { register } from '@/api/login'
import { alert } from '../../components/Alert'
import { useRouter } from 'vue-router'
const captcha = ref('')
const store = useGlobalStore()
const router = useRouter()
const formRef = ref(null)

const { defineField, errors, validate, resetForm } = useForm({
  validationSchema: {
    username: yup.string().required({ message: '请输入用户名' }).email({ message: '请输入正确的邮箱' }),
    nickname: yup.string().optional().min(2, { message: '昵称不能少于2位' }).max(10, { message: '昵称不能超过10位' }),
    password: yup.string().required({ message: '请输入密码' }).min(6, { message: '密码不能少于6位' }).max(16, { message: '密码不能超过16位' }),
    confirmPassword: yup.string().oneOf([yup.ref('$password')], { message: '两次输入的密码不一致' }),
    code: yup.string().required({ message: '请输入验证码' }).min(4, { message: '验证码只支持4位' }).max(4, { message: '验证码只支持4位' })
  }
})

const [username, usernameAttrs] = defineField('username', {
  validateOnModelUpdate: true
})
const [nickname, nicknameAttrs] = defineField('nickname')
const [password, passwordAttrs] = defineField('password')
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')
const [code, codeAttrs] = defineField('code')

const getCaptcha = async () => {
  const sid = store.sid
  const res = await getCode(sid)
  captcha.value = res
}

const resetFields = () => {
  username.value = ''
  nickname.value = ''
  password.value = ''
  confirmPassword.value = ''
  code.value = ''
  console.log('resetFields', formRef.value)
  resetForm()
}

const handleRegister = async (e) => {
  console.log('register')
  e.preventDefault()
  const { valid } = await validate()
  console.log('valid', valid)
  if (!valid) return false
  const params = {
    username: username.value,
    nickname: nickname.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    code: code.value,
    sid: store.sid
  }

  console.log('params', params)
  await register(params)
  alert('注册成功')
  resetFields()
  setTimeout(() => {
    router.push({ path: '/login' })
  }, 1000)
}

onMounted(() => {
  if (!store.sid) {
    store.setSid(uuid())
  }
  getCaptcha()
})
</script>
