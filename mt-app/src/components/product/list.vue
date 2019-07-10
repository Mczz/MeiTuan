<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active':item.key == navActive}"
      >{{ item.name }}</li>
    </ul>
    <mitem v-for="(item,index) in productsList" :key="index" :itemList="item" />
  </div>
</template>

<script>
import mitem from "@/components/product/item.vue"
import api from "@/api.js"

export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序"
        },
        {
          key: "s-price",
          name: "价格最低"
        },
        {
          key: "s-score",
          name: "人气最高"
        },
        {
          key: "s-comment",
          name: "评价最高"
        }
      ],
      productsList: [
        
      ],

      navActive: "s-default"
    };
  },
  created () {
    api.goodList().then(data =>{
      this.productsList = data.data.data
    })
  },
  components: {
    mitem
  }
};
</script>

<style scoped>
</style>