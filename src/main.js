import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/styles/reset.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(item => item.meta && item.meta.login);
  if (needLogin) {
    const isLogin = document.cookie.includes('login=true');
    if (isLogin) {
      next();
    }else {
      const ToLoginFlag = window.confirm('您尚未登陆，是否前往登陆？');
      if (ToLoginFlag) {
        next('/login');
      }
    }
  } else {
    next();
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
