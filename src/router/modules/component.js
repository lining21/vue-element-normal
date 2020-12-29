import BasicLayout from '@/layout/BasicLayout';
import BlankLayout from '@/layout/BlankLayout';

export default {
  name: 'component',
  path: '/component',
  component: BasicLayout,
  meta: {
    title: '组件',
    icon: 'el-icon-s-grid',
  },
  children: [
    {
      path: 'v-chart',
      component: () => import('@/views/components/echarts'),
      meta: {
        title: 'Echarts',
      },
    },
    {
      path: 'infiniteTable',
      component: BlankLayout,
      meta: {
        title: '大列表',
      },
      children: [
        {
          path: 'first1',
          component: () => import('@/views/components/infiniteTable'),
          meta: {
            title: '大列表',
          },
        },
      ],
    }
  ],
};
