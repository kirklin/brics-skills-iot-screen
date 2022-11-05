<script setup lang="ts">
import { nextTick, reactive, ref } from "vue";
import { getMap, registerMap } from "echarts/core";
import { optionHandle, regionCodes } from "./center.map";
import type { MapdataType } from "./center.map";
import { GETNOBASE, currentGET } from "@/api";
// china 代表中国 其他地市是行政编码
withDefaults(
  defineProps<{
    // 结束数值
    title: number | string;
  }>(),
  {
    title: "地图",
  },
);
const option = ref({});
const code = ref("china");
const getGeoJson = async (regionCode: string) => {
  let mapjson = getMap(regionCode);
  if (mapjson) {
    mapjson = mapjson.geoJSON;
  } else {
    mapjson = await GETNOBASE(`map-geojson/${regionCode}.json`).then(
      data => data,
    );
    code.value = regionCode;
    registerMap(regionCode, {
      geoJSON: mapjson as any,
      specialAreas: {},
    });
  }
  return mapjson;
};
const dataSetHandle = async (regionCode: string, list: object[]) => {
  const geojson: any = await getGeoJson(regionCode);
  const cityCenter: any = {};
  const mapData: MapdataType[] = [];
  // 获取当前地图每块行政区中心点
  geojson.features.forEach((element: any) => {
    cityCenter[element.properties.name]
      = element.properties.centroid || element.properties.center;
  });
  // 当前中心点如果有此条数据中心点则赋值x，y当然这个x,y也可以后端返回进行大点，前端省去多行代码
  list.forEach((item: any) => {
    if (cityCenter[item.name]) {
      mapData.push({
        name: item.name,
        value: cityCenter[item.name].concat(item.value),
      });
    }
  });
  await nextTick();
  option.value = optionHandle(regionCode, list, mapData);
};

const getData = async (regionCode: string) => {
  currentGET("centerMap", { regionCode }).then((res) => {
    // console.log("centerMap", res);
    if (res.success) {
      dataSetHandle(res.data.regionCode, res.data.dataList);
    }
  });
};

getData(code.value);

const mapClick = (params: any) => {
  // console.log(params);
  const xzqData = regionCodes[params.name];
  if (xzqData) {
    getData(xzqData.adcode);
  } else {
    window.$message.warning("暂无下级地市");
  }
};
</script>

<template>
  <div class="centerMap">
    <!-- <div class="mapTitle">
      <div class="zuo"></div>
      <span class="titleText">{{ title }}</span>
      <div class="you"></div>
    </div> -->
    <div class="mapWrap">
      <div v-if="code !== 'china'" class="quanguo" @click="getData('china')">
        中国
      </div>
      <v-chart
        v-if="JSON.stringify(option) !== '{}'"
        ref="centerMapRef"
        class="chart"
        :option="option"
        @click="mapClick"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.centerMap {
  margin-bottom: 30px;

  .mapTitle {
    height: 60px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    box-sizing: border-box;

    .titleText {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 6px;
      background: linear-gradient(
        92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 10px;
    }

    .zuo,
    .you {
      background-size: 100% 100%;
      width: 29px;
      height: 20px;
      margin-top: 8px;
    }

    .zuo {
      background: url("@/assets/img/xiezuo.png") no-repeat;
    }

    .you {
      background: url("@/assets/img/xieyou.png") no-repeat;
    }
  }

  .mapWrap {
    height: 580px;
    width: 100%;
    // padding: 0 0 10px 0;
    box-sizing: border-box;
    position: relative;

    .quanguo {
      position: absolute;
      right: 20px;
    //   top: -46px;
    top: 0;
      width: 80px;
      height: 28px;
      border: 1px solid #00eded;
      border-radius: 10px;
      color: #00f7f6;
      text-align: center;
      line-height: 26px;
      letter-spacing: 6px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 237, 237, 0.5),
        0 0 6px rgba(0, 237, 237, 0.4);
        z-index: 10;
    }
  }
}
</style>
