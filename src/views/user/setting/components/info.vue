<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <label for="L_email" class="layui-form-label">邮箱</label>
      <div class="layui-input-inline">
        <input v-model="username" type="text" name="email" class="layui-input" v-bind="usernameAttrs" />
      </div>
      <!-- <div class="layui-form-mid layui-word-aux">
            如果您在邮箱已激活的情况下，变更了邮箱，需
            <a
              href="activate.html"
              style="font-size: 12px; color: #4f99cf;"
            >重新验证邮箱</a>。
          </div>-->
      <div class="layui-form-mid">
        <span v-if="errors.username" class="text-red-600">{{ errors.username.message }}</span>
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_username" class="layui-form-label">昵称</label>
      <div class="layui-input-inline">
        <input v-model="nickname" type="text" name="nickname" class="layui-input" v-bind="nicknameAttrs" />
      </div>
      <div class="layui-form-mid">
        <span v-if="errors.nickname" class="text-red-600">{{ errors.nickname.message }}</span>
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">城市</label>
      <div class="layui-input-inline">
        <input v-model="location" type="text" class="layui-input" v-bind="locationAttrs" />
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">性别</label>
      <div class="layui-input-inline gray !ml-2 !mt-[8px]">
        <label for="gender1" class="mr1">
          <input id="gender1" v-model="gender" type="radio" name="sex" value="1" title="男" />
          <i class="layui-icon layui-icon-circle" :class="{ 'layui-icon-radio': gender === '1' }"></i>
          男
        </label>
        <label for="gender2" class="ml-3">
          <input id="gender2" v-model="gender" type="radio" name="sex" value="0" title="女" />
          <i class="layui-icon layui-icon-circle" :class="{ 'layui-icon-radio': gender === '0' }"></i>
          女
        </label>
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label for="L_sign" class="layui-form-label">签名</label>
      <div class="layui-input-block">
        <textarea v-model="regmark" placeholder="随便写些什么刷下存在感" class="layui-textarea" style="height: 80px" v-bind="regmarkAttrs"></textarea>
      </div>
    </div>
    <div class="layui-form-item">
      <button class="layui-btn" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'
import { toast } from '@/utils/toast'

const userStore = useUserStore()
const gender = ref('1')

const { defineField, errors, validate } = useForm({
  validationSchema: {
    username: yup.string().required({ message: '请输入用户名' }).email({ message: '请输入正确的邮箱' }),
    nickname: yup.string().required({ message: '请输入昵称' }),
    location: yup.string().required({ message: '请输入城市' }).optional(),
    regmark: yup.string().required({ message: '请输入备注' }).optional()
  }
})

const [username, usernameAttrs] = defineField('username')
const [nickname, nicknameAttrs] = defineField('nickname')
const [location, locationAttrs] = defineField('location')
const [regmark, regmarkAttrs] = defineField('regmark')

const submit = async () => {
  const { valid } = await validate()
  if (!valid) return false
  const data = {
    username: username.value,
    nickname: nickname.value,
    location: location.value,
    gender: gender.value,
    regmark: regmark.value
  }

  console.log('data', data)

  await userStore.updateUser(data)
  toast('修改成功')
}
</script>
