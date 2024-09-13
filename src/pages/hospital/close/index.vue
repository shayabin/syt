<template>
 <div>
    <div class="info">
        <h1>{{hospitalDetail.hospitalInfo.hospital?.hosname}}停诊信息</h1>
        <el-empty description="暂无信息" />
    </div>
</div>
</template>

<script setup lang='ts'>
import useDetailStore from '@/store/modules/hospitalDetail'
let hospitalDetail = useDetailStore()

</script>

<style lang='scss' scoped>
.info {
    h1 {
        text-align: center;
    }
}
</style>