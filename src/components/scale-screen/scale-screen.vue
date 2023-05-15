<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import type { CSSProperties, PropType } from "vue";

interface IAutoScale {
  x?: boolean;
  y?: boolean;
}

interface IState {
  originalWidth: string | number;
  originalHeight: string | number;
  width?: string | number;
  height?: string | number;
  observer: null | MutationObserver;
}

const props = defineProps({
  width: {
    type: [String, Number] as PropType<string | number>,
    default: 1920,
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: 1080,
  },
  fullScreen: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  autoScale: {
    type: [Object, Boolean] as PropType<IAutoScale>,
    default: true,
  },
  delay: {
    type: Number,
    default: 500,
  },
  boxStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  wrapperStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
});

const styles: Record<string, CSSProperties> = {
  box: {
    overflow: "hidden",
    backgroundSize: "100% 100%",
    background: "#000",
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms",
    position: "relative",
    overflow: "hidden",
    zIndex: 100,
    transformOrigin: "left top",
  },
};

const state = reactive<IState>({
  width: 0,
  height: 0,
  originalWidth: 0,
  originalHeight: 0,
  observer: null,
});

const screenWrapper = ref<HTMLElement>();
const box = ref<HTMLElement>();

function debounce(fn: Function, delay: number): () => void {
  let timer: any;
  return function (...args: any[]): void {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      typeof fn === "function" && fn(...args);
      clearTimeout(timer);
    }, delay > 0 ? delay : 100);
  };
}

const initSize = async () => {
  box.value!.scrollLeft = 0;
  box.value!.scrollTop = 0;
  await nextTick();
  if (props.width && props.height) {
    state.width = props.width;
    state.height = props.height;
  } else {
    state.width = screenWrapper.value?.clientWidth;
    state.height = screenWrapper.value?.clientHeight;
  }
  if (!state.originalHeight || !state.originalWidth) {
    state.originalWidth = window.screen.width;
    state.originalHeight = window.screen.height;
  }
};

const updateSize = () => {
  if (state.width && state.height) {
    screenWrapper.value!.style.width = `${state.width}px`;
    screenWrapper.value!.style.height = `${state.height}px`;
  } else {
    screenWrapper.value!.style.width = `${state.originalWidth}px`;
    screenWrapper.value!.style.height = `${state.originalHeight}px`;
  }
};

const clearScreenWrapperStyle = () => {
  screenWrapper.value!.style.transform = "";
  screenWrapper.value!.style.margin = "";
};

const autoScale = (scale: number) => {
  if (!props.autoScale) {
    return;
  }
  const domWidth = screenWrapper.value!.clientWidth;
  const domHeight = screenWrapper.value!.clientHeight;
  const currentWidth = document.body.clientWidth;
  const currentHeight = document.body.clientHeight;
  screenWrapper.value!.style.transform = `scale(${scale},${scale})`;
  let mx = Math.max((currentWidth - domWidth * scale) / 2, 0);
  let my = Math.max((currentHeight - domHeight * scale) / 2, 0);
  if (typeof props.autoScale === "object") {
    !props.autoScale.x && (mx = 0);
    !props.autoScale.y && (my = 0);
  }
  screenWrapper.value!.style.margin = `${my}px ${mx}px`;
};

const updateScale = () => {
  const currentWidth = document.body.clientWidth;
  const currentHeight = document.body.clientHeight;
  const realWidth = state.width || state.originalWidth;
  const realHeight = state.height || state.originalHeight;
  const widthScale = currentWidth / +realWidth;
  const heightScale = currentHeight / +realHeight;
  if (props.fullScreen) {
    screenWrapper.value!.style.transform = `scale(${widthScale},${heightScale})`;
    return false;
  }
  const scale = Math.min(widthScale, heightScale);
  autoScale(scale);
};

const onResize = debounce(async () => {
  await initSize();
  updateSize();
  updateScale();
}, props.delay as number);

function addResizeListener() {
  window.addEventListener("resize", onResize);
}
function removeResizeListener() {
  window.removeEventListener("resize", onResize);
}
onMounted(async () => {
  await initSize();
  updateSize();
  updateScale();
  addResizeListener();
});

onUnmounted(() => {
  removeResizeListener();
});

watch(() => props.autoScale, async (newVal: any) => {
  if (newVal) {
    onResize();
    addResizeListener();
  } else {
    removeResizeListener();
    clearScreenWrapperStyle();
  }
});
</script>

<template>
  <section ref="box" :style="{ ...styles.box, ...boxStyle }" class="v-screen-box">
    <div ref="screenWrapper" :style="{ ...styles.wrapper, ...wrapperStyle }" class="screen-wrapper">
      <slot />
    </div>
  </section>
</template>
