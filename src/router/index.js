import Vue from 'vue';
import VueRouter from 'vue-router';
import { importAll } from '@/utils/util';

Vue.use(VueRouter);

const routeModules = importAll(require.context('./modules', true, /^(?!.*(?:index.js$)).*\.js$/), 'array');

// 基于 sort 字段排序
routeModules.sort((a, b) => {
  // Infinity 属性用于存放表示正无穷大的数值。
  const aSort = a.meta.sort || Infinity;
  const bSort = b.meta.sort || Infinity;

  return aSort - bSort;
});

const routes = [
  ...routeModules,
];

const router = new VueRouter({
  routes,
});

export default router;
export { routes };
