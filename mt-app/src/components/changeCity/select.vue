<template>
  <div class="choose-wrap" @click="showWrap" v-document-click='documentClick'>
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapper}">
          <p>{{ title }}</p>
          <div class="wrapper">
              <div class="col">
                  <span class="mt-item" v-for="(item,index) in list" :key='index' @click='changeVal(item)'>{{ item }}</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: ['list','title','value','showWrapper'],
    methods: {
        showWrap(e){
            e.stopPropagation();
            this.$emit('showActive',true);
        },
        documentClick(){
            this.$emit('showActive',false);            
        },
        changeVal(item){
            
        }       
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
