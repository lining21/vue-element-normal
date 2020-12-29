<script>
export default {
  functional: true,
  props: {
    meta: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  render(h, context) {
    const {
      meta: { icon, title },
    } = context.props;
    const vnodes = [];

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon]} />);
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>

<style lang="scss" scoped></style>
