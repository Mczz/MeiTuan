<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <MSelect :list="provinceList" title="省份" :value="province" :showWrapper='showProvince' @showActive="showPro"/>
    <MSelect :list="cityList" title="城市" :value="city"  :showWrapper='showCity' @showActive="showCi"/>
    <span class="name" >直接搜索：</span>
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
import MSelect from "./select"
import {mapState,mapMutations} from 'vuex'
export default {
  components: {
    MSelect,

  },
  data() {
    return {
      provinceList: [
        "北京",
        "上海",
        "天津",
        "重庆",
        "山东",
        "湖南",
        "湖北",
        "山西",
        "河南",
        "河北"
      ],
      province: "省份",
      cityList: ["苏州", "南京"],
      city: "城市",
      searchList:["苏州", "南京"],
      searchWord:'',
      loading:false
    };
  },
  computed: {
    ...mapState(['showProvince','showCity'])
      
  },
  methods: {
      ...mapMutations(['showPro','showCi']),
        remoteMethod(){

        }
  },
  
};
</script>
