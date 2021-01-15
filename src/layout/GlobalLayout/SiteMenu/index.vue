<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="activeMenu"
    :collapse="isCollapse"
    :unique-opened="true"
    :collapse-transition="false"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :mode="mode"
  >
    <template v-for="menu in menus">
      <MenuItem :key="menu.path" :menu="menu" v-if="!(menu.meta && menu.meta.hidden)"></MenuItem>
    </template>
  </el-menu>
</template>

<script>
import MenuItem from './MenuItem';
import variables from '@/style/base/variables.scss';
import { mapState } from 'vuex';

export default {
  components: {
    MenuItem,
  },
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
    layout: {
      type: String,
    },
  },

  data() {
    return {
      variables,
    };
  },

  computed: {
    ...mapState({
      isCollapse: state => state.app.sidebar.isCollapse,
    }),
    activeMenu() {
      const { $route } = this;
      return this.$route.path;
    },
    mode() {
      const { layout } = this;

      return layout === 'sideMenu' ? 'vertical' : 'horizontal';
    },
  },
};
</script>

<style lang="scss" scoped></style>
