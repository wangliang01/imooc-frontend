<template>
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a :class="{'layui-this': status ==='' && tag === ''}" @click.prevent="handleSearch()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '0'}" @click.prevent="handleSearch(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '1'}" @click.prevent="handleSearch(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '' && tag === '精华'}" @click.prevent="handleSearch(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{'layui-this': sort === 'created'}" @click.prevent="handleSearch(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': sort === 'answer'}" @click.prevent="handleSearch(4)">按热议</a>
      </span>
    </div>
    <!-- <list-item :lists="lists" :isEnd="isEnd" @nextpage="nextPage()"></list-item> -->
  </div>
</template>

<script setup>

const handleSearch = () => {
  console.log('handleSearch')
}
</script>

<style lang="scss" scoped>

</style>
