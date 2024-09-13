<template>
  <div class="hospital">
    <!-- 左侧导航区 -->
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <span> / 医院详情</span>
      </div>  
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧 -->
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {onMounted} from 'vue'
import useDetailStore from '@/store/modules/hospitalDetail'
let detailStore = useDetailStore()

import {useRouter,useRoute} from 'vue-router'
let $router = useRouter()
let $route = useRoute()

onMounted(()=>{
  detailStore.getHospital($route.query.hoscode)
  detailStore.getDepartment($route.query.hoscode)
})

const changeActive = (path:string)=>{
    $router.push({path,query:{hoscode:$route.query.hoscode}})
}

import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled
} from '@element-plus/icons-vue'
</script>

<style lang='scss' scoped>
.hospital {
  margin-top: 30px;
  display: flex;
  .menu {
    font-size:20px;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: top;
    .top{
        color: #7f7f7f;
        margin-bottom: 25px;
    }
  }
  .content {
    margin-left: 30px;
    flex: 12;
  }
}
</style>