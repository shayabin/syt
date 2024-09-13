<template>
  <div class="login_container">
    <!-- v-model控制对话框的显现与隐藏 / title是标题 -->
    <el-dialog v-model="userStore.visiable" title="用户登录">
        <el-row>
            <el-col :span="12">
                <div class="login">
                    <el-form>
                        <el-form-item>
                            <el-input placeholder="请你输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请你输入手机验证码"></el-input>
                        </el-form-item>                        
                    </el-form>
                </div>
            </el-col>
            <el-col :span="12">456</el-col>
        </el-row>
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
//获取user仓库的数据（visiable）
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

</script>

<script lang="ts">
export default {
    name:'Login'
}
</script>


<style lang='scss' scoped>
.login_container {
    // ::v-deep(.el-dialog__body){
    //     border-top: 1px solid red;
    //     border-bottom: 1px solid red;
    // }
    :deep(.el-dialog__body){
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    // .login {

    // }
}
</style>