<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { currentGET } from "@/api";
import SeamlessScroll from "@/components/seamless-scroll";
import { useSettingStore } from "@/stores";
import EmptyCom from "@/components/empty-com";
const settingStore = useSettingStore();
const { defaultOption, indexConfig } = storeToRefs(settingStore);
const state = reactive<any>({
  list: [],
  defaultOption: {
    ...defaultOption.value,
    singleHeight: 256,
    limitScrollNum: 4,
  },
  scroll: true,
});

const getData = () => {
  currentGET("leftBottom", { limitNum: 20 }).then((res) => {
    // console.log("传感器提醒", res);
    if (res.success) {
      state.list = res.data.list;
    } else {
      window.$message({
        text: res.msg,
        type: "warning",
      });
    }
  });
};
const addressHandle = (item: any) => {
  let name = item.provinceName;
  if (item.cityName) {
    name += `/${item.cityName}`;
    if (item.countyName) {
      name += `/${item.countyName}`;
    }
  }
  return name;
};
const comName = computed(() => {
  if (indexConfig.value.leftBottomSwiper) {
    return SeamlessScroll;
  } else {
    return EmptyCom;
  }
});
onMounted(() => {
  getData();
});
</script>

<template>
  <div class="left_bottom_wrap beautify-scroll-def" :class="{ 'overflow-y-auto': !indexConfig.leftBottomSwiper }">
    <Component
      :is="comName"
      v-model="state.scroll"
      :list="state.list"
      :single-height="state.defaultOption.singleHeight"
      :step="state.defaultOption.step"
      :limit-scroll-num="state.defaultOption.limitScrollNum"
      :hover="state.defaultOption.hover"
      :single-wait-time="state.defaultOption.singleWaitTime"
      :wheel="state.defaultOption.wheel"
    >
      <ul class="left_bottom">
        <li v-for="(item, i) in state.list" :key="i" class="left_bottom_item">
          <span class="orderNum doudong">{{ i + 1 }}</span>
          <div class="inner_right">
            <div class="dibu" />
            <div class="flex">
              <div class="info">
                <span class="labels">传感器ID：</span>
                <span class="text-content primary doudong wangguan">
                  {{ item.gatewayno }}</span>
              </div>
              <div class="info">
                <span class="labels">时间：</span>
                <span class="text-content" style="font-size: 12px">
                  {{ item.createTime }}</span>
              </div>
            </div>

            <span
              class="types doudong"
              :class="{
                typeRed: item.onlineState === 0,
                typeGreen: item.onlineState === 1,
              }"
            >{{ item.onlineState === 1 ? "在线" : "离线" }}</span>

            <div class="info addresswrap">
              <span class="labels">地址：</span>
              <span class="text-content secondary" style="font-size: 12px">
                {{ addressHandle(item) }}</span>
            </div>
          </div>
        </li>
      </ul>
    </Component>
  </div>
</template>

<style scoped lang="scss">
.left_bottom_wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.doudong {
  overflow: hidden;
  backface-visibility: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.left_bottom {
  width: 100%;
  height: 100%;

  .left_bottom_item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 14px;
    margin: 10px 0;
    .orderNum {
      margin: 0 16px 0 -20px;
    }

    .info {
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: #fff;

      .labels {
        flex-shrink: 0;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }

      .primary {
        color: $primary-color;
        font-size: 15px;
      }

      .secondary {
        color: rgba(255, 255, 255, 0.8);
      }

      .warning {
        color: #e6a23c;
        font-size: 15px;
      }
    }

    .inner_right {
      position: relative;
      height: 100%;
      width: 380px;
      flex-shrink: 0;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .dibu {
        position: absolute;
        height: 2px;
        width: 104%;
        background-image: url("@/assets/img/left_dotted_line.png");
        bottom: -10px;
        left: -2%;
        background-size: cover;
      }
      .addresswrap {
        width: 100%;
        display: flex;
        margin-top: 8px;
      }
    }

    .wangguan {
      color: #1890ff;
      font-weight: 900;
      font-size: 15px;
      width: 80px;
      flex-shrink: 0;
    }

    .time {
      font-size: 12px;
      // color: rgba(211, 210, 210,.8);
      color: #fff;
    }

    .address {
      font-size: 12px;
      cursor: pointer;
      // @include text-overflow(1);
    }

    .types {
      width: 30px;
      flex-shrink: 0;
    }

    .typeRed {
      color: #fc1a1a;
    }

    .typeGreen {
      color: #29fc29;
    }
  }
}
</style>
