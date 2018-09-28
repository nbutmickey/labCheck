<template>
<div>
  <div class="topTips" v-if="showTopTips">请填写完整信息后继续</div>
  <div class="weui-flex"><div class="weui-flex__item title" >网络工程实验室在线签到</div></div>
  <div class="weui-cells__title">{{basic.name}}</div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd"><p>主题</p></div>
        <div class="weui-cell__ft">{{basic.topic}}</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd"><p>主讲人</p></div>
        <div class="weui-cell__ft">{{basic.presenter}}</div>
      </div>
    </div>
  <div class="weui-cells__title">签到</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">学号</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-model="sno" placeholder="请输入学号"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">姓名</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-model="stname" placeholder="请输入姓名"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label for="" class="weui-label">班级</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-model="stclass" placeholder="请输入班级"/>
        </div>
      </div>
    </div>
    <div style="padding: 20px"><a class="weui-btn  weui-btn_primary" style="text-align: center;" @click="submitCheck">签到</a></div>
  </div>
</template>

<script>
    export default {
        name: "check",
        data(){
          return{
            showTopTips:false,
            stname: '',
            stclass: '',
            sno: '',
            basic:{
              name:'',
              topic:'',
              presenter:'',
              topicId:''
            }
          }
        },
      created(){
          this.getBasic();
      },
      methods:{
          getBasic:function(){
            this.$http.get('api/getBasic').then((res)=>{
              let data=res.data[0]
              this.basic.name=data.name
              this.basic.topic=data.topic
              this.basic.presenter=data.presenter
              this.basic.topicId=data.id
            })
          },
          submitCheck:function () {
            if(!this.stname||!this.sno||!this.stclass)
            {
              this.showTopTips=true
            }else{
              this.$http.post('api/check',{
                sno:this.sno,
                stclass:this.stclass,
                name:this.stname,
                basic_id:this.basic.topicId
              }).then((res)=>{
                if(res.data.success){
                  this.sno='';
                  this.stname='';
                  this.stclass='';
                  this.$router.push('/checkSuccess')
                }else{
                  alert("签到未成功")
                }
              })
            }
          }
      }
    }
</script>

<style scoped>
 @import "../assets/css/weui.min.css";
.title{
  background-color: #177b8f;
  padding: 20px;
  color: white;
}
.topTips{
  background-color: #e64340;
  display: block;
  position: fixed;
  transform: translateZ(0);
  top:0;
  left: 0;
  right: 0;
  padding: 6px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  z-index: 5000;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
