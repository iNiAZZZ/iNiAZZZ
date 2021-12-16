import Vue from 'vue'
import VueRouter from 'vue-router'


const home = () => import('@/views/Home/home')
const cart = () => import('@/views/Cart/cart')
const category = () => import('@/views/Category/category')
const profile = () => import('@/views/Profile/profile')


Vue.use(VueRouter)
const routes=[
    {
        path:'',
        redirect:'/Home'
    },
    {
        path:'/Home',
        component: home
    },
    {
        path:'/Category',
        component: category
    },
    {
        path:'/Cart',
        component: cart
    },
    {
        path:'/Profile',
        component: profile
    },
]
const router=new VueRouter({
    routes,
    mode:'history'

})
export default router