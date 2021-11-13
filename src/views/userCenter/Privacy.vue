<template>
  <div class="w">
    <h1>隐私</h1>
    <cardDiv text=管理隐私 :width="long" >
      <div class="p0">
        无任何隐私
      </div>
    </cardDiv>

  </div>
</template>



<script>
import cardDiv from "@/views/userCenter/cardDiv";


export default {
  name: "Privacy",
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
  margin: 0 auto;
}
.p0{
  color: white;
  text-align: center;
}
</style>
