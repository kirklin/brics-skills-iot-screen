<script setup lang="ts">
import { nextTick, ref } from "vue";
import { getMap, registerMap } from "echarts/core";
import { optionHandle, regionCodes } from "./center.map";
import type { MapdataType } from "./center.map";
import { GETNOBASE, currentGET } from "~/api";

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
const CHINA_CODE = "china";

const option = ref({});
const code = ref(CHINA_CODE);

const getGeoJson = async (regionCode: string) => {
  let mapjson = getMap(regionCode);
  if (mapjson) {
    mapjson = mapjson.geoJSON;
  } else {
    mapjson = await GETNOBASE(`map-geojson/${regionCode}.json`).then(data => data);
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

  geojson.features.forEach((element: any) => {
    cityCenter[element.properties.name] = element.properties.centroid || element.properties.center;
  });

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
    if (res.success) {
      dataSetHandle(res.data.regionCode, res.data.dataList);
    }
  });
};

getData(code.value);

const mapClick = (params: any) => {
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
    <div class="mapWrap">
      <div v-if="code !== CHINA_CODE" class="quanguo" @click="getData(CHINA_CODE)">
        中国
      </div>
      <VChart
        v-if="JSON.stringify(option) !== '{}'"
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

  .mapWrap {
    height: 580px;
    width: 100%;
    box-sizing: border-box;
    position: relative;

    .quanguo {
      position: absolute;
      right: 20px;
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
