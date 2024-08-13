<template>
  <div class="fly-panel fly-panel-user !mb-0" pad20>
    <div id="LAY_msg" class="layui-tab layui-tab-brief" lay-filter="user" style="margin-top: 15px">
      <button id="LAY_delallmsg" class="layui-btn layui-btn-danger" @click="clearAll()">清空全部消息</button>
      <div id="LAY_minemsg" style="margin-top: 10px">
        <!--<div class="fly-none">您暂时没有最新消息</div>-->
        <ul class="mine-msg">
          <li v-for="(item, index) in lists" :key="'comments' + index">
            <blockquote class="layui-elem-quote">
              <a href="/jump?username=Absolutely" target="_blank">
                <cite>{{ item.cuid.name }}</cite> </a
              >回答了您的求解
              <a target="_blank" href="/jie/8153.html/page/0/#item-1489505778669">
                <cite>{{ item.title }}</cite>
              </a>
            </blockquote>
            <div v-richtext="item.content"></div>
            <p>
              <span>{{ item.created }}</span>
              <a href="javascript:;" class="layui-btn layui-btn-small layui-btn-danger fly-delete" @click="clear(item)">删除</a>
            </p>
          </li>
        </ul>
        <imooc-page v-show="total > 0" :total="total" :current="page" :align="'left'" :has-total="true" :has-select="true" @change-current="handleChange"></imooc-page>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
