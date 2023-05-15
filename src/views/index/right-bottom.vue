<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { currentGET } from "~/api";
import SeamlessScroll from "~/components/seamless-scroll";
import { useSettingStore } from "~/stores";
import EmptyCom from "~/components/empty-com";

const settingStore = useSettingStore();
const { defaultOption, indexConfig } = storeToRefs(settingStore);
const state = reactive<any>({
  list: [],
  defaultOption: {
    ...defaultOption.value,
    singleHeight: 252,
    limitScrollNum: 3,
    // step:3
  },
  scroll: true,

});

const getData = () => {
  currentGET("rightBottom", { limitNum: 20 }).then((res) => {
    // console.log("红灯数据提示图", res);
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

const comName = computed(() => {
  if (indexConfig.value.rightBottomSwiper) {
    return SeamlessScroll;
  } else {
    return EmptyCom;
  }
});
function montionFilter(val: any) {
  // console.log(val);
  return val ? Number(val).toFixed(2) : "--";
}
const handleAddress = (item: any) => {
  return `${item.provinceName}/${item.cityName}/${item.countyName}`;
};
onMounted(() => {
  getData();
});
</script>

<template>
  <div
    class="right_bottom_wrap beautify-scroll-def"
    :class="{ 'overflow-y-auto': !indexConfig.rightBottomSwiper }"
  >
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
      <ul class="right_bottom">
        <li v-for="(item, i) in state.list" :key="i" class="right_center_item">
          <span class="orderNum">{{ i + 1 }}</span>
          <div class="inner_right">
            <div class="dibu" />
            <div class="flex">
              <div class="info">
                <span class="labels">传感器ID：</span>
                <span class="text-content primary"> {{ item.gatewayno }}</span>
              </div>
              <div class="info">
                <span class="labels">车牌：</span>
                <span class="text-content"> {{ item.terminalno }}</span>
              </div>
              <div class="info">
                <span class="labels">告警值：</span>
                <span class="text-content warning">
                  {{ montionFilter(item.alertvalue) }}</span>
              </div>
            </div>

            <div class="flex">
              <div class="info">
                <span class="labels shrink-0"> 地址：</span>
                <span class=" secondary truncate" style="font-size: 12px;width: 220px;" :title="handleAddress(item)">
                  {{ handleAddress(item) }}</span>
              </div>
              <div class="info time shrink-0">
                <span class="labels">时间：</span>
                <span class="text-content" style="font-size: 12px">
                  {{ item.createtime }}</span>
              </div>
            </div>
            <div class="flex">
              <div class="info">
                <span class="labels">报警内容：</span>
                <span
                  class="text-content secondary"
                  :class="{ warning: item.alertdetail }"
                >
                  {{ item.alertdetail || "无" }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Component>
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  width: 100%;
  height: 100%;

  .right_center_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10px;
    font-size: 14px;
    color: #fff;

    .orderNum {
      margin: 0 20px 0 -20px;
    }

    .inner_right {
      position: relative;
      height: 100%;
      width: 400px;
      flex-shrink: 0;
      line-height: 1.5;

      .dibu {
        position: absolute;
        height: 2px;
        width: 104%;
        background-image: url("~/assets/img/left_dotted_line.png");
        bottom: -12px;
        left: -2%;
        background-size: cover;
      }
    }

    .info {
      margin-right: 10px;
      display: flex;
      align-items: center;

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
  }
}

.right_bottom_wrap {
  overflow: hidden;
  width: 100%;
  height: 252px;
}

.overflow-y-auto {
  overflow-y: auto;
}
</style>
