<script setup lang="ts">
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
import ItemWrap from "@/components/item-wrap";
</script>

<template>
  <div class="index-box">
    <div class="content_left">
      <ItemWrap class="content_left-top content_lr-item" title="传感器总览">
        <LeftTop />
      </ItemWrap>
      <ItemWrap class="content_left-center content_lr-item" title="交通灯总览">
        <LeftCenter />
      </ItemWrap>
      <ItemWrap
        class="content_left-bottom content_lr-item"
        title="传感器提醒"
        style="padding: 0 10px 16px 10px"
      >
        <LeftBottom />
      </ItemWrap>
    </div>
    <div class="content_center">
      <CenterMap class="content_center_top" title="传感器分布图" />
      <ItemWrap class="content_center-bottom items-center" title="道路路口信号灯">
        <CenterBottom />
      </ItemWrap>
    </div>
    <div class="content_right">
      <ItemWrap class="content_left-bottom content_lr-item" title="报警次数">
        <RightTop />
      </ItemWrap>
      <ItemWrap
        class="content_left-bottom content_lr-item"
        title="道路环境信息"
        style="padding: 0 10px 16px 10px"
      >
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="content_left-bottom content_lr-item" title="红灯数据提示图 ">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}
.content_left,
.content_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.content_center {
  flex: 1;
  margin: 0 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .content_center-bottom {
    height: 315px;
  }
}

.content_lr-item {
  height: 310px;
}
</style>
