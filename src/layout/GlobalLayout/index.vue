<template>
  <el-container class="app-layout" :class="layoutClass">
    <template v-if="layout === 'sideMenu'">
      <el-aside width="auto">
        <SideBar :menus="menus" :layout="layout"></SideBar>
      </el-aside>
      <el-container class="app-container">
        <el-header height="auto" class="app-header">
          <HeaderBar :layout="layout" :menus="menus"></HeaderBar>
        </el-header>
        <el-main>
          <keep-alive :include="keepAlive">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </template>
    <template v-else-if="layout === 'topMenu'">
      <el-header height="auto" class="app-header">
        <HeaderBar :layout="layout" :menus="menus"></HeaderBar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </template>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';
import SideBar from './SideBar';
import HeaderBar from './HeaderBar';
import { routes } from '@/router';

export default {
  name: 'GlobalLayout',
  components: {
    SideBar,
    HeaderBar,
  },
  props: {
    layout: {
      type: String,
      default: 'sideMenu',
    },
  },
  data() {
    return {
      menus: routes,
    };
  },

  computed: {
    ...mapState({
      keepAlive: state => state.app.keepAlive,
    }),
    layoutClass() {
      const { layout } = this;

      return `app-layout-${layout}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  height: 100vh;
  overflow: hidden;
}

.app-header {
  padding: 0;
}
</style>
