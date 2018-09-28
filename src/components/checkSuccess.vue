<template>
<div class="weui-msg">
  <div class="weui-msg__icon-area">
    <i class="weui-icon-success weui-icon_msg"></i>
  </div>
  <div class="weui-msg__text-area">
    <h4>签到成功</h4>
    <h5>签到时间</h5>
    <h1 style="color: #808080">{{nowTime()}}</h1>
  </div>
  <div style="padding: 20px"><a @click="checkBack" class="weui-btn  weui-btn_primary" style="text-align: center;" >点击返回</a></div>
</div>
</template>

<script>
    export default {
        name: "checkSuccess",
        methods:{
          checkBack:function () {
            this.$router.push('/')
          },
          nowTime:function () {
            let now=new Date();
            let hours=now.getHours();
            let minutes=now.getMinutes();
            return (hours<10?('0'+hours):hours)+':'+(minutes<10?('0'+minutes):minutes);
          }
        }
    }
</script>

<style scoped>
  @import "../assets/css/weui.min.css";
.weui-msg{
  padding-top: 40px;
  text-align: center;
}
</style>
