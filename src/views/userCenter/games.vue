<template>
  <div class="w">
    <h1>游戏&充值</h1>
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
  data(){
    return{
      sort: { width: '590px' },
      long: { width: '1210px' },
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
  components:{
    cardDiv,
    GameIcon
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
</style>
