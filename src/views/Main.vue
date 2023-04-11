<template> 
    <el-container>
        <el-header style="height: 65px; padding: 0;">
            <common-header />
        </el-header>
        <router-view></router-view>
        <common-footer />

    </el-container>
</template>
<script>
import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
export default {
    data() {
        return {

        }
    },
    components: {

        // eslint-disable-next-line vue/no-unused-components
        CommonFooter,
        // eslint-disable-next-line vue/no-unused-components
        CommonHeader
    },
}
</script>
<style></style>
