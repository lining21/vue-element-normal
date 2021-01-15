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
    // 1. Remove border when inside `a` element in IE 8/9/10.
    img {
      border: 0; // 1
      max-width: 100%;
    }
  }

  &-title {
    margin-left: 10px;
  }
}
</style>
