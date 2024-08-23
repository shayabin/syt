<template>
 <div class="register">
    <div class="top">
        <div class="title">{{hospitalDetail.hospitalInfo.hospital?.hosname}}</div>
        <div class="level">
            <svg style="width:20px;height:20px" t="1724247646335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271" width="200" height="200"><path d="M840.88 330H631.67c-11.17 0-19.3-10.6-16.41-21.38l23.16-86.43c14.45-53.93-17.55-109.36-71.48-123.81A98.616 98.616 0 0 0 541.36 95c-43.88 0-84.3 29.38-96.17 73.66l-19.8 73.88C411.57 294.12 364.82 330 311.41 330H150c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h618.88c30.8 0 57.23-21.94 62.9-52.21l72-384c7.39-39.38-22.82-75.79-62.9-75.79zM182 394h93.63L248.2 778H182V394z m586.88 384H312.37l27.6-386.39c69.97-11.15 128.47-62.44 147.25-132.51l19.8-73.88c4.07-15.2 18.52-26.22 34.35-26.22 3.01 0 6.04 0.4 9.01 1.2 19.76 5.29 31.52 25.68 26.23 45.43l-23.16 86.43c-6.57 24.52-1.47 50.13 13.98 70.26 15.45 20.14 38.87 31.69 64.25 31.69h209.21L768.88 778z" fill="#333333" p-id="4272"></path></svg>
            <span>{{hospitalDetail.hospitalInfo.hospital?.param.hostypeString}}</span>
        </div>
    </div>
    <!-- 内容 -->
    <div class="content">
        <div class="left">
            <img :src="`data:image/jpeg;base64,`+hospitalDetail.hospitalInfo.hospital?.logoData" alt="">
        </div>
        <div class="right">
            <div>挂号规则</div>
            <div class="time">
                预约周期:10天  放号时间:{{hospitalDetail.hospitalInfo.bookingRule?.releaseTime}}  停挂时间:{{hospitalDetail.hospitalInfo.bookingRule?.stopTime}}
            </div>
            <div class="address">
                具体位置:{{hospitalDetail.hospitalInfo.hospital?.param.fullAddress}}
            </div>
            <div class="route">
                具体路线:{{hospitalDetail.hospitalInfo.hospital?.route}}
            </div>
            <div class="releaseTime">
                退号时间:就诊前一个工作日{{hospitalDetail.hospitalInfo.bookingRule?.quitTime}}前取消
            </div>
            <div class="rule">预约挂号规则:</div>
            <div class="ruleInfo" v-for="(item,index) in hospitalDetail.hospitalInfo.bookingRule?.rule" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
    import useDetailStore from '@/store/modules/hospitalDetail'
    let hospitalDetail = useDetailStore()

</script>

<style lang='scss' scoped>
.register {
    .top {
        display: flex;
        .title {
            font-size: 30px;
            font-weight: 900;
        }
        .level {
            color: #7f7f7f;
            margin-left: 10px;
            height: 40px;
            display: flex;
            align-items: center;
            span{
                margin-left: 5px;
            }
        }
    }
    .content {
        display: flex;
        margin-top: 20px;
        .left {
            width: 80px;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        .right {
            flex:1;
            font-size: 16px;
            margin-left: 20px;
            .time,.address,.route,.releaseTime,.ruleInfo {
                margin-top: 10px;
                color: #7f7f7f;
            }
            .rule {
                margin: 20px 0 10px 0;
            }
        }
    }
}
</style>
