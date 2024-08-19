<template>
  <div class="tip">
    <!-- 常见科室的结构 -->
    <div class="deparment">
      <div class="header">
        <div class="left">
          <svg
            style="width: 20px; height: 20px"
            t="1724069066252"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4290"
            width="200"
            height="200"
          >
            <path
              d="M817.3 305.3H762V250c0-61.1-49.5-110.7-110.7-110.7H374.7C313.5 139.3 264 188.8 264 250v55.3h-55.3C147.5 305.3 98 354.8 98 416v359.7c0 61.1 49.5 110.7 110.7 110.7h608.7c61.1 0 110.7-49.5 110.7-110.7V416c-0.1-61.2-49.6-110.7-110.8-110.7z m-498-55.3c0-30.5 24.8-55.3 55.3-55.3h276.7c30.5 0 55.3 24.8 55.3 55.3v55.3H319.3V250z m553.4 525.6c0 30.5-24.8 55.3-55.3 55.3H208.7c-30.5 0-55.3-24.8-55.3-55.3V416c0-30.5 24.8-55.3 55.3-55.3H817.3c30.5 0 55.3 24.8 55.3 55.3v359.6z"
              p-id="4291"
              fill="#d81e06"
            ></path>
            <path
              d="M540.7 471.3h-55.4V582H374.7v55.3h110.6V748h55.4V637.3h110.6V582H540.7z"
              p-id="4292"
              fill="#d81e06"
            ></path>
          </svg>
          <span>常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <svg
            style="width: 20px; height: 20px"
            t="1724069229427"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5783"
            width="200"
            height="200"
          >
            <path
              d="M357.957 167.176l-49.463 48.973 294.308 296.327-296.782 293.831 49.044 49.381 346.239-342.809z"
              fill="#2c2c2c"
              p-id="5784"
            ></path>
          </svg>
        </div>
      </div>
      <div class="content">
        <ul>
            <li>神经内科</li>
            <li>消化内科</li>
            <li>呼吸内科</li>
            <li>内科</li>
            <li>神经外科</li>
            <li>妇科</li>
            <li>产科</li>
            <li>儿科</li>
        </ul>
      </div>
    </div>
    <!-- 平台公告 -->
    <div class="notice">
        <div class="header">
            <div class="left">

            </div>
            <div class="right">

            </div>
        </div>
    </div>
  </div>
</template> 

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.tip {
  color: #7f7f7f;
  .deparment {
    .header {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            margin-left: 5px;
        }
      }
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .content {
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width:40%;    
                margin-top: 20px;
                margin-left: 10px;
            }
        }
    }
  }
}
</style>