import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: Vue
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, form, next) => {
  // Baidu Analytics
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    var siteId = "07843b21cd674657c4c7e9f608f06790"
    hm.src = "https://hm.baidu.com/hm.js?" + siteId;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  // Google Analytics
  (function () {
    var hm2 = document.createElement("script");
    hm2.src = "https://www.googletagmanager.com/gtag/js?id=G-0NP2NVC1Y9";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm2, s);

    var dataLayer = dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-0NP2NVC1Y9');
  })();

})

export default router
