<script setup lang="ts">
import mockLight from "~/assets/model/mockLight.mp4";
</script>

<template>
  <video type="video/mp4" muted autoplay loop class="mx-auto">
    <source :src="mockLight" type="video/mp4">
  </video>
</template>

<style scoped lang="scss"></style>
