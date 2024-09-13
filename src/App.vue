<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom></HospitalBottom>
    <!-- 登录组件 -->
    <Login></Login>
  </div>
  
</template>

<script setup lang='ts'>


</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>