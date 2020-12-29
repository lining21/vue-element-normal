<template>
  <div class="headerbar" :class="`headerbar-${layout}`">
    <div class="headerbar-left">
      <template v-if="layout === 'sideMenu'">
        <SideMenu></SideMenu>
      </template>
      <template v-else>
        <SiteBrand></SiteBrand>
        <SiteMenu :menus="menus" :layout="layout"></SiteMenu>
      </template>
    </div>
    <div class="headerbar-right">
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu';
import SiteMenu from '../SiteMenu';
import UserInfo from './UserInfo';
import SiteBrand from '../SiteBrand';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HeaderBar',
  components: {
    UserInfo,
    SideMenu,
    SiteBrand,
    SiteMenu,
  },
  props: {
    layout: {
      type: String,
    },
    menus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.headerbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $headerBarHeight;
  padding: 0 20px;

  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  &-left {
    display: flex;
    align-items: center;
  }
}

.headerbar.headerbar-topMenu {
  background-color: $menuBg;
  color: #fff;
}
</style>
