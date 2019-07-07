<template>
<div class="page-changeCity">
    <el-row>
        <Province/>
    </el-row>
    <el-row>
        <MHot title='热门城市:' :list='hotList'/>
    </el-row>
    <el-row>
        <MHot title='热门城市:' :list='rencentList'/>
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

export default {
    data () {
        return {
            hotList:['北京','上海'],
            rencentList:['北京','深圳']
        }
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
