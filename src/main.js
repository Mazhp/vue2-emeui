/**
 * @description 应用程序入口文件.
 */

import App from './App'
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


// vue配置
Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

// 附加插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueValidator);
Vue.use(ElementUI)

// 挂载
new Vue({
  el: '#app',
  router: router,
  template: '<app/>',
  components: { App }
});








