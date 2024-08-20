<template>
  <div v-show="internalShow" class="modal">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer layui-layer-page" :class="{ bounceIn: internalShow, bounceOut: isClose }">
      <div class="layui-layer-title">
        签到活跃榜 - TOP
        <i class="layui-icon layui-icon-close pull-right" @click="close()"></i>
      </div>
      <div class="layui-layer-content pd0">
        <div class="layui-tab layui-tab-brief">
          <ul class="layui-tab-title">
            <li :class="{ 'layui-this': current === 2 }" @click="choose(2)">最新签到</li>
            <li :class="{ 'layui-this': current === 1 }" @click="choose(1)">今日最快</li>
            <li :class="{ 'layui-this': current === 0 }" @click="choose(0)">总签到榜</li>
          </ul>
          <div class="layui-tab-content fly-signin-list">
            <ul class="layui-tab-item layui-show">
              <li v-for="(item, index) in lists" :key="'sign' + index" class="sign-item">
                <img v-if="current === 0" :src="item.pic ? item.pic : '/img/bear-200-200.jpg'" alt class="mr1" />
                <img v-else :src="item.uid ? item.uid.pic : '/img/bear-200-200.jpg'" class="mr1" />
                <cite class="fly-link">{{ item.name ? item.name : item.uid.name }}</cite>
                <span v-if="current !== 0" class="fly-grey">签到于 {{ item.created }}</span>
                <span v-else class="fly-grey">
                  已经连续签到
                  <i class="orange">{{ item.count }}</i
                  >天
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    default: false,
    type: Boolean
  }
})

const emits = defineEmits(['update:modelValue'])

const isClose = ref(false)

const internalShow = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val)
  }
})
const close = () => {
  isClose.value = true
  setTimeout(() => {
    internalShow.value = false
    isClose.value = false
  }, 600)
}

const current = ref(0)
const lists = ref([
  {
    name: 'abc',
    count: 1,
    created: '2024-01-01'
  }
])

const choose = (index) => {
  current.value = index
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
.sign-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.fly-link {
  flex: 1;
  display: inline-block;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
