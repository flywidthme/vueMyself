import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header/Header'
import Star from './components/Star/Star'

//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)

 new Vue({
  el:'#app',
   // components:{
   //  App
   // },
   // template:'<App />',
   render: h => h(App),

   router,//配置路由器
   store//配置vuex
})
