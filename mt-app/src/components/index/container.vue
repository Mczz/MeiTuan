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
          <img :src="item.img" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
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
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单",
          rentNum: 0
        },
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: null,
            old_price: 36,
            avr_price:18,
            units:"人均"
          },
          address: "王府井/东单",
          rentNum: 10
        },
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单",
          rentNum: 10
        },
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单",
          rentNum: 10
        },
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单",
          rentNum: 10
        },
        {
          img:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 18,
            old_price: 36
          },
          address: "王府井/东单",
          rentNum: 10
        }
      ]
    };
  },
  props: ["navList"],
  methods: {
    over(e) {
      if (e.target.tagName != "DD") {
        return false;
      }
      this.kind = e.target.dataset.type;
      //请求数据
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
