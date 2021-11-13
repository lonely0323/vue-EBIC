<template>
  <div class="w">
    <h1>账号详情</h1>
      <cardDiv text=个人信息 :width="long" >
    <el-row>

    <p>
      <el-col class="detailTitle" :span="5">姓名：</el-col>
    </p>
    <p>
      <el-col class="detailComm" :span="14">  {{stext}}</el-col>
    </p>





      <p>
        <el-col class="detailTitle" :span="5">国家\地区</el-col>
      </p>



      <p>  <el-col class="detailComm" :span="14">中国</el-col></p>
    </el-row>


      </cardDiv>
      <cardDiv text=电子邮箱 :width="long" >


          <p>
            <el-col class="detailTitle" :span="5">电子邮箱:</el-col>
          </p>
          <p>
            <el-col class="detailComm" :span="14">  {{semail}}</el-col>
          </p>


      </cardDiv>
      <cardDiv text=手机号码 :width="long" >


          <p>
            <el-col class="detailTitle" :span="5">手机号：</el-col>
          </p>
          <p>
            <el-col class="detailComm" :span="14">  {{sTelephone}}</el-col>
          </p>

      </cardDiv>
      <cardDiv text=EBIC昵称 :width="long" >
        <p>
          <el-col class="detailTitle" :span="5">EBIC昵称：</el-col>
        </p>
        <p>
          <el-col class="detailComm" :span="14">  {{sname}}</el-col>
        </p>



      </cardDiv>
  </div>



</template>

<script>

import cardDiv from "./cardDiv"

export default {
  data(){
    return{
      stext:localStorage.getItem('text'),
      sname:localStorage.getItem('name'),
      semail:localStorage.getItem('email'),
      sTelephone:localStorage.getItem('Telephone'),
      sID:localStorage.getItem('ID'),
      isAuth:"",//是否保持登录状态
      sort: { width: '590px' },
      long: { width: '1210px' },
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
  components:{
    cardDiv,
  }
}
</script>

<style>
.w {
  margin-left: 60px;
  width: 1240px;
  min-height: 500px;
}
.w ul {
  text-align: left !important;
}
h1 {
  font-size: 36px;
  padding-bottom: 30px;
  color: #fff;
  margin-left: 15px;
}
.detailTitle{
  font-size: 14px;
  color: #afb3bb;
  overflow-wrap: normal;
  line-height: 36px;
}
.detailComm{
font-size: 16px;
  color: #fff;
  height: 100%;
  overflow-wrap: normal;
  line-height: 36px;
  width: 470px;
  text-align: center;
}

.el-row p{
  float: left;
}
.cardBody p{
  float: left;
}

</style>
