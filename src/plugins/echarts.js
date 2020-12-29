/**
 * 采用 vue-echarts 组件，文档见：
 * https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md
 *
 */

import Vue from 'vue';
import ECharts from 'vue-echarts';

/**
 * 手动引入 ECharts 各模块来减小打包体积
 * 所有可引入模块见：https://github.com/apache/incubator-echarts/blob/master/index.js
 */
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markLine';

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
// import 'echarts-gl';

// 注册组件后即可使用
Vue.component('v-chart', ECharts);
