<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
          <h4 v-if='error' class="tips">{{ error }}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input @blur="blurs" :class="{'error': error && !username}" v-model="username" placeholder="手机号" prefix-icon="profile"></el-input>
        <el-input @blur="blurs" :class="{'error': error && !username}" v-model="password" placeholder="密码" prefix-icon="password"></el-input>
        <p class="foot">
          <a href="#">忘记密码？</a>
        </p>
        <el-button type="primary" class="btn-login" @click="submit">立即登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link to="/register">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <div class="footer">
        <ul>
            <li><a href="#">关于美团</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">商家中心</a></li>
            <li><a href="#">美团手机版</a></li>
        </ul>
        <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </div>
  </div>
</template>

<script>
import api from '@/api.js'
export default {
  data() {
    return {
      username: "",
      password: "",
      error:''
    };
  },
  methods: {
      submit(){
          if(!this.username){
              this.error = '请输入账号'
              return false
          }
          if(!this.password){
              this.error = '请输入密码'
              return false
          }
          api.login(this.username,this.password).then(data => {
              if(data.data.status == 'success'){
                this.$router.push({name:'index'});
                this.$store.commit('setUser',this.username);

              }else{
                  this.error = data.data.msg;
              }
          })
      },
      blurs(){
          this.error=''
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
