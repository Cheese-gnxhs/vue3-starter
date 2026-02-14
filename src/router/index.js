import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 根路径 / 重定向到 /home/one
    {
      path: '/',
      redirect: '/home/one',
    },
    // 根路径 /home 重定向到 /home/one
    {
      path: '/home',
      redirect: '/home/one',
    },

    // 一级路由：/home
    {
      path: '/home',
      name: 'HomeLayout',
      component: () => import('@/views/home/HomeLayout.vue'),
      children: [
        {
          path: 'one',
          name: 'HomeOne',
          component: () => import('@/views/home/SecondOne.vue'),
        },
        {
          path: 'two',
          name: 'HomeTwo',
          component: () => import('@/views/home/SecondTwo.vue'),
        },
        {
          path: 'three',
          name: 'HomeThree',
          component: () => import('@/views/home/SecondThree.vue'),
        },
      ],
    },
    // 一级路由：/login
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/LoginIndex.vue'),
    },
    // 一级路由：/user
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/UserIndex.vue'),
    },
    // NotFound 路由：匹配所有未定义的路径
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
  ],
})

export default router
