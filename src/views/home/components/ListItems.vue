<template>
  <div>
    <ul class="fly-list">
      <li v-for="(item, index) in items" :key="'listitem' + index">
        <router-link class="fly-avatar" :to="{ name: 'home', params: { uid: item.uid._id } }">
          <img :src="item.uid.pic ? item.uid.pic : '/img/header.jpg'" alt="贤心" />
        </router-link>
        <h2>
          <a class="layui-badge">{{ item.catalog }}</a>
          <router-link :to="{ name: 'detail', params: { tid: item._id } }">
            {{ item.title }}
          </router-link>
        </h2>
        <div class="fly-list-info">
          <router-link :to="{ name: 'home', params: { uid: item.uid._id } }">
            <cite>{{ item.uid.name }}</cite>
            <i class="layui-badge fly-badge-vip" v-if="item.uid.isVip !== '0'">{{ 'VIP' + item.uid.isVip }}</i>
          </router-link>
          <span>{{ formatDate(item.created) }}</span>

          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <i class="iconfont icon-kiss"></i>
            {{ item.fav }}
          </span>
          <span class="layui-badge fly-badge-accept layui-hide-xs" v-show="item.status !== '0'">已结</span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i>
            {{ item.answer }}
          </span>
        </div>
        <div class="fly-list-badge" v-show="item.tags.length > 0 && item.tags[0].name !== ''">
          <span class="layui-badge" v-for="(tag, tagIndex) in item.tags" :key="'tag' + tagIndex" :class="tag.class">{{
            tag.name }}</span>
        </div>
      </li>
    </ul>
    <div v-if="isShow" style="text-align: center">
      <div class="laypage-main" v-if="!isEnd">
        <a @click.prevent="handleLoadMore" class="laypage-next">更多求解</a>
      </div>
      <div class="nomore gray" v-else>没有更多了</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const props = defineProps({
  list: {
    default: () => [],
    type: Array,
  },
  isShow: {
    default: true,
    type: Boolean,
  },
  isEnd: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(['nextpage']);

const catalogMap = {
  ask: '提问',
  share: '分享',
  logs: '动态',
  notice: '公告',
  advise: '建议',
  discuss: '交流',
};

const items = computed(() => {
  const clonedList = [...props.list];
  clonedList.forEach((item) => {
    item.catalog = catalogMap[item.catalog] || item.catalog;
  });
  return clonedList
});

function handleLoadMore() {
  emit('nextpage');
}


const formatDate = (date) => {
  // 超过7天，显示日期
  if (dayjs(date).isBefore(dayjs().subtract(7, 'day'))) {
    return dayjs(date).format('YYYY-MM-DD');
  } else {
    // 1小时前，xx小时前，X天前
    return dayjs(date).fromNow();
  }
}
</script>

<style scoped>
.nomore {
  font-size: 16px;
  padding: 30px 0;
}
</style>