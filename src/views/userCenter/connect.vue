<template >
  <div class="w">
    <h1>连接</h1>
    <cardDiv text=账户 :width="long" >
      <el-row>
        <div class="nav-1">
          使用以下选项卡来管理应用许可和绑定账户查看
          <a>隐私政策.</a>
        </div>
        <el-divider></el-divider>
        <div class="nav-2">
          您可选择将自己的 EBIC Games 账户与第三方应用程序链接。您可随时撤销第三方访问您数据的权限。您的密码和付款详细信息决不会被透露给第三方应用程序。
        </div>

        <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
        >
          <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
          </el-table-column>

          <el-table-column
              prop="address"
              label="项目"
              :formatter="formatter">
          </el-table-column>
        </el-table>



      </el-row>
    </cardDiv>





  </div>
</template>

<script>
import cardDiv from "./cardDiv"
export default {
  name: "connect",
  props: {
    msg: String
  },
  data() {
    return {
      sort: {width: '590px'},
      long: {width: '1210px'},

      tableData: [{
        date: '2023-05-02',
        address: 'PC Building Simulator'
      }, {
        date: '2025-05-04',
        address: 'nba 2k22'
      }, {
        date: '2025-05-01',
        address: 'Frostpunk'
      }, {
        date: '2024-05-03',
        address: 'Europa Universalis IV'
      }]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
    },

    components: {
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
}
.nav-1{
  color: white;
}

.nav-1 a{
  color: #f60000;
}
.nav-2{
  padding: 20px 0 20px 0;
  color: white;
}
</style>
