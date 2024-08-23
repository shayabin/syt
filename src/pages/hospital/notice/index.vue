<template>
 <div class="notice">
    <h1>{{hospitalDetail.hospitalInfo.hospital?.hosname}}预约挂号须知</h1>
    <div class="top">
        为方便您早日就医康复，请您认真阅读预约挂号须知：
    </div>
    <div class="info">
        <div class="tip">
            一、预约实名制:
        </div>
        <div class="text">
            <p>统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号（身份证、护照）、性别、手机号码、社保卡号等基本信息。</p>
        </div>
    </div>
    <div class="info">
        <div class="tip">
            二、预约挂号:
        </div>
        <div class="text">
            <p>按照北京市卫健委统一平台要求，预约挂号规则如下：</p>
            <ul>
                <li>在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源；</li>
                <li>在同一自然周，同一就诊人，可以预约最多8个号源；</li>
                <li>在同一自然月，同一就诊人，可以预约最多12个号源；</li>
                <li>在同一自然季度，同一就诊人，可以预约最多24个号源。</li>
            </ul>
        </div>
    </div>
    <div class="info">
        <div class="tip">
            三、取消预约:
        </div>
        <div class="text">
            <p>已完成预约的号源，如需办理退号，至少在就诊前一工作日14:00前通过网站、微信公众号、114电话等平台预约渠道进行取消预约。</p>
        </div>
    </div>
    <div class="info flag">
        <div class="tip">
            四、违约处理:
        </div>
        <div class="text">
            <p>如预约成功后患者未能按时就诊且不办理取消预约号视为爽约，同一患者在自然年内爽约规则如下：</p>
            <ul>
                <li>累计爽约3次，自3次爽约日起，90天内不允许通过114平台进行预约挂号；</li>
                <li>累计爽约6次，自6次爽约日起，180天内不允许通过114平台进行预约挂号。</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
import useDetailStore from '@/store/modules/hospitalDetail'
let hospitalDetail = useDetailStore()
</script>

<style lang='scss' scoped>
.notice {
    h1 {
        text-align: center;
        font-size: 30px;
    }
    .top {
        color: #7f7f7f;
        margin: 20px 0;
    }
    .info {
        .tip {
            font-weight: 900;
        }
        .text {
            color: #7f7f7f;
            margin: 10px 0;
            line-height: 30px;
            p {
                text-indent: 2em;
            }
            ul{
                text-indent: 2em;
                list-style-type: disc;
                list-style-position: inside;
            }
        }
        p {
            text-indent: 2em;
        }
    }
    .flag {
        color: red;
    }
}
</style>