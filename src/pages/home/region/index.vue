<template>
 <div class="region">
    <div class="content">
        <div class="left">地区:</div>
        <ul>
            <li :class="{active:RegionFlag == ''}" @click="changeRegion('')">全部</li>
            <li :class="{active:RegionFlag == region.value}" @click="changeRegion(region.value)" v-for="(region,index) in RegionArr" :key="region.value">{{region.name}}</li>
        </ul>
    </div>
</div>
</template>

<script setup lang='ts'>
import {reqHospitalLevelAndRegion} from '@/api/home'
import {onMounted,ref} from 'vue'
import type {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from '@/api/home/type'

let RegionArr = ref<HospitalLevelAndRegionArr>([])
let RegionFlag = ref<string>('')

onMounted(()=>{
    getRegion()
})

//获得地区的数据
const getRegion = async()=>{
    let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
    if(result.code == 200){
        RegionArr.value =  result.data
    }
}

const changeRegion = (region)=>{
    RegionFlag.value = region
    $emit('getRegion',region)
}

let $emit = defineEmits(['getRegion'])
</script>

<script lang='ts'>
export default {
    name:'Region'
}
</script>


<style lang='scss' scoped>
.region {
    color: #7f7f7f;
    margin-right: 10px;
    .content {
        display: flex;
        .left {
            margin-right: 10px;
            width: 39px;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                margin-right: 10px;
                margin-bottom: 10px;
                &.active {
                    color: #55a6fe;
                }
            }
            li:hover {
                color: #55a6fe;
            }
        }
    }
}
</style>