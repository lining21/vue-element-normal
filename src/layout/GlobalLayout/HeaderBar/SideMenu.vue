<template>
  <div class="header-sidemenu">
    <i :class="collapseIcon" class="header-sidemenu-collapse" @click="toggleSideBarCollapse"></i>
    <Breadcrumb></Breadcrumb>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Breadcrumb,
  },
  computed: {
    ...mapState({
      isCollapse: state => state.app.sidebar.isCollapse,
    }),
    collapseIcon() {
      const { isCollapse } = this;

      return isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold';
    },
  },

  methods: {
    ...mapActions('app', ['toggleSideBarCollapse']),
  },
};
</script>

<style lang="scss" scoped>
.header-sidemenu {
  display: flex;
  align-items: center;

  &-collapse {
    cursor: pointer;
    font-size: 20px;
  }
}
</style>
