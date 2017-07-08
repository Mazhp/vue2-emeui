import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//定义路由组件
const index = require('./views/index.vue');
const data03 = require('./views/pages/data03.vue');
const data01 = require('./views/pages/data01.vue');
const data02 = require('./views/pages/data02.vue');
const data04 = require('./views/pages/data04.vue');
const data05 = require('./views/pages/data05.vue');
const data06 = require('./views/pages/data06.vue');
const data07 = require('./views/pages/data07.vue');
const data08 = require('./views/pages/data08.vue');
const data09 = require('./views/pages/data09.vue');

export default new Router({
  routes: [
    { path: '/', component: index,
      children: [
        {
          path: '/index',
          component: index
        },
        {
          name: 'data1',
          path: '/data1',
          component: data01
        },
        {
          name: 'data2',
          path: '/data2',
          component: data02
        },
        {
          name: 'data3',
          path: '/data3',
          component: data03
        },
        {
          name: 'data4',
          path: '/data4',
          component: data04
        }, {
          name: 'data5',
          path: '/data5',
          component: data05
        }, {
          name: 'data6',
          path: '/data6',
          component: data06
        }, {
          name: 'data7',
          path: '/data7',
          component: data07
        }, {
          name: 'data8',
          path: '/data8',
          component: data08
        }, {
          name: 'data9',
          path: '/data9',
          component: data09
        }
      ]
    }
  ]
})

