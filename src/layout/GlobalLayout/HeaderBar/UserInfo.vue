<template>
  <el-dropdown class="header-user" placement="bottom">
    <span class="header-user-info">
      <el-image class="header-user-avatar" :src="user.avatar" fit="cover">
        <img slot="error" style="width: 100%; height: 100%" src="~@/assets/user/avatar.png" alt="" />
      </el-image>
      <span class="header-user-name">{{ user.name }}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <div class="header-user-action" @click="handleUpdatePassword">修改密码</div>
      </el-dropdown-item>
      <el-dropdown-item><div class="header-user-action" @click="handleLogout">退出登录</div></el-dropdown-item>
    </el-dropdown-menu>
    <UpdatePassword ref="updatePassword"></UpdatePassword>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UpdatePassword from './UpdatePassword';
import { expireToLogin } from '@/utils/auth';

export default {
  components: {
    UpdatePassword,
  },
  name: 'UserInfo',
  data() {
    return {};
  },

  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },

  methods: {
    ...mapActions('user', ['logout']),
    handleUpdatePassword() {
      this.$refs.updatePassword.show();
    },
    async handleLogout() {
      await this.$confirm('确定退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      });
      await this.logout();
      expireToLogin();
    },
  },
};
</script>

<style lang="scss" scoped>
.header-user {
  cursor: pointer;
  color: inherit;
  &-info {
    display: flex;
    align-items: center;
  }

  &-avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  &-action {
    min-width: 100px;
    line-height: 2.5;
    text-align: center;
    font-size: 14px;
  }
}
</style>
