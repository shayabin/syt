<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel></Carousel>
    <!-- 搜索 -->
    <Search></Search>
    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 医院等级 -->
        <Level @getLevel="getLevel"></Level>
        <!-- 医院地区 -->
        <Region @getRegion="getRegion"></Region>
        <!-- 展示医院的结构 -->
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card class="item" v-for="(item,index) in hasHospitalArr" :key="item.id" :hospitalInfo="item"></Card>
          <div class="pagination">
            <!-- 分页器 -->
            <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :background="true"
              layout="prev, pager, next, jumper, ->, sizes, total"
              :total="total"
              @current-change="currentChange"
              @size-change="sizeChange"
            />
          </div>
        </div>
        <el-empty v-else description="找不到相关医院" />
      </el-col>
      <el-col :span="4">
        <Tip></Tip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { onMounted,ref } from 'vue'
import {reqHospital} from '@/api/home'
//引入首页轮播图组件
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
//引入右侧组件
import Tip from './tip/index.vue'
import type {Content,HospitalResponseData} from '@/api/home/type'
//分页器页码
let pageNo = ref<number>(1);
//一页个数
let pageSize = ref<number>(10);
//总数
let total = ref<number>(0)
//存储医院等级的响应数据
let hostype = ref<string>('')
//存储医院地区的响应数据
let districtCode = ref<string>('')

//存储已有的医院的数据
let hasHospitalArr = ref<Content>([])

onMounted(()=>{
  getHospitalInfo()
})

//获取已有的医院的数据
const getHospitalInfo = async()=>{
  let result:HospitalResponseData = await reqHospital(pageNo.value,pageSize.value,hostype.value,districtCode.value)
  if(result.code == 200){
    hasHospitalArr.value = result.data.content
    total.value = result.data.totalElements
  }
}

//分页器页码发生变化
const currentChange = ()=>{
  getHospitalInfo()
}

//分页器下拉菜单
const sizeChange = ()=>{
  pageNo.value = 1
  getHospitalInfo()
}

//子组件的自定义事件，获取医院等级
const getLevel = (level:string)=>{
  hostype.value = level
  getHospitalInfo()
}

const getRegion = (region:string)=>{
  districtCode.value = region
  getHospitalInfo()
}
</script>

<style lang='scss' scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0;
  }
  .pagination {
    width: 100%;
  }
}
</style>