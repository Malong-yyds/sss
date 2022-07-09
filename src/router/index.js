import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import { start, done, inc, configure } from 'nprogress';
import {message} from 'ant-design-vue';
configure({easing: 'ease', speed: 300})
const routes = [
  {
    path: '/',
    redirect: '/login'
    // redirect: '/home'
  },
   // will match everything and put it under `$route.params.pathMatch`
   {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/Auth/404'),
    meta: {
        login: true
    }
},
{
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
        login: true
    }
},
{
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/index'),
    meta: {
        login: true
    }
},
{
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/index'),
        // redirect: '/home',
        // children:[
        //     {
               
        //     }
        // ]
},
{
    path:'/course',
    name:'course',
    component: () => import('../views/course/index'),
    // component:{
    //     template:'<div> <router-view></router-view></div>'
    // },
    // redirect: '/course/mycourse',
    children:[
      
        {
            path:'resources',
            name:'resources',
            component: () => import('../views/course/resources/index.vue'),
            
        },
        {
            path:'homework',
            name:'homework',
            component: () => import('../views/course/homework/index.vue'),
            
        },
       
    ]
},
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

// router.beforeEach((from , to, next) => {
//     start();    // 进度条加载
//     inc();      // 随机增量
//     if(from.meta && from.meta.login) {
//         return next()
//     } else {
      
//         // if(PermissionStore.token !== '') {
//         //     return next();
//         // }
//         message.error('请先登录系统！');
//         return next('/login');
//     }
// })

router.afterEach(() => {
    setTimeout(() => {
        done();     // 进度条加载完成
    }, 300)
})

export default router;
