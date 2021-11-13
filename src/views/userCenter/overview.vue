<template>
  <div class="w">
    <h1>账号概览</h1>

    <cardDiv text=使用兑换码
             :width="sort">
      <div>
        <el-input placeholder="XXXXXXX"></el-input>
        <el-button type="primary"
                   :style="{'margin-left':'50px'}">使用兑换码</el-button>
        <p class="text">输入代码以兑换游戏序列号、游戏时间、虚拟物品。如需兑换点卡，请访问兑换点卡页面</p>
      </div>
    </cardDiv>

    <cardDiv text=EBIC游戏点卡
             :width="sort">
      <div class="money">EBIC游戏点卡</div>
    </cardDiv>

    <cardDiv text=您的信息
             :width="sort">

      <p class="p3">姓名：</p>

      <p class="p4">{{stext}}</p>


      <p class="p3">EBIC昵称：</p>

      <p class="p4">{{sname}}</p>


      <p class="p3">电子邮箱：</p>

      <p class="p4">{{semail}}</p>


      <p class="p3">手机号：</p>

      <p class="p4">{{sTelephone}}</p>


      <p class="p3">身份证：</p>

      <p class="p4">{{sID}}</p>




      <div v-for="(item,index) in comm"
           :key="index">

      </div>
    </cardDiv>

    <cardDiv class="safeDiv"
             text=安全检查
             :width="sort">
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
               width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"> <span class="commComm">已验证电子邮箱</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
               width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"> <span class="commComm">已验证手机号码</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
               width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"> <span class="commComm">已验证身份证号码</span></el-col>
      </el-row>
    </cardDiv>

    <cardDiv class="gameTime"
             text=充值&游戏时间
             :width="long">
      <div v-for="(item,index) in gameTimeComm"
           :key="index">
        <el-row>
          <el-col :span="4">
            <game-icon :type="item.type"
                       :size="item.size"></game-icon>
          </el-col>
          <el-col :span="10">
            <p class="p1">{{item.title1}}</p>
            <p class="p2">中国</p>
          </el-col>
          <el-col :span="10">
            <p class="p1">{{item.title2}}</p>
            <p class="p2">账号状态</p>
          </el-col>
        </el-row>
        <br /><br />
      </div>
    </cardDiv>

  </div>
</template>

<script>

import cardDiv from "./cardDiv"
import GameIcon from '@/components/GameIcon/GameIcon'

export default {
  name:'overview',
  data () {
    return {
      stext:localStorage.getItem('text'),
      sname:localStorage.getItem('name'),
      semail:localStorage.getItem('email'),
      sTelephone:localStorage.getItem('Telephone'),
      sID:localStorage.getItem('ID'),
      isAuth:"",//是否保持登录状态
      sort: { width: '590px' },
      long: { width: '1210px' },
      comm: [

      ],
      gameTimeComm: [{
        type: 1,
        size: 2,
        title1: "《Grand Theft Auto V》",
        title2: "永久游玩"
      },
      {
        type: 2,
        size: 2,
        title1: "《Terraria(泰拉瑞亚)》",
        title2: "永久游玩"
      }]
    }
  },
  methods:{
    //当点击退出按钮，将不保存登录状态
    logout:function()
    {
      this.isAuth="false";//修改登录状态
      localStorage.setItem('s',this.isAuth);
      this.$router.replace('/login');//页面跳转至登录页面
    }
  },
  props: {

  },
  components: {
    cardDiv,
    GameIcon
  }
}
</script>

<style scoped>
.w {
  margin-left: 60px;
  width: 1240px;
  min-height: 500px;
}
.w ul {
  text-align: left !important;
}
.text {
  text-align: left;
  margin-top: 30px;
  font-size: 16px;
  color: #afb3bb;
}
.w h1 {
  font-size: 36px;
  padding-bottom: 30px;
  color: #fff;
  margin-left: 15px;
}
.gameTime .p1 {
  font-size: 18px;
  color: #fff;
}
.gameTime .p2 {
  font-size: 16px;
  color: #afb3bb;

}
.el-input {
  width: 300px;
}
.money {
  color: #70d929;
  font-size: 30px;
  margin: 36px 0px;
}
.commTitle {
  font-size: 14px;
  color: #afb3bb;
  overflow-wrap: normal;
  line-height: 36px;
}
.commComm {
  font-size: 16px;
  color: #fff;
  height: 100%;
  overflow-wrap: normal;
  line-height: 36px;
}
.safeIcon {
  font-size: 16px;
  color: #fff;
  overflow-wrap: normal;
  line-height: 36px;
}
.el-icon-success {
  color: lawngreen;
  font-size: 50px;
}
.safeDiv {
  height: 356px;
}
.p1{
  width: 350px;
  font-size: 20px;
   color: white;
}

.p2{
  width: 100px;
  float: left;
}
.p1 p{
   margin: 0 0 11px 0 ;
 }
.p1 a{
  float: right;
}
.p3{
  width: 100px;
  float: left;
  height: 45px;
  line-height: 45px;
}
.p4{
  width: 400px;
  float: left;
  height: 45px;
  line-height: 45px;
}

</style>

