<template>
  <div class="site-brand">
    <div class="site-brand-logo">
      <img src="~@/assets/logo.png" alt="" />
    </div>
    <div class="site-brand-title">Vue-Admin-Pro</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &-logo {
    max-width: 40px;
  }

  &-title {
    margin-left: 10px;
  }
}
</style>
