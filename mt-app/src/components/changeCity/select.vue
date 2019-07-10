<template>
  <div
    :class="{'choose-wrap':true,'disabled':disabled}"
    @click="showWrap"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapper}">
        <p>{{ title }}</p>
        <div :class="{'wrapper':true,'city':title == '城市'}">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <span
              :class='{"mt-item":true,"active": item == value}'
              v-for="(item,index) in listData"
              :key="index"
              @click="changeVal(item)"
            >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "title", "value", "showWrapper", "disabled"],
  computed: {
    renderList() {
      var col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrap(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("showActive", true);
      }
    },
    documentClick() {
      this.$emit("showActive", false);
    },
    changeVal(val) {
      this.$emit("select", val);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
