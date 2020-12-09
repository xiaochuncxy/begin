<template>
  <div class="login" ref="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    login
  } from '../../api/login.js'
  export default {
    data() {

      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          user: [{
            validator: validateUser,
            trigger: 'blur',
          }, {
            min: 3,
            max: 7,
            message: '长度在 3 到 7个字符',
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }, {
            min: 3,
            message: '长度不小于 3 个字符',
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登录成功!');
            // location.href = '/Cms#/cms'
            login(this.ruleForm).then(response => {
              console.log(response);
              localStorage.setItem('loginToken', response.data.data.token)
              this.$router.push('/cms')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      isLogin() {
        if (localStorage.getItem('loginToken')) {
          this.$router.push('/cms')
        }
      }
    },
    mounted() {
      this.$refs.login.style.left = document.documentElement.clientWidth / 2 - 300 + 'px'
      this.$refs.login.style.top = document.documentElement.clientHeight / 2 - 150 + 'px'
    },
    created() {
      this.isLogin()
    },
  }
</script>
<style lang="less" scoped>
  .login {
    width: 500px;
    height: 300px;
    position: absolute;
    text-align: center;
  }
</style>