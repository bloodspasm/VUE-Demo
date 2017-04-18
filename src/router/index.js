import Vue from 'vue'
import Router from 'vue-router'
// import First from '@/components/first'
// import Hello from '@/components/Hello'


Vue.use(Router)

const Home = {template: "<div> Home 内容 </div>"};
const First = {template: "<div> First 内容 </div>"};
const second = {template: "<div> second 内容 </div>"};
const FF = {template: "<div> {{ $route.oparams}} </div>"};
const SS = {template: "<div> ss 内容 </div>"};

const FirstC = {
  template:`
    <div class="FirstC">
      <h2>组件</h2>
      <router-view class="FirstClass"></router-view>
    </div>
  `
}

/***************************************************************/
/***************************************************************/
/* 默认 - VUE 模式
 export default new Router({
 model:'history',//模式
 base:__dirname,//可选 基础路径-当前目录
 routes:[
 { path:'/', name:'root', component:Hello },//path-路径,name-参数,component-模板
 { path:'/first',name:'first', component:First },
 { path:'/second', component:second },
 ]
 })
 */


/***************************************************************/
/***************************************************************/
/* 默认 - js 模式
 var router = new Router({
 model: 'history',//模式
 base: __dirname,//可选 基础路径-当前目录
 routes: [
 {path: '/', name: 'root', component: Home},//path-路径,name-参数,component-模板
 {path: '/first',  component: FirstC,
 children:[
 {path: '/', name: 'first',component: second},
 {path: 'FF', name:'Home-First-FF', component: FF},
 {path: 'SS', name:'Home-First-SS',component: SS},
 ]
 },
 {path: '/second',name: 'second', component: second},
 ]
 });

 new Vue({
 router,
 template: `
 <div id="123">
 <h1>导航</h1>
 <p>{{ $route.name }}</p>
 <ol>
 <li><router-link to="/">/</router-link></li>
 <li><router-link to="/first">/first</router-link></li>
 <ol>
 <li><router-link :to="{name:'Home-First-FF',params:{id:123}}">ff</router-link></li>
 <li><router-link :to="{name:'Home-First-SS',params:{id:123}}">ss</router-link></li>
 </ol>
 <li><router-link to="/second">/second</router-link></li>
 </ol>
 <router-view class="qwe"></router-view>
 </div>
 `
 }).$mount('#app')
 */


/***************************************************************/
/***************************************************************/
/*
 var router = new Router({
 model: 'history',//模式
 base: __dirname,//可选 基础路径-当前目录
 routes: [
 {path: '/', components: {
 default:Home,
 left:First,
 right:second
 }},//path-路径,name-参数,component-模板
 {path: '/first',name: 'first',  components: {
 default:Home,
 left:FF,
 right:SS
 }},
 ]
 });

 new Vue({
 router,
 template: `
 <div id="123">
 <h1>导航</h1>
 <p>{{ $route.name }}</p>
 <ol>
 <li><router-link to="/">/</router-link></li>
 <li><router-link to="/first">/first</router-link></li>
 </ol>
 <router-view class="qwe"></router-view>
 <router-view class="qwe" name="left" style="float: left;width: 50%;background-color: antiquewhite"></router-view>
 <router-view class="qwe" name="right" style="float: right;width: 50%;background-color: mediumaquamarine"></router-view>
 </div>
 `
 }).$mount('#app')
 */


/***************************************************************/
/***************************************************************/
/*
 var router = new Router({
 model: 'history',//模式
 base: __dirname,//可选 基础路径-当前目录
 routes: [
 {path: '/'},
 {path: '/params/:aaa/:bbb'}
 ]
 });

 new Vue({
 router,
 template: `
 <div id="123">
 <h1>导航</h1>
 <p>{{ $route.name }}</p>
 <ul>
 <li><router-link to="/">/</router-link></li>
 <li><router-link to="/parmas/111/222">/parmas/111/222</router-link></li>
 </ul>
 <p>show</p>
 <pre><code>
 {{ JSON.stringify($route,null,2) }}
 </code></pre>
 </div>
 `
 }).$mount('#app')
 */

/***************************************************************/
/***************************************************************/

var router = new Router({
  model: 'history',//模式
  base: __dirname,//可选 基础路径-当前目录
  routes: [
    {path: '/', name: 'root', component: Home},//path-路径,name-参数,component-模板
    {
      path: '/first', component: FirstC,
      children: [
        {path: '/', name: 'first', component: second},
        {path: 'FF', name: 'Home-First-FF', component: FF},
        {path: 'SS', name: 'Home-First-SS', component: SS},
        {path: 'BB', name: 'Home-First-BB',redirect:'/'},//路由跳转
      ]
    },
    {path: '/second', name: 'second', component: second},
    {path: '/aaa/:id', name: 'aaa', component: second},
  ]
});

new Vue({
  router,
  template: `
   <div id="123">
     <h1>导航</h1>
     <p>{{ $route.name }}</p>
     <ol>
       <li><router-link to="/">/</router-link></li>
       <li><router-link to="/first">/first</router-link></li>
       <ol>
         <li><router-link :to="{name:'Home-First-FF',params:{id:123}}">ff</router-link></li>
         <li><router-link :to="{name:'Home-First-SS',params:{id:123}}">ss</router-link></li>
         <li><router-link :to="{name:'Home-First-BB',params:{id:123}}">BB</router-link></li>
       </ol>
       <li><router-link to="/second">/second</router-link></li>
       <li><router-link to="/aaa/123">aaa</router-link></li>
     </ol>
     <router-view class="qwe"></router-view>
   </div>
 `
}).$mount('#app')

