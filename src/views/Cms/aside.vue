<template>
  <div class="aside">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <div class="daohang">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cms/1-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <div class="daohang">
            <i class="el-icon-location"></i>
            <span slot="title">权限管理</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cms/2-1"><i class="el-icon-menu"></i>角色列表</el-menu-item>
          <el-menu-item index="/cms/2-2"><i class="el-icon-menu"></i>权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <div class="daohang">
            <i class="el-icon-location"></i>
            <span slot="title">商品管理</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cms/3-1"><i class="el-icon-menu"></i>商品列表</el-menu-item>
          <el-menu-item index="/cms/3-2"><i class="el-icon-menu"></i>分类参数</el-menu-item>
          <el-menu-item index="/cms/3-3"><i class="el-icon-menu"></i>商品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <div class="daohang">
            <i class="el-icon-location"></i>
            <span slot="title">订单管理</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cms/4-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <div class="daohang">
            <i class="el-icon-location"></i>
            <span slot="title">数据统计</span>
          </div>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/cms/5-1"><i class="el-icon-menu"></i>数据报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isrouter: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
  .daohang {
    display: flex;
    align-items: center;
  }
</style>
<style lang="less">
  .el-menu-item-group__title {
    padding: 0
  }
</style>