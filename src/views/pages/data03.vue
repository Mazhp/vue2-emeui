<template>
  <div class="">
    <!-- Tab 部分 -->
    <ul class="tab-bor">
      <li class="poi active">数据详情03</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg:'hello vue',

      }
    }
  }
</script>


<style lang="scss" scoped>
  .information-main {
    width: 100%;
    height: auto;
    background:pink;
    padding: 20px 0;
    .first {
      width: 100%;
      height:240px;
      background: yellow;
    }
    .second {
      width: 100%;
      min-height: 50px;
      background: orange;
    }
  }



</style>
