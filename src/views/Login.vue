<template>
  <div id="login-page" style="text-align:center" v-if="show" class="">
    <el-card class="login-form" >
      <div slot="header">
        海归之家
      </div>
    <el-form :model="loginBox" status-icon :rules="validate" ref="loginBox" class="demo-ruleForm" >
      <el-form-item  prop="username" >
          <el-input type="text" v-model="loginBox.username" style="width:300px" placeholder="登录名"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
      <el-input type="password" v-model="loginBox.password" style="width:300px" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item  prop="captcha">
      <el-input type="" v-model="loginBox.captcha"  style="width:170px;position:relative;"  placeholder="请输入验证码"></el-input>
      <img :src="imgCode" class="img-code"   alt="验证码" title="点击换一张">
      <span @click="reload" style="color:blue">刷新</span>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" style="width:300px"  class="login-btn" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
    </el-card>
</div>
</template>

<script>
/* eslint-disable */
// import Api from '@/network/login'
import List from '@/components/List'
// import { Message } from 'element-ui'
export default {
  name: 'login',
  index: 'DriverList',
  components: {
    List
  },
  data () {
    return {
      show: true,
      accessToken: '',
      tokenType: '',
      codeImg: '',
      loginBox: {
        username: '',
        password: '',
        secret: '',
        captcha: ''
      },
      validate: {
        username: [
          { required: true, message: '请输入用户名',  trigger: 'blur'},
          // { validator: 'regexp', pattern:/\d{3,5}/, message: '用户名输入错误', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码',  trigger: 'blur'},
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码',  trigger: 'blur'},
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      imgCode: '',
      captchaId: '' 
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    fetchList () {
    //   return Api.testList()
    },
    loginbut () {
    //   return Api.loginButton()
    },
    closeButton () {
      this.show = !this.show
    },
    reload () {
    //   Api.testList().then(res => {
    //     this.loginBox.secret = res.data.secret
    //     this.imgCode = 'data:image/png;base64,' + res.data.base64Img
    //   })
    },
    login () {
      this.$refs.loginBox.validate().then((valid) => {
        if (!valid) return
        // Api.loginButton(this.loginBox).then(res => {
        //   localStorage.setItem('accessToken', res.data.accessToken)
        //   localStorage.setItem('tokenType', res.data.tokenType)
        //   this.$router.replace({path: '/home'})
        // })
      })
    }
  },
  mounted () {
    // Api.testList().then(res => {
    //   this.loginBox.secret = res.data.secret
    //   this.imgCode = 'data:image/png;base64,' + res.data.base64Img
    // })
  }
}
</script>

<style lang="less">
#login-page {
  .el-form-item__error {
    left: 62px;
  }
  .login-form { 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 420px;
    border-radius:10px;
    /deep/ .el-card__header {
      // color: @color-primary;
      font-size: 1.25rem;
      padding: 50px 0;
      border-bottom: none;
    }
    /deep/ .el-card__body {
      padding: 5px 0 50px 0;
    }
    .el-form {
      margin: 0 auto;
    }
  }
  .login-btn {
    border-radius: 50px;
  }
  #login-page {
    // background-image: url(../assets/bg_login.png);
    width: 100vw;
    height: 100vh;
    background-size: cover;
  }
  .el-button {
    width: 29.6%;
    margin-left: 0.5vw
  }
  .loginpage {
    font-size:20px;
    margin-top:1vw;
  }
  .turnoff {
    font-size: 25px;
    position: relative;
    left:60px;
  }
  .img-code {
    width:70px;
    position: relative;
    top:6px;
    margin: 0 10px 0 20px;
  }
}
</style>