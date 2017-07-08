<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <z-header
    :nav-data="NavData"
    @change-menu = "changeMenu"
    ></z-header>
    <z-menu  :menu="getMenuData"></z-menu>
  </div>
</template>

<script>
  import ZHeader from './core/header'
  import ZMenu from './core/menu'
  //
  import NavData from '../data/menu';

  export default {
    name: 'app',
    components: {
      ZHeader,
      ZMenu
    },
    data () {
      return {
        NavData,
        menuData: [],
        // 默认加载的数据
        index: 0
      }
    },
    computed: {
      /**
       * @description 计算左侧menu数据
       * @returns {*}
       */
      getMenuData () {
        return this.NavData[this.index].data;
      }
    },
    methods: {
      changeMenu (index) {
         this.index = index;
      }
    }
  }
</script>

<style lang="scss">

</style>



