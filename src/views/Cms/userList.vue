<template>
  <div class="userList">
    <div class="inputW">
      <el-input v-model="kw" placeholder="请输入内容" class="searchInp"></el-input>
      <el-button plain icon="el-icon-search" class="search" @click="searchUser"></el-button>
      <el-button type="success" plain class="add" @click="dialogFormVisible = true">添加用户</el-button>

      <el-dialog title="添加用户" :visible.sync="dialogFormVisible" class="dialog">
        <el-form :model="form" :rules="rules" ref="tiJ">
          <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="true"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="mobile" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="quxiao">取 消</el-button>
          <el-button type="primary" @click="submitForm('tiJ')">确 定</el-button>
        </div>
      </el-dialog>

    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180">
      </el-table-column>
      <el-table-column prop="mobile" label="电话">
      </el-table-column>
      <el-table-column label="用户状态">
      </el-table-column>
      <el-table-column label="操作">
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
      :page-sizes="pageArr" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import {
    getUserData,
    userAdd
  } from '../../api/userList.js'
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          username: '',
          password: '',
          email: '',
          mobile: ''
        },
        formLabelWidth: '80px',
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 7,
              message: '长度在 3 到 7 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 7,
              message: '长度在 3 到 7 个字符',
              trigger: 'blur'
            }
          ],
          email: [{
            pattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            message: '请输入正确邮箱',
            trigger: 'blur'
          }],
          mobile: [{
            pattern: /^\d{1,11}$/,
            min: 1,
            max: 11,
            message: '长度为 1 到 11 个数字',
            trigger: 'blur'
          }]
        },
        tableData: [],
        page: 1,
        size: 3,
        kw: '',
        total: 0,
        pageArr: [2, 3, 4, 5],
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
      getUserList() {
        getUserData(this.page, this.size, this.kw).then(response => {
          console.log(response.data);
          this.total = response.data.data.total
          this.tableData = response.data.data.users
        })
      },
      searchUser() {
        if (!this.kw) {
          this.$message.error('请输入查询关键字')
          return;
        }
        this.page = 1
        this.getUserList()
      },
      handleSizeChange(val) {
        this.size = val
        this.page = 1
        this.getUserList()
      },
      handleCurrentChange(val) {
        this.page = val
        this.getUserList()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            userAdd(this.form).then(response => {
              this.dialogFormVisible = false
              this.getUserList()
              this.form = {
                username: '',
                password: '',
                email: '',
                mobile: ''
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      quxiao() {
        this.form = {
          username: '',
          password: '',
          email: '',
          mobile: ''
        }
        this.dialogFormVisible = false
      }
    },
  }
</script>
<style lang="less">
  .inputW {
    height: 42px;
    position: relative;
    margin-bottom: 5px;
    .searchInp {
      width: 220px;
      // display: inline-block;
      float: left;
    }

    .search {
      // display: inline-block;
      position: absolute;
      left: 223px;
    }

    .add {
      position: absolute;
      left: 272px;
    }


  }
</style>