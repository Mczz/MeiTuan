<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <router-link to="/" tag="dd">我的订单</router-link>
          <router-link to="/" tag="dd">我的收藏</router-link>
          <router-link to="/" tag="dd">抵用券</router-link>
          <router-link to="/" tag="dd">账户设置</router-link>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link to="/">商家中心</router-link>
        <dl>
          <router-link to="/" tag="dd">登录商家中心</router-link>
          <router-link to="/" tag="dd">美团智能收银</router-link>
          <router-link to="/" tag="dd">我想合作</router-link>
          <router-link to="/" tag="dd">手机免费开店</router-link>
          <router-link to="/" tag="dd">餐饮代理商招募</router-link>
          <router-link to="/" tag="dd">商家申请开票</router-link>
          <router-link to="/" tag="dd">免费合作美团排队</router-link>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">美团规则</router-link>
        <dl>
          <router-link to="/" tag="dd">规则中心</router-link>
          <router-link to="/" tag="dd">规则目录</router-link>
          <router-link to="/" tag="dd">规则评议院</router-link>
        </dl>
      </li>
      <li class="site list">
        <router-link to="/">网站导航</router-link>
        <div class="sub-container">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <router-link to="/" tag="dd">国际机票</router-link>
            <router-link to="/" tag="dd">火车票</router-link>
            <router-link to="/" tag="dd">榛果民宿</router-link>
            <router-link to="/" tag="dd">经济型酒店</router-link>
            <router-link to="/" tag="dd">主题酒店</router-link>
            <router-link to="/" tag="dd">商务酒店</router-link>
            <router-link to="/" tag="dd">公寓</router-link>
            <router-link to="/" tag="dd">豪华酒店</router-link>
            <router-link to="/" tag="dd">客栈</router-link>
            <router-link to="/" tag="dd">青年旅舍</router-link>
            <router-link to="/" tag="dd">度假酒店</router-link>
            <router-link to="/" tag="dd">别墅</router-link>
            <router-link to="/" tag="dd">农家院</router-link>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <router-link to="/" tag="dd">烤鱼</router-link>
            <router-link to="/" tag="dd">特色小吃</router-link>
            <router-link to="/" tag="dd">烧烤</router-link>
            <router-link to="/" tag="dd">自助餐</router-link>
            <router-link to="/" tag="dd">火锅</router-link>
            <router-link to="/" tag="dd">代金券</router-link>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <router-link to="/" tag="dd">热映电影</router-link>
            <router-link to="/" tag="dd">热门影院</router-link>
            <router-link to="/" tag="dd">热映电影口碑榜</router-link>
            <router-link to="/" tag="dd">最受期待电影</router-link>
            <router-link to="/" tag="dd">国内票房榜</router-link>
            <router-link to="/" tag="dd">北美票房榜</router-link>
            <router-link to="/" tag="dd">电影排行榜</router-link>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              >
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              >
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                title="榛果app"
                alt="榛果app"
              >
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              >
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              >
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>