<template>
  <nav class="z-header">
    <div class="header-logo" >
      <img class="logo" src="../../assets/logo/logo.png" alt="LOGO">
    </div>
    <div class="header-nav" >
      <el-tabs type="card" @tab-click="handelClick">
        <el-tab-pane v-for="(ndata,i) in NavData"  :label="ndata.title" :name="''+i"></el-tab-pane>
       </el-tabs>
    </div>
    <div class="header-right">
      <div class="header-serch">
        <el-button type="text" icon="search">搜索</el-button>
      </div>
      <div class="header-user">
        <span>用户名</span>
      </div>
        <!--<span>搜索</span>-->
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      NavData: {type: Array, required: true}
    },
    created () {
      console.log(this.index)
    },
    methods: {
      handelClick (tab) {
        // 向父窗体通知切换事件
        this.$emit('change-menu',tab.name);
      }
    }
  }
</script>
<style>
  .el-tabs--border-card{
    background: #000;
  }
</style>





