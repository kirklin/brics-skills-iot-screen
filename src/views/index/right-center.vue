<script setup lang="ts">
import { ref } from "vue";
import CapsuleChart from "~/components/datav/capsule-chart";
import { currentGET } from "~/api";

const config = ref({
  showValue: true,
  unit: "",
});
const data = ref([]);
const getData = () => {
  currentGET("rightCenter").then((res) => {
    // console.log("道路环境信息", res);
    if (res.success) {
      data.value = res.data;
    } else {
      window.$message({
        text: res.msg,
        type: "warning",
      });
    }
  });
};
getData();
</script>

<template>
  <div class="right_bottom">
    <CapsuleChart :config="config" style="width: 100%; height: 260px" :data="data" />
  </div>
</template>

<style scoped lang="scss">
.right_bottom {
  box-sizing: border-box;
  padding: 0 16px;
}
</style>
