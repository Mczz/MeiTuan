<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{ navList.title }}</dt>
      <dd
        v-for="(item,index) in navList.list"
        :key="index"
        :data-type="item.tab"
        :class="{active:kind == item.tab}"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.subTitle">{{ item.sub_title }}</div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.avr_price }}</span>
                <span class="units">/{{ item.price_info.units }}</span>
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api.js"
export default {
  data() {
    return {
      kind: "all",
      list: []
    };
  },
  created () {
    api.resultsByKeywords().then(data => {
        this.list = data.data.data['all']
      })
  },
  props: ["navList"],
  methods: {
    over(e) {
      if (e.target.tagName != "DD") {
        return false;
      }
      this.kind = e.target.dataset.type;
      api.resultsByKeywords().then(data => {
        this.list = data.data.data[this.kind]
      })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
