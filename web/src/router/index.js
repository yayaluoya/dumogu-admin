/**
 * 路由列表部分
 * 所有路由必须先手动写好，然后由后端菜单接口来进行匹配并且指定是否显示
 */
import {createWebHistory,createRouter,createWebHashHistory} from 'vue-router';

export const constantRoutes = [
    /** 重定向路由 */
    {
        path: '/redirect',
        component:() => import('@/layout/main/index.vue'),
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index.vue')
            }
        ],
    },
    /** 登录注册相关页面 */
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        hidden: true
    },
    {
        path: '/register',
        component: () => import('@/views/login/register.vue'),
        hidden: true
    },
    /** 定义首页重定向地址 */
    {
        path: '',
        redirect: '/main/index',
    },
    /** 其他业务相关页面 */
    {
        path: '/main',
        component:() => import('@/layout/main/index.vue'),
        redirect: 'index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/main/index.vue'),
                name: 'main-index',
                meta: { title: '首页', icon: 'dashboard', affix: false }
            },
            {
                path: 'show-list',
                component: () => import('@/views/exampleViews/showList/index.vue'),
                name: 'show-list',
                meta: { title: '例子页面', icon: 'dashboard', affix: false }
            },
            {
                path: 'show-list/info/:sign',
                component: () => import('@/views/exampleViews/showList/info.vue'),
                name: 'show-list-info',
                meta: { title: '例子页面详情', icon: 'dashboard', affix: false }
            },
        ],
    },
    /** 404页面 */
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/views/error/404.vue'),
        hidden: true,
    },
    /** 401页面 */
    {
        path: '/401',
        component: () => import('@/views/error/401.vue'),
        hidden: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
});
console.log(
    "所有路由",
    router.getRoutes().filter(item=>{
        return !!item.meta && !!item.name;
    }),
);

export default router;
