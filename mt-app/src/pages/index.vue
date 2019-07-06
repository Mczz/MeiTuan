<template>
    <div class="page-index">
        <el-row>
            <el-col :span='5'>
                <Mmenu/>
            </el-col>
            <el-col :span='19'>
                <Mlife/>
            </el-col>
        </el-row>
        <el-row>

        </el-row>
    </div>

</template>

<script>
import Mmenu from '@/components/index/menu.vue'
import Mlife from '@/components/index/life.vue'
export default {
    components: {
        Mmenu,
        Mlife
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
</style>
