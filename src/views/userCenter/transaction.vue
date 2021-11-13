<template>
  <div class="w">
    <h1>交易记录</h1>
    <cardDiv text=购买历史情况 :width="long" >
      <el-row>
        <div class="a2">
          查看您的帐户付款详细信息和交易。
          <a href="#">阅读史诗游戏退款政策</a>
        </div>
      </el-row>

      <el-time-select
          v-model="value"
          :picker-options="{
            start: '08:30',
             step: '00:15',
               end: '18:30'
         }"
          placeholder="选择时间">
      </el-time-select>


      <div class="input">
        <el-select v-model="value" placeholder="购买历史记录">
          <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>

      <div class="biao">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="购买途径">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="购买日期">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="价格">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
              label="日期"
              prop="id">
          </el-table-column>
          <el-table-column
              label="商品名称"
              prop="name">
          </el-table-column>
          <el-table-column
              label="描述"
              prop="desc">
          </el-table-column>
          <el-table-column
              label="价格"
              prop="shopId">
          </el-table-column>
        </el-table>
      </div>


    </cardDiv>

  </div>

</template>

<script>
import cardDiv from "@/views/userCenter/cardDiv";
export default {
  name: "transaction",
  data(){
    return{
      sort: { width: '590px' },
      long: { width: '1210px' },
      cities: [{
        value: 'E currency',
        label: 'E币使用记录'
      }, {
        value: 'Subscription record',
        label: '订阅历史记录'
      }, {
        value: 'purchase history',
        label: '购买历史记录'
      }, {
        value: 'View subscriptions',
        label: '查看订阅'
      },],
      value: '',
      tableData: [{
        id: '11/23/2024',
        name: '《Assassin\'s Creed》',
        category: '暗杀 潜入 动作',
        desc: '动作角色扮演（ARPG）',
        address: '上海市普陀区真北路',
        shop: 'EBIC官方商城购买',
        shopId: '78'
      }, {
        id: '3/21/2024',
        name: '《PUBG》',
        category: '沙盒，策略，战术，射击，竞技，团队，开放世界',
        desc: '竞技，团队合作，策略',
        address: '上海市普陀区真北路',
        shop: 'EBIC官方商城购买',
        shopId: '130'
      }, {
        id: '7/21/2024',
        name: '《极限竞速：地平线 5》',
        category: '赛车竞速、开放世界',
        desc: '赛车竞速、开放世界',
        address: '上海市普陀区真北路',
        shop: 'EBIC官方商城购买',
        shopId: '158'
      }, {
        id: '9/21/2025',
        name: '《Minecraft》',
        category: '生存，创造，冒险，极限，旁观',
        desc: '沙盒，创造，生存',
        address: '上海市普陀区真北路',
        shop: 'EBIC官方商城购买',
        shopId: '119'
      }]
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


.a2{
  color: white;
  text-align: center;
  font-size: 16px;
}
.a2 a{
  text-decoration: none;
  color: #f50202;
}

.input{
  float: right;
}

.biao{
  margin: 20px 0 0 0;
}
.demo-table-expand {
  font-size: 0;
  padding:  0 0 0 60px;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}



</style>
