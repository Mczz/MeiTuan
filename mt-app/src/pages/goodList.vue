<template>
  <div class="page-product">
    <el-row  class="m-crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="el-breadcrumb">{{ position }}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{ position }}{{ $route.params.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
        <el-col :span='19'>
            <el-row>
              <category/>
            </el-row>
            <el-row>
              <mlist/>
            </el-row>
        </el-col>
        <el-col :span='5'></el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import category from '@/components/product/category.vue'
import mlist from '@/components/product/list.vue'
export default {
  computed: {
    ...mapState(['position'])
  },
  methods: {
    
  },
  components: {
    category,
    mlist
  }
};
</script>
<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>
