<template>
  <GlobalLayout :layout="app.layout"></GlobalLayout>
</template>

<script>
import GlobalLayout from '../GlobalLayout';
import { mapState } from 'vuex';

export default {
  components: {
    GlobalLayout,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      app: state => state.app,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
