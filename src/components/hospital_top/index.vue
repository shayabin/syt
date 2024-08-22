<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left" @click="goHome"> 
        <img src="../../assets/images/logo.png" alt="">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入
import {useRouter} from 'vue-router'
let $router = useRouter()
const goHome = ()=>{
  $router.push({path:'/home'})
}
</script>

<style scoped lang="scss">
.top {
  border-bottom: 1px #f1eded solid;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  // background: #fff;
  display: flex;
  justify-content: center;
  .content {
    border-bottom: 1px #f1eded solid;
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 16px;
        color: #bbb;
      }
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>