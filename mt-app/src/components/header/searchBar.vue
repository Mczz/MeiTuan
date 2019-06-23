<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="input" placeholder="搜索商家或地点" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <router-link tag="dd" to="/">北京动物园</router-link>
            <router-link tag="dd" to="/">十渡蹦极俱乐部</router-link>
            <router-link tag="dd" to="/">北京欢乐谷</router-link>
            <router-link tag="dd" to="/">欢乐水魔方水上乐园</router-link>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <router-link tag="dd" to="/">火锅</router-link>
            <router-link tag="dd" to="/">火锅自助餐</router-link>
            <router-link tag="dd" to="/">火锅 重庆</router-link>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">北京动物园</a>
          <a href="#">十渡蹦极俱乐部</a>
          <a href="#">北京欢乐谷</a>
          <a href="#">欢乐水魔方水上乐园</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      isFoucs: false
    };
  },
  methods: {
    focus() {
      this.isFoucs = true;
    },
    blur() {
      var self = this;
      setTimeout(function() {
        self.isFoucs = false;
      }, 200);
    }
  },
  computed: {
    isHotPlace: function() {
      return this.isFoucs && this.input == "";
    },
    isSearchList: function() {
      return this.isFoucs && !(this.input == "");
    }
  }
};
</script>


<style lang="sass">
</style>
