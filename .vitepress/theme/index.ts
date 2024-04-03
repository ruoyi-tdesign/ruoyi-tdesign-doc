import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import {onMounted, onUpdated, watch, nextTick} from 'vue';
import {useRoute} from 'vitepress';
import mediumZoom from 'medium-zoom';

import './index.css';

export default {
  ...DefaultTheme,

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      mediumZoom('.main img', {background: 'var(--vp-c-bg)'});
    };
    onMounted(() => {
      initZoom();
    });
    onUpdated(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
