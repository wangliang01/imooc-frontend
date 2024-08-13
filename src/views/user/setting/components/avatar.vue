<template>
  <!-- 上传头像 -->
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label for="pic" class="layui-btn upload-img"> <i class="layui-icon">&#xe67c;</i>上传头像 </label>
        <input id="pic" type="file" name="file" accept="image/png, image/gif, image/jpg" @change="upload" />
        <img :src="pic" />
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>
