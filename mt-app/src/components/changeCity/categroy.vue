<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item,index) in cityList" :key="index" :id='"city" + index' v-show="item[0]">
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id"  @click="link(city.name)">
            {{ city.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api.js"

export default {
  created() {
   
    api.cityList().then(data => {
       var obj = {
        A:[],
        B:[],
        C:[],
        D:[],
        E:[],
        F:[],
        G:[],
        H:[],
        I:[],
        J:[],
        K:[],
        L:[],
        M:[],
        N:[],
        O:[],
        P:[],
        Q:[],
        R:[],
        S:[],
        T:[],
        U:[],
        V:[],
        W:[],
        X:[],
        Y:[],
        Z:[],
     };
    data.data.data.forEach(item => {
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityList = obj;

    })
   
  },
  data() {
    return {
      list: "ABCDEFGHIGKLMNOPQRTUVWXYZ".split(""),
      cityList: {}
    };
  },
  methods: {
    link(val){
      this.$store.commit("setCity", val);
      this.$router.push('/index')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>

