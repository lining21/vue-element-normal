export default {
  name: 'Home',
  path: '/',
  component: () => import('@/views/Home.vue'),
  children: [
    {
      name: 'About',
      path: '/about',
      component: () => import('@/views/About.vue'),
    }
  ]
};
