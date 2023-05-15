<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useSettingStore } from "~/stores";

const isScaleRadio = ref(false);
const leftBottomRadio = ref(true);
const rightBottomRadio = ref(true);
const settingStore = useSettingStore();
const { indexConfig } = storeToRefs(settingStore);
const redTime = ref();
const init = () => {
  settingStore.initSetting();
  isScaleRadio.value = settingStore.isScale;

  leftBottomRadio.value = indexConfig.value.leftBottomSwiper;
  rightBottomRadio.value = indexConfig.value.rightBottomSwiper;
};
init();
const cancelClick = () => {
  settingStore.setSettingShow(false);
};

const confirmClick = () => {
  settingStore.setSettingShow(false);
};
const isScaleChange = (flag: boolean) => {
  settingStore.setIsScale(flag);
};

const indexRadioChange = () => {
  settingStore.setIndexConfig({
    leftBottomSwiper: leftBottomRadio.value, // 左轮播
    rightBottomSwiper: rightBottomRadio.value, // 右下轮播
  });
};
</script>

<template>
  <ElDrawer v-model="settingStore.settingShow" direction="rtl" size="360px">
    <template #header>
      <h2 class="setting-title">
        设置
      </h2>
    </template>
    <template #default>
      <div class="left_shu">
        全局设置
      </div>
      <div class="setting_item">
        <span class="setting_label">
          是否进行自动适配<span class="setting_label_tip">(默认分辨率1920*1080)</span>:
        </span>
        <div class="setting_content">
          <ElRadioGroup v-model="isScaleRadio" @change="isScaleChange">
            <ElRadio :label="true">
              是
            </ElRadio>
            <ElRadio :label="false">
              否
            </ElRadio>
          </ElRadioGroup>
        </div>
      </div>
      <div class="left_shu">
        实时监测
      </div>
      <div class="setting_item">
        <span class="setting_label">
          传感器提醒自动轮询: <span class="setting_label_tip" />
        </span>
        <div class="setting_content">
          <ElRadioGroup
            v-model="leftBottomRadio"
            @change="indexRadioChange"
          >
            <ElRadio :label="true">
              是
            </ElRadio>
            <ElRadio :label="false">
              否
            </ElRadio>
          </ElRadioGroup>
        </div>
      </div>
      <div class="setting_item">
        <span class="setting_label"> 实时预警轮播: </span>
        <div class="setting_content">
          <ElRadioGroup
            v-model="rightBottomRadio"
            @change="indexRadioChange"
          >
            <ElRadio :label="true">
              是
            </ElRadio>
            <ElRadio :label="false">
              否
            </ElRadio>
          </ElRadioGroup>
        </div>
      </div>
      <div class="left_shu">
        闯红灯设置
      </div>
      <div class="setting_item">
        <span class="setting_label">
          红绿灯时长<span class="setting_label_tip" />:
        </span>
        <div class="setting_content">
          <ElInput v-model="redTime" placeholder="请输入时长" />
        </div>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <ElButton @click="cancelClick">
          取消
        </ElButton>
        <ElButton type="primary" @click="confirmClick">
          确定
        </ElButton>
      </div>
    </template>
  </ElDrawer>
</template>

<style scoped lang="scss">
.setting-title {
  font-size: 20px;
  color: #000;
  font-weight: 900;
  text-align: center;
  line-height: 1;
}
.left_shu {
  color: #000;
  font-weight: 900;
  position: relative;
  text-indent: 10px;
  padding: 16px 0 10px 0;
  line-height: 1;
  &::before {
    display: block;
    content: " ";
    height: 16px;
    width: 4px;
    border-radius: 2px;
    background: #0072ff;
    position: absolute;
    left: 0;
  }
}
.setting_item {
  font-size: 14px;
  line-height: 1.5;

  // display: flex;
  .setting_label {
    color: #555454;
  }
  .setting_label_tip {
    font-size: 12px;
    color: #838282;
  }
}
</style>
