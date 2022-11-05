<script setup lang="ts">
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import Headers from "./header.vue";
import Setting from "./setting.vue";
import ScaleScreen from "@/components/scale-screen";
import { useSettingStore } from "@/stores";
import MessageContent from "@/components/Plugins/MessageContent";

const settingStore = useSettingStore();
const { isScale } = storeToRefs(settingStore);
const wrapperStyle = {};
</script>

<template>
  <ScaleScreen
    width="1920"
    height="1080"
    :delay="500"
    :full-screen="false"
    :box-style="{
      background: '#03050C',
      overflow: isScale ? 'hidden' : 'auto',
    }"
    :wrapper-style="wrapperStyle"
    :auto-scale="isScale"
  >
    <div class="content_wrap">
      <Headers />
      <RouterView />
      <MessageContent />
    </div>
  </ScaleScreen>
  <Setting />
</template>

<style lang="scss" scoped>
.content_wrap {
  width: 100%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  box-sizing: border-box;
  background-image: url("@/assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>
