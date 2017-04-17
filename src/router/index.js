import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/first'
import Hello from '@/components/Hello'


Vue.use(Router)


const second = { template:"<div> second 内容 </div>"};


export default new Router({
  model:'history',//模式
  base:__dirname,//可选 基础路径-当前目录
  routes:[
    { path:'/', component:Hello },
    { path:'/first', component:First },
    { path:'/second', component:second },
  ]
})

