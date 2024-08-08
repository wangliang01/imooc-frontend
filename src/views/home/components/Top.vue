<template>
  <div class="fly-panel">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #FF5722;"
      >去签到</a>
    </div>
    <list-items :list="list" :isShow="false"></list-items>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ListItems from './ListItems.vue';

const list = ref([])


</script>

<style lang="scss" scoped>

</style>
