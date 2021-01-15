export default {
  name: 'BasicLayout',
  path: '/',
  component: () => import('@/layout/BasicLayout'),
  meta: {
    title: 'BasicLayout'
  },
  children: [
    {
      name: 'home',
      path: '/home1',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'home'
      }
    }
  ]
};
