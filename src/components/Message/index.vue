<template>
  <transition name="fade">
    <div v-if="isShow" class="message">{{ msg }}</div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const isShow = ref(true)

// 如果有多个message,动态计算top
const top = ref(0)

onMounted(() => {
  // 计算前一个message的top值
  const messageDomList = document.querySelectorAll('.message')
  console.log('🚀 ~ onMounted ~ messageDomList:', messageDomList)
  if (messageDomList.length > 1) {
    messageDomList.forEach((el, i) => {
      // 云计算el的高度
      const height = el.offsetHeight
      const marginBottom = 20
      top.value = top.value + height + marginBottom
      el.style.top = `${top.value}px`
    })
  }
  top.value = `${document.documentElement.scrollTop + 90}px`

  setTimeout(() => {
    isShow.value = false
  }, 2000)
})
</script>

<style lang="scss" scoped>
.message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 4px;
  z-index: 9999;
  font-size: 14px;
}

// 添加一个动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
