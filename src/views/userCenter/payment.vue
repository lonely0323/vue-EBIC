<template>
  <div class="w">
    <h1>付款方式</h1>
    <cardDiv text=付款管理 :width="long" >
      <el-row>
        <div class="a1">
          查看您的支付活动和您的史诗游戏帐户的当前余额。查看我们的
          <a href="#">隐私政策。</a>
        </div>
      </el-row>

      <div class="ic">
        添加或管理与您的 Epic 游戏帐户相关的付款方式。
      </div>

    </cardDiv>

    <card-div text= 您的付款方式 :width="long">
      <el-row>

      </el-row>

      <div class="ima">

      </div>
    </card-div>
  </div>


</template>

<script>
import cardDiv from "@/views/userCenter/cardDiv";
export default {
  name: "payment",
  data(){
    return{
      sort: { width: '590px' },
      long: { width: '1210px' },
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
  color: #e7e7e7;
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
}
.cardBody p{
  color: white;
  text-align: center;
  width: 500px  ;
}
.a1{
  text-align: center;
  font-size: 18px;
  color: white;
}
.a1 a{
  text-decoration: none;
}

.ic{
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 30px 0 0 0;
}

.ima{
  margin: 0 auto;
  width: 694px;
  height: 678px;
  background: url("../images/wx.png");
}

</style>

