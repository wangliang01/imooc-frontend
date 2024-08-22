<template>
  <div>
    <ul class="fly-list">
      <li v-for="(item, index) in items" :key="'listitem' + index">
        <router-link class="fly-avatar borderd">
          <img v-lazy="item.user.avatar ? item.user.avatar : 'https://picsum.photos/100/100'" alt="avatar" />
        </router-link>
        <h2 class="flex items-center">
          <a class="layui-badge">{{ item.category }}</a>
          <router-link>
            {{ item.title }}
          </router-link>
        </h2>
        <div class="fly-list-info flex items-center mt-[10px]">
          <router-link :to="{ name: 'userCenter' }">
            <cite>{{ item.user.nickname }}</cite>
            <i v-if="item.user.vip !== '0'" class="layui-badge fly-badge-vip">{{ 'VIP' + item.user.vip }}</i>
          </router-link>
          <span>{{ formatDate(item.created) }}</span>

          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <i class="iconfont icon-kiss"></i>
            {{ item.favs }}
          </span>
          <span v-show="item.status !== '0'" class="layui-badge fly-badge-accept layui-hide-xs">已结</span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i>
            {{ item.answerNum }}
          </span>
        </div>
        <div v-show="item.tags.length > 0 && item.tags[0].name !== ''" class="fly-list-badge">
          <span v-for="(tag, tagIndex) in item.tags" :key="'tag' + tagIndex" class="layui-badge" :class="tag.class">{{ tag.name }}</span>
        </div>
      </li>
    </ul>
    <div v-if="isShow" style="text-align: center">
      <div v-if="!isEnd" class="laypage-main">
        <a class="laypage-next cursor-pointer" @click.prevent="handleLoadMore">更多求解</a>
      </div>
      <div v-else class="nomore gray">没有更多了</div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const props = defineProps({
  list: {
    default: () => [],
    type: Array
  },
  isShow: {
    default: true,
    type: Boolean
  },
  isEnd: {
    default: false,
    type: Boolean
  }
})

watch(
  () => props.list,
  (value) => {
    console.log('🚀 ~ watch ~ value:', value)
  },
  {
    immediate: true,
    deep: true
  }
)

const emit = defineEmits(['nextpage'])

const catalogMap = {
  index: '',
  ask: '提问',
  share: '分享',
  logs: '动态',
  notice: '公告',
  advise: '建议',
  discuss: '交流'
}

const items = computed(() => {
  const clonedList = [...props.list]
  console.log('🚀 ~ items ~ clonedList:', clonedList)

  clonedList.forEach((item) => {
    item.category = catalogMap[item.category] || item.category
  })
  return clonedList
})

function handleLoadMore() {
  emit('nextpage')
}

const formatDate = (date) => {
  // 超过7天，显示日期
  if (dayjs(date).isBefore(dayjs().subtract(7, 'day'))) {
    return dayjs(date).format('YYYY-MM-DD')
  } else {
    // 1小时前，xx小时前，X天前
    return dayjs(date).fromNow()
  }
}
</script>

<style scoped>
.nomore {
  font-size: 16px;
  padding: 30px 0;
}
</style>
