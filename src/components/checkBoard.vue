<template>
    <div class="bg container">
      <div class="aside">
        <p>网工实验室签到平台</p>
        <div style="text-align: center">
          <img src="../assets/image/QR.png" style="width: 180px;height: 180px">
          <p style="color: white;font-size: 14px">请打开微信扫一扫功能,填写表单即可实现在线签到</p>
        </div>
        <p style="display: flex;flex-direction: column;align-items: center"><span>{{getPersons.length}}</span>已签到</p>
      </div>
      <div class="content">
        <div class="check-person" v-for="item in getPersons">
          <img src="../assets/image/boys.png">
          <p>{{item.stclass}}</p>
          <p>{{item.stname}}</p>
        </div>
      </div>
  </div>
</template>

<script>
    // import { mapGetters } from 'vuex'
    export default {
        name: "checkBoard",
        data(){
          return{
            getPersons:[]
          }
        },
        beforeDestroy(){
          clearInterval(this.intervalGetCheck)
        },
        created(){

            this.intervalGetCheck=setInterval(()=>{
              this.$http.get('api/getCheck').then((res)=>{
                this.getPersons=res.data;
              })
            },1000)
        }
    }
</script>

<style scoped>
.bg{
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-size: cover;
  background-image: url("../assets/image/bg-board.jpg");
}

.container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

}
.content{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  height: 90%;
  padding: 25px 28px;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(0,0,0,.4);
}
 .aside{
  box-sizing: border-box;
  width: 22%;
  height: 90%;
  border-radius: 4px;
  padding: 20px;
  background: rgba(0,0,0,.4);
  }
  .aside p{
    color: whitesmoke;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center
  }
 .aside p span{
   font-style: italic;
   font-size: 25px;
   color: #e64340;
  }
  .check-person{
    width: 100px;
    display: flex;
    flex-direction: column;
    bottom:-300px;
    opacity: 0;
    animation: up 1.0s 1.2s linear;
    animation-fill-mode: both;
    align-items: center;
  }
  .check-person img{
    border-radius: 50%;
  }
  .check-person p{
    color: white;
    margin: 0;
  }
</style>
