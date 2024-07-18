<template>
  <transition name="fade">
    <div class="confirm" v-show="isShow">
      <div class="container">
        <div class="content">
          <div class="msg">{{ msg }}</div>
          <div class="btn-container">
            <div class="btn cancel" @click="handleCancel">取 消</div>
            <div class="btn confirm" @click="handleConfirm">确 定</div>
          </div>
        </div>
      </div>
      <div class="mask" @click="handleCloseMask"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  msg: {
    type: String,
    default: '这是一个Confirm'
  },
  cancel: {
    type: Function,
    default: () => {console.log('cancel')}
  },
  success: {
    type: Function,
    default: () => {console.log('success')}
  }
})
const isShow = ref(true)

const show = () => {
  isShow.value = true
}

const close = () => {
  isShow.value = false
}

const handleCancel = () => {
  close()
  props?.cancel()
}

const handleConfirm = () => {
  close()
  props?.success()
}

const handleCloseMask = () => {
  close()
}

defineExpose({
  show,
  close
})
</script>

<style lang="scss" scoped>
$primary: #16baaa;
$dark: darken($primary, 5%);

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 150px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  z-index: 3000;

  .content {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;

    .msg {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      text-align: center;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 19px;
    }
    .btn {
      margin-top: 20px;
      text-align: center;
      width: 100px;
      height: 32px;
      line-height: 32px;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      &.cancel {
        background: #ededed;
        color: #333;
      }
      &.confirm {
        background: $primary;
        &:hover {
          background: $dark;
        }
      }
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2999;
}
</style>
