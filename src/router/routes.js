/*
* 包含路由的数组
* */
import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{//是否显示底部导航
      isShow:true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/search',
    component:Search,
    meta:{
      isShow:true
    }
  },
  {
    path:'/',
    redirect:'/msite'
  }

]
