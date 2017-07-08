<template>
  <div class="contanter">
    <el-row style="height: 100%;">
      <el-col :span="4"  style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-submenu   v-for="(mobj,index) in Menu" :index="''+index" >
            <template slot="title"><i class="el-icon-document"></i>{{mobj.name}}</template>
            <el-menu-item v-for="smobj in mobj.subMenu" v-text="smobj.name" :index="smobj.link"></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>


  export default {
    data () {
      return{

      }
    },
    props: {
      Menu: {type: Array, required: true},
    },
    computed: {
      defaultActive: function(){
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style scoped="">

</style>
