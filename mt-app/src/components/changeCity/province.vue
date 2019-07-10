<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <MSelect
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapper="showProvince"
      @showActive="showPro"
      @select="selectPro"
    />
    <MSelect
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapper="showCity"
      @showActive="showCi"
      @select="selectCity"
      :disabled='province == "省份"'
    />
    <span class="name">直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
import { mapState, mapMutations } from "vuex";
import api from "@/api.js";

export default {
  components: {
    MSelect
  },
  data() {
    return {
      provinceList: [],
      cityList: [],
      searchList: ["苏州", "南京"],
      searchWord: "",
      loading: false
    };
  },
  created() {
    api.province().then(data => {
      this.provinceList = data.data.data.map(item => {
        return item.provinceName;
        
      });
    });
    
  },
  computed: {
    ...mapState(["showProvince", "showCity", "province", "city"])
  },
  methods: {
    ...mapMutations(["showPro", "showCi"]),
    remoteMethod() {},
    selectPro(val) {
      this.$store.commit("setPro", val);
      api.province().then(data => {
        this.cityList = data.data.data
          .filter(item => {
            return item.provinceName == val;
          })[0]
          .cityInfoList.map(item => {
            return item.name;
          });
      });
    },
    selectCity(val) {
      this.$store.commit("setCity", val);
      this.$router.push('/index')
    }
  }
};
</script>
