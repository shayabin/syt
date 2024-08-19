<template>
 <div class="level">
    <h1>医院</h1>
    <div class="content">
        <div class="left">等级:</div>
        <ul class="hospital">
            <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
            <li :class="{active:activeFlag==level.value}" @click="changeLevel(level.value)" v-for="(level,index) in levelArr" :key="level.value">{{level.name}}</li>
        </ul>
    </div>
</div>
</template>

<script setup lang='ts'>
import {reqHospitalLevelAndRegion} from '@/api/home'
import {onMounted,ref} from 'vue'
import type {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from '@/api/home/type'

//存储医院等级的数据
let levelArr = ref<HospitalLevelAndRegionArr>([])

//控制医院等级高亮
let activeFlag = ref<string>('')

onMounted(()=>{
    getLevel()
})

//获取医院等级数据
const getLevel = async()=>{
    let result:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
    if(result.code == 200){
        levelArr.value = result.data
    }
}

//等级按钮
const changeLevel = (level:string)=>{
    activeFlag.value = level
    //触发自定义事件
    $emit('getLevel',level)
}

let $emit = defineEmits(['getLevel'])
</script>

<script lang='ts'>
    export default {
        name:'Level'
    }
</script>

<style lang='scss' scoped>
.level {
    color: #7f7f7f;
    h1 {
        font-weight: 900px;
        margin: 10px 0;
    }
    .content {
        display: flex;
        margin-bottom: 10px;
        .left {
            margin-right: 10px;
        }
        .hospital {
            display: flex;
            li {
                margin-right: 10px;
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