<template>
  <Card class="login" dis-hover>
    <p slot="title">用户登录</p>
    <Form class="form" ref="loginForm" :model="form" :rules="rules" :label-width="0" label-position="left">
      <Form-item prop="username">
        <Input v-model="form.username" size="large" prefix="md-person" placeholder="请输入账号"/>
      </Form-item>
      <Form-item prop="password">
        <Input v-model="form.password" type="password" size="large" prefix="md-lock" placeholder="请输入密码" />
      </Form-item>
      <Form-item>
        <Button type="primary" size="large" long @click="onLogin">登录</Button>
        <br><br>
        <Button type="warning" size="large" long @click="register">注册</Button>
      </Form-item>
    </Form>
  </Card>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true, message: '账号不能为空'
          }
        ],
        password: [
          {
            required: true, message: '密码不能为空'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      let loginData = new FormData();

      loginData.set("name", this.form.username);
      loginData.set("password", this.form.password);


      axios.post("http://39.108.147.203:9000/home/login", loginData).then(res=> {
        console.log(res);
        let data = res.data;

        if (data.code === 200) {
          if (data.status === 3){
            this.$router.push({path:'/adminindex'})
            this.$Message.success("success")
          }
           else if (data.status === 2){
            this.$router.push({path:'/customerindex'})
            this.$Message.success("success")
          }
           else if (data.status === 1){
            this.$router.push({path:'/supplierindex'})
            this.$Message.success("success")
          }
        } else if (data.code === 401){
          this.$Message.error(data.msg)
        }

        // if(res.data.code=== 200){
        //   this.$router.push({path:'/index'})
        // }else{
        //   this.$router.push({path:'/register'})
        // }
      })

      // this.$router.push({path:'/index'})
      // this.$Message.success('登录成功')
      // LoginByUsername({ commit }, userInfo) {
      //   const username = userInfo.username.trim()
      //   return new Promise((resolve, reject) => {
      //     loginByUsername(username, userInfo.password).then(response => {
      //       const data = response.data
      //       Cookies.set('Token', response.data.token) //登录成功后将token存储在cookie之中
      //       commit('SET_TOKEN', data.token)
      //       resolve()
      //     }).catch(error => {
      //         reject(error)
      //     });
      // });
      // }
      // this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      // 跳转
      //   this.$router.push({ path: '/' }); //登录成功之后重定向到首页
      //   }).catch(err => {
      //  this.$message.error(err); //登录失败提示错误
      // });
    },
    register(){
      this.$router.push({path:'/register'})
    }
  }
}
</script>

<style>
  .login {
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -80%);
    background-color: white;
    width: 320px;
  }

  .form {
    margin: 10px, null, 10px, null;
  }
</style>

