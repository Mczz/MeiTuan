<template>
  <dl class="s-item">
    <dt>
      <img :src="itemList.image" alt />
    </dt>
    <dd>
      <h3>
        <router-link to="/">{{ itemList.title }}</router-link>
      </h3>
      <p>
        <el-rate
          v-model="itemList.score"
          disabled
       
          text-color="#ff9900"
         
        ></el-rate>
        <span v-if='itemList.score > 4.5'>很好</span>
        <span v-else-if='itemList.score > 4'>好</span>
        <span v-else-if='itemList.score > 3.5'>不错</span>
        <span v-else-if='itemList.score > 3'>一般</span>
        <span v-else>差</span>
        <span>{{ itemList.score}}分</span>
        <span class="s-item-comment-total">{{ itemList.commentNum}}人评论</span>
      </p>
      <p>
          <span class="s-item-tab">
              <span v-for='(v,i) in itemList.tab' :key="i">{{ v + (i < itemList.tab.length - 1 ?'|' : '')}}</span>
          </span>
          <span class="s-item-addr">{{ itemList.address }}</span>
          <span class="s-item-map">
                  <i class="el-icon-location"></i>查看地图
          </span>
      </p>
      <p>
          <span class="s-item-price">
              人均￥{{ itemList.avgPrice }}
          </span>
      </p>
      <ul class="deal-items">
          <li class="items" v-for='(v,i) in itemList.dealItems.slice(0,2)' :key='i'>
              <p class="deal-title">{{ v.title }}</p>
              <p >
                  <span class="deal-price">
                      ￥{{v.price }}
                  </span>
                  <span class="deal-old-price">
                      门市价￥{{v.counterPrice }}
                  </span>
                  <span class="deal-sales">已售{{ v.saleNum}}</span>
              </p>
          </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["itemList"]
};
</script>

<style scoped>
</style>