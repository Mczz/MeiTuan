<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to='/index'>
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="input"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="searchinput"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd></dd>
            <router-link
              tag="dd"
              v-for="(item,index) in hotPlaceList"
              :key="item+index"
              :to="{name:'goodlist',params:{name:item}}"
            >{{ item }}</router-link>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <router-link
              tag="dd"
              v-for="(item,index) in searchList"
              :key="item+index"
              :to="{name:'goodlist',params:{name:item}}"
            >{{ item }}</router-link>
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
import api from "@/api.js";
export default {
  data() {
    return {
      input: "",
      isFoucs: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: ["北京欢乐谷", "北京动物园"]
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
    },
    searchinput() {
      api
        .search()
        .then(data => {
          let val = this.input;
          this.searchList = data.data.data.list.filter(item => {
            return item.indexOf(val) > -1;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    api
      .searchHotWords()
      .then(data => {
        this.hotPlaceList = data.data.data;
      })
      .catch(err => {
        console.log(err);
      });
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
