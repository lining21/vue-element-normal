export default {
  name: 'GlobalLayout',
  path: '/',
  component: () => import('@/layout/GlobalLayout'),
  meta: {
    title: 'GlobalLayout'
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
