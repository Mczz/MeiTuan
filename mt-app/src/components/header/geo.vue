<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      {{ position }}
      <router-link class="change-city" :to="{name:'changecity'}">切换城市</router-link>
      [
        <a href="#" class="city" v-for='(item,index) in nearCity' :key='index'>{{ item.name }}</a>&nbsp;
      ]
    </div>
    <div class="m-user" v-if='!$store.userName'>
      <router-link class="login" to="/login">立即登录</router-link>
      <router-link class="register" to='/register'>注册</router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import api from "@/api.js"

export default {
  computed: {
    ...mapState(['position'])
  },
  data(){
    return{
      nearCity:[]
    }
  },
  created () {
    
      api.getPosition().then(data => {
        this.$store.dispatch('setPosition',data.data.data.name)
        this.nearCity = data.data.data.nearCity;
    })
  }
};
</script>

<style scoped>
</style>