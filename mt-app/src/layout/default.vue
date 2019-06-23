<template>
    <el-container class="layout-default">
      <el-header height=''>
        <myHeader/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer height=''>Footer</el-footer>
    </el-container>
</template>

<script>
import myHeader from "@/components/header/index.vue";
export default {
  components: {
    myHeader
  }
};
</script>

<style lang="sass">
    @import '@/assets/css/public/layout.scss'  
</style>

