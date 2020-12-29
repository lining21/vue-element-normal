<template>
  <div class="v-chart">
    <el-card shadow="never">
      <p>
        引入
        <a target="_blank" href="https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md">Vue-Echarts</a
        >，封装 Echarts 为 Vue 组件
      </p>
      <p>每一种 Echarts 组件 采用按需引入的方式，具体引入文件参见：/plugins/echarts.js</p>
    </el-card>

    <v-chart class="bar-chart" :options="barOptions" ref="bar" autoresize @click="handleClick" />
  </div>
</template>

<script>
import { getBarOptions } from './data';

export default {
  name: 'echarts',
  data() {
    return {
      barOptions: getBarOptions(),
    };
  },

  methods: {
    handleClick(...params) {
      console.log(params);
    },
  },
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
}
</style>
