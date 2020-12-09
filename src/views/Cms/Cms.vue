<template>

  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside style="width : 200px">
        <Aside />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
  import Header from './header'
  import Aside from './aside'
  export default {
    components: {
      Header,
      Aside
    },
    created() {
      this.isLogin()
    },
    methods: {
      isLogin() {
        if (!localStorage.getItem('loginToken')) {
          this.$router.push('/login')
        }
      }
    },
  }
</script>
<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>