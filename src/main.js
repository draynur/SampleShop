import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from './firebase'

import {
  BootstrapVue,
  IconsPlugin as BootstrapIconsPlugin,
} from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapIconsPlugin);

Vue.config.productionTip = false

// Checks to see if this page requires auth
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
