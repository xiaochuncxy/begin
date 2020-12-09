<template>
  <div class="header">
    <ul class="left">
      <li>cms后台管理系统</li>
    </ul>
    <div class="right">
      <el-button type="primary" @click="quit">退出</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      quit() {
        localStorage.removeItem('loginToken')
        this.$router.push('/login')
      }
    },
  }
</script>
<style lang="less" scoped>
  .header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 12%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
    }

    .right {
      width: 10%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
</style>