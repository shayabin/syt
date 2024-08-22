<template>
  <div class="search">
    <div>
      <el-autocomplete
        clearable
        placeholder="请你输入医院的名称"
        class="form"
        v-model="hosname"
        :fetch-suggestions="fetchData"
        @select="goDetail"
      />
    </div>
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang='ts'>
//引入element-plus提供的图标
import { Search } from "@element-plus/icons-vue";
import {useRouter} from 'vue-router'
//收集搜索的关键字
import { ref } from "vue";
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo, Content } from "@/api/home/type";

//创建路由器对象
let $router = useRouter()

let hosname = ref<string>("");

const fetchData = async (keyword: string, cb: any) => {
  try {
    let result: HospitalInfo = await reqHospitalInfo(keyword);
    //整理数据
    let showData = result.data.map((item) => {
      return {
        value: item.hosname,
        hoscode:item.hoscode
      };
    });
    // console.log(showData);
    cb(showData);
  } catch (error) {
    console.log(error.message);
  }
};

//点击某一个推荐项
const goDetail = (item:any)=>{
  //路由调转
  $router.push({path:'/hospital/register',query:{hoscode:item.hoscode}})
}
</script>

<script lang='ts'>
export default {
  name: "Search",
};
</script>


<style lang='scss' scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  //深度选择器
  :deep(.el-input__wrapper) {
    width: 300px;
    margin-right: 10px;
  }
}
</style>