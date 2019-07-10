<template>
<div class="page-changeCity">
    <el-row>
        <Province/>
    </el-row>
    <el-row>
        <MHot title='热门城市:' :list='hotList'/>
    </el-row>
    <el-row>
        <MHot title='最近访问:' :list='rencentList'/>
    </el-row>
    <el-row>
        <catelgroy/>
    </el-row>
</div>

</template>

<script>
import Province from '@/components/changeCity/province.vue'
import MHot from "@/components/changeCity/myhot.vue"
import catelgroy from "@/components/changeCity/categroy.vue"
import api from "@/api.js"

export default {
    data () {
        return {
            hotList:[],
            rencentList:[]
        }
    },
    created () {
        api.hot().then(data => {
            this.hotList = data.data.data
        });
        api.recents().then(data => {
            this.rencentList = data.data.data
        })
    },
    components: {
        Province,
        MHot,
        catelgroy
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
