<template>
  <component :is="type" v-bind="linkProps" class="menu-item-link">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/util';

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternal() {
      return isExternal(this.path);
    },
    type() {
      if (this.isExternal) {
        return 'a';
      }
      return 'router-link';
    },
    linkProps() {
      const { isExternal, path } = this;
      if (this.isExternal) {
        return {
          href: path,
          target: '_blank',
          rel: 'noopener',
        };
      }
      return {
        to: path,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-item-link {
}
</style>
