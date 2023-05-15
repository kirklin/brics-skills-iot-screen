<script setup lang="ts">
import { reactive } from "vue";
import dayjs from "dayjs";
import type { DateDataType } from "./index.d";
import { useSettingStore } from "~/stores";
import settingIcon from "~/assets/img/headers/setting.png";

const dateData = reactive<DateDataType>({
  dateDay: "",
  dateYear: "",
  dateWeek: "",
  timing: null,
});

const { setSettingShow } = useSettingStore();
const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const updateTime = () => {
  dateData.timing = setInterval(() => {
    dateData.dateDay = dayjs().format("YYYY-MM-DD hh:mm:ss");
    dateData.dateWeek = weekdays[dayjs().day()];
  }, 1000);
};
updateTime();
</script>

<template>
  <div class="title-wrap">
    <div class="left-bottom" />
    <div class="right-bottom" />
    <div class="light" />
    <div class="title">
      <span class="title-text">智慧交通(2022金砖国家技能发展与技术创新大赛)</span>
    </div>
    <div class="timers">
      {{ dateData.dateYear }} {{ dateData.dateWeek }} {{ dateData.dateDay }}

      <div class="setting-icon" @click="setSettingShow(true)">
        <img :src="settingIcon" alt="Settings">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-wrap {
  height: 60px;
  background-image: url("../assets/img/top.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-bottom: 4px;

  .light {
    position: absolute;
    bottom: -26px;
    background-image: url("../assets/img/light.png");
    background-position: 80px center;
    width: 100%;
    height: 56px;
  }

  .left-bottom,
  .right-bottom {
    position: absolute;
    top: -2px;
    width: 140px;
    height: 6px;
    background-image: url("../assets/img/headers/juxing1.png");
  }

  .left-bottom {
    left: 11%;
  }

  .right-bottom {
    right: 11%;
    transform: rotate(180deg);
  }

  .timers {
    position: absolute;
    right: 0;
    top: 30px;
    font-size: 18px;
    display: flex;
    align-items: center;

    .setting-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-left: 12px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}

.title {
  position: relative;
  text-align: center;
  background-size: cover;
  color: transparent;
  height: 60px;
  line-height: 46px;

  .title-text {
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 6px;
    width: 100%;
    background: linear-gradient(
                    92deg,
                    #0072ff 0%,
                    #00eaff 48.8525390625%,
                    #01aaff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
