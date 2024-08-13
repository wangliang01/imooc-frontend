<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <label for="L_email" class="layui-form-label">邮箱</label>
      <div class="layui-input-inline">
        <input v-model="username" type="text" name="email" class="layui-input" />
      </div>
      <!-- <div class="layui-form-mid layui-word-aux">
            如果您在邮箱已激活的情况下，变更了邮箱，需
            <a
              href="activate.html"
              style="font-size: 12px; color: #4f99cf;"
            >重新验证邮箱</a>。
          </div>-->
      <div class="layui-form-mid">
        <span style="color: #c00">error</span>
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_username" class="layui-form-label">昵称</label>
      <div class="layui-input-inline">
        <input v-model="name" type="text" name="name" class="layui-input" />
      </div>
      <div class="layui-form-mid">
        <span style="color: #c00">error</span>
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">城市</label>
      <div class="layui-input-inline">
        <input v-model="location" type="text" class="layui-input" />
      </div>
    </div>
    <div class="layui-form-item">
      <label for="L_city" class="layui-form-label">性别</label>
      <div class="layui-input-inline gray !ml-2 !mt-[8px]">
        <label for="gender1" class="mr1">
          <input id="gender1" v-model="gender" type="radio" name="sex" value="0" title="男" />
          <i class="layui-icon layui-icon-circle" :class="{ 'layui-icon-radio': gender === '0' }"></i>
          男
        </label>
        <label for="gender2">
          <input id="gender2" v-model="gender" type="radio" name="sex" value="1" title="女" />
          <i class="layui-icon layui-icon-circle" :class="{ 'layui-icon-radio': gender === '1' }"></i>
          女
        </label>
      </div>
    </div>
    <div class="layui-form-item layui-form-text">
      <label for="L_sign" class="layui-form-label">签名</label>
      <div class="layui-input-block">
        <textarea v-model="regmark" placeholder="随便写些什么刷下存在感" class="layui-textarea" style="height: 80px"></textarea>
      </div>
    </div>
    <div class="layui-form-item">
      <button class="layui-btn" @click="submit()">确认修改</button>
    </div>
  </div>
</template>

<script setup></script>
