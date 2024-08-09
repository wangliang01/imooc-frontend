<template>
  <div v-if="list.length > 0" class="fly-panel">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a id="LAY_goSignin" href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" style="color: #ff5722">去签到</a>
    </div>
    <list-items :list="list" :is-show="false"></list-items>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ListItems from './ListItems.vue'
import { getList } from '@/api/content'

const list = ref([])
const status = ref('') // 0-未结贴， 1-已结贴
const sort = ref('created') // 按最新-created, 按热议-answer
const type = ref('1') // 0-普通列表，1-置顶列表
const page = ref(1) // 当前页码
const size = ref(10) // 每页条数
const category = ref('index')

const _getList = async () => {
  const params = {
    type: type.value,
    page: page.value,
    size: size.value,
    category: category.value,
    status: status.value,
    sort: sort.value
  }

  const res = await getList(params)

  list.value = res.data
  console.log('🚀 ~ const_getList= ~ list.value:', list.value)
}

onMounted(() => {
  _getList()
})
</script>

<style lang="scss" scoped></style>
