<template>
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a :class="{ 'layui-this': status === '' && tag === '' }" class="cursor-pointer"
        @click.prevent="handleSearch()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '0' }" class="cursor-pointer" @click.prevent="handleSearch(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '1' }" class="cursor-pointer" @click.prevent="handleSearch(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '' && tag === '精华' }" class="cursor-pointer"
        @click.prevent="handleSearch(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{ 'layui-this': sort === 'created' }" class="cursor-pointer" @click.prevent="handleSearch(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{ 'layui-this': sort === 'answer' }" class="cursor-pointer" @click.prevent="handleSearch(4)">按热议</a>
      </span>
    </div>
    <list-items :list="list" :isEnd="isEnd" @nextpage="handleNextPage()"></list-items>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ListItems from './ListItems.vue';
import { getList } from '@/api/content'
const list = ref([])
const status = ref('') // 0-未结贴， 1-已结贴
const sort = ref('created') // 按最新-created, 按热议-answer
const tag = ref('') // 精华
const isEnd = ref(false)
const type = ref('0') // 0-普通列表，1-置顶列表
const page = ref(1) // 当前页码
const size = ref(10) // 每页条数
const category = ref('index') // 贴子分类， index-全部，ask-提问，advise-建议，discuss-交流，share-分享，news-动态

const isRequest = ref(false)


const handleSearch = (type) => {
  switch (type) {
    case 0:
      status.value = '0'
      tag.value = ''
      break;
    case 1:
      status.value = '1'
      tag.value = ''
      break;
    case 2:
      status.value = ''
      tag.value = '精华'
      break;
    case 3:
      sort.value = 'created'
      break;
    case 4:
      sort.value = 'answer'
      break;
    default:
      status.value = ''
      tag.value = ''
      break;
  }
}

const handleNextPage = () => {
  console.log('handleNextPage')
}

const _getList = async () => {
  if (isRequest.value) return
  if (isEnd.value) return 
  isRequest.value = true
  const params = {
    type: type.value,
    page: page.value,
    size: size.value,
    category: category.value,
    status: status.value,
    sort: sort.value,
  }

  const res = await getList(params).finally(() => {
    isRequest.value = false
  })

  list.value = res.data

  if (res.data.length < size.value) {
    isEnd.value = true
  }
  console.log("🚀 ~ const_getList= ~  list.value:",  list.value)


}

onMounted(() => {
  _getList()
})


</script>

<style lang="scss" scoped></style>
