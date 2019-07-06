<template>
  <div class="m-menu">
    <div class="nav">
      <dl>
        <dt>全部分类</dt>
        <dd v-for="(item,index) in menuList" :key="index" @mouseenter="navIn(item)" @mouseleave="navOut">
          <i :class="item.icon"></i>
          {{ item.title }}
          <span class="arrow"></span>
        </dd>
      </dl>
    </div>
    <div class="detail" v-if="curDetail" @mouseenter="detailIn" @mouseleave="detailOut">
      <template v-for="(v,i) in curDetail.children">
        <h4 :key="i">{{ v.title }}</h4>
        <span v-for="(item,index) in v.children" :key='item+"_"+index'>{{ item }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curDetail: null,
      clearTimer:null,
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅",
                "自助餐",
                "小吃",
                "快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤",
                "烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅",
                "烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡",
                "酒吧",
                "茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜",
                "鲁菜"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        }
      ]
    };
  },
  methods: {
      navIn(item){
        this.curDetail = item;
        clearTimeout(this.clearTimer);

      },
      navOut(){
        var self = this;
        this.clearTimer = setTimeout(function(){
          self.curDetail = null;
        },100)
      },
      detailIn(){
        clearTimeout(this.clearTimer);
      },
      detailOut(){
        this.curDetail = null;
      }
  }
};
</script>

<style scoped>
</style>