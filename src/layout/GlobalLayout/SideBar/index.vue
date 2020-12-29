<template>
  <div class="sidebar" :class="{ 'sidebar-collapse': isCollapse }">
    <div class="sidebar-header">
      <SiteBrand></SiteBrand>
    </div>
    <div class="sidebar-menu">
      <SiteMenu :menus="menus" :layout="layout"></SiteMenu>
    </div>
  </div>
</template>

<script>
import SiteBrand from '../SiteBrand';
import SiteMenu from '../SiteMenu';
import { mapState } from 'vuex';

export default {
  components: {
    SiteMenu,
    SiteBrand,
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
    return {};
  },

  computed: {
    ...mapState({
      isCollapse: state => state.app.sidebar.isCollapse,
    }),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background-color: $menuBg;
  color: #fff;
  width: $sideBarWidth;

  transition: all 0.3s;

  ::v-deep {
    .el-menu {
      border-right: 0;
    }
  }

  &-header {
    padding: 20px;
  }

  &-menu {
    flex: 1;
    overflow: auto;
  }
}

.sidebar.sidebar-collapse {
  width: 64px;

  ::v-deep {
    .site-brand-title {
      display: none;
    }
  }
}
</style>
