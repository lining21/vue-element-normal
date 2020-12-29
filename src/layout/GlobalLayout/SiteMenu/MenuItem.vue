<template>
  <MenuItemLink :path="fullPath" v-if="!hasChildren">
    <el-menu-item :index="fullPath">
      <MenuItemTitle :meta="menu.meta"></MenuItemTitle>
    </el-menu-item>
  </MenuItemLink>
  <el-submenu :index="fullPath" :popper-append-to-body="true" v-else>
    <template slot="title">
      <MenuItemTitle :meta="menu.meta"></MenuItemTitle>
    </template>
    <template v-for="subMenu in menu.children">
      <MenuItem
        :key="menu.path + subMenu.path"
        :menu="subMenu"
        :basePath="fullPath"
        v-if="!(subMenu.meta && subMenu.meta.hidden)"
      ></MenuItem>
    </template>
  </el-submenu>
</template>

<script>
import MenuItemLink from './MenuItemLink';
import MenuItemTitle from './MenuItemTitle';
import { isExternal } from '@/utils/util';

export default {
  name: 'MenuItem',
  components: {
    MenuItemLink,
    MenuItemTitle,
  },
  props: {
    menu: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },

  computed: {
    fullPath() {
      const {
        basePath,
        menu: { path, redirect },
      } = this;

      if (redirect) {
        return redirect;
      }

      if (path.indexOf('/') === 0) {
        return path;
      }

      return `${basePath}/${path}`.replace('//', '/');
    },

    hasChildren() {
      const { menu } = this;

      if (!menu.children) {
        return false;
      }

      if (!menu.children.some(item => !(item.meta && item.meta.hidden))) {
        return false;
      }

      return true;
    },
  },

  methods: {
    redefineElSubmenuHandleMouseenter() {
      const subMenu = this.$children[0];
      if (subMenu.$options.name === 'ElSubmenu') {
        const oldHandleMouseenter = subMenu.handleMouseenter;

        subMenu.handleMouseenter = function(event) {
          // 如果$parent是同样的 el，并且是脚本触发
          if (event.target === subMenu.$parent.$el && !event.isTrusted) {
            return;
          }
          oldHandleMouseenter.call(subMenu, event);
        };
      }
    },
  },

  mounted() {
    // 解决 ElSubmenu 循环触发事件问题
    this.redefineElSubmenuHandleMouseenter();
  },
};
</script>

<style lang="scss" scoped></style>
