<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-this">
            找回密码
            <!--重置密码-->
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
                  <button
                    type="button"
                    class="layui-btn"
                    alert="1"
                    @click="handleSubmit"
                  >
                    提交
                  </button>
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

const captcha = ref('')

const { defineField, errors, validate } = useForm({
  validationSchema: {
    username: yup
      .string()
      .required({ message: '请输入用户名' })
      .email({ message: '请输入正确的邮箱' }),
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

const [code, codeAttrs] = defineField('code', {
  validateOnModelUpdate: true
})

const getCaptcha = async () => {
  const res = await getCode()
  captcha.value = res
}

const handleSubmit = async () => {
  const valid = await validate()
  if (!valid) return false
  console.log('submit')
}

onMounted(() => {
  getCaptcha()
})
</script>

<style lang="scss" scoped></style>
