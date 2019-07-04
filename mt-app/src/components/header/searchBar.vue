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
            <router-link tag="dd" to="{name:'goods',params:{name:index}}" v-for="(item,index) in hotPlaceList" :key="item+index">{{ item }}</router-link>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <router-link tag="dd" to="{name:'goods',params:{name:index}}" v-for="(item,index) in searchList" :key="item+index">{{ item }}</router-link>
            
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="(item,index) in suggestList" :key="item+index">{{ item }}</a>
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
      isFoucs: false,
      hotPlaceList:['北京动物园'],
      searchList:['火锅'],
      suggestList:['北京欢乐谷','北京动物园']
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
