<template>
  <div class="m-menu">
    <div class="nav">
      <dl>
        <dt>全部分类</dt>
        <dd v-for="(item,index) in menuList" :key="index" @mouseenter="navIn(item)" @mouseleave="navOut">
          <i :class="item.type"></i>
          {{ item.name}}
          <span class="arrow"></span>
        </dd>
      </dl>
    </div>
    <div class="detail" v-if="curDetail" @mouseenter="detailIn" @mouseleave="detailOut">
      <template v-for="(v,i) in curDetail.items">
        <h4 :key="i">{{ v.title }}</h4>
        <span v-for="(item,index) in v.items" :key='item+"_"+index'>{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api.js"
export default {
  data() {
    return {
      curDetail: null,
      clearTimer:null,
      menuList: [
        
      ]
    };
  },
  methods: {
      navIn(item){
        this.curDetail = item;
        clearTimeout(this.clearTimer);

      },
      navOut(){
        var self = this;
        this.clearTimer = setTimeout(function(){
          self.curDetail = null;
        },100)
      },
      detailIn(){
        clearTimeout(this.clearTimer);
      },
      detailOut(){
        this.curDetail = null;
      }
  },
  created () {
    api.nav().then(data => {
      this.menuList = data.data.data;
    })
  }
};
</script>

<style scoped>
</style>