<template>
  <div v-show="isShow" class="modal">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer layui-layer-page" :class="{ bounceIn: isShow, bounceOut: isClose }">
      <div class="layui-layer-title">
        签到说明
        <i class="layui-icon layui-icon-close cursor-pointer" @click="close()"></i>
      </div>
      <div class="layui-layer-content p-4">
        <div class="layui-text">
          <blockquote class="layui-elem-quote">“签到”可获得的社区积分，规则如下</blockquote>
          <table class="layui-table">
            <thead>
              <tr>
                <th>连续签到天数</th>
                <th>每天可获积分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>&ge;5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>&ge;15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>&ge;30</td>
                <td>20</td>
              </tr>
              <tr>
                <td>&ge;100</td>
                <td>30</td>
              </tr>
              <tr>
                <td>&ge;365</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
          <div class="text-sm">
            <p>中间若有间隔，则连续天数重新计算</p>
            <p class="text-orange-500">不可复用程序自动签到，否则积分清零</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  isShow: {
    default: false,
    type: Boolean
  }
})

const emits = defineEmits(['closeModal'])

const isClose = ref(false)
const close = () => {
  isClose.value = true
  setTimeout(() => {
    emits('closeModal')
    isClose.value = false
  }, 600)
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.layui-layer {
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 500px;
  z-index: 1001;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes bounceOut {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.1);
  }
}

.layui-layer.bounceIn {
  animation: bounceIn 0.6s;
}

.layui-layer.bounceOut {
  animation: bounceOut 0.6s;
}
</style>
