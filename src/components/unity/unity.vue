<template>
    <div class="unity">
        <router-link to='/about'>
            <div class="game"
                 :style=" {backgroundImage: `url( ${item.bgImgUrl} )`}">
                <div class="conten-wrapper">
                    <game-icon class="game-icon"
                               :size=2
                               :type="item.iconType >= 0?item.iconType:9"></game-icon>
                    <p class="text">{{item.text}}</p>
                    <p class="price">{{item.price === 0?"免费":"￥"+item.price}}</p>
                  <p class="text-white">{{item.white}}</p>
                  <p class="text-Golden">{{item.Golden}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import GameIcon from '@/components/GameIcon/GameIcon'
    export default {
        name: 'unity',
        props: {
            item:{}
        },
        components: {
            GameIcon
        }
    }
</script>

<style scoped>


  .unity{
    height: 485px;
  }
    .game {
        height: 500px;
        width: 300px;
        margin-top: 15px;
        position: relative;
        z-index: 10;
        background-repeat: no-repeat;
        background-size: 100% 70%;
        transition: all 0.3s;
        cursor:pointer;
    }
    .game:hover {
        transform:scale(1.05);
    }
    .conten-wrapper {
        top: 285px;
        position: absolute;
        text-align: left;
        padding: 20px 0 0 0;
        width: 100%;
        height: 150px;
    }
    .conten-wrapper .text{
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 6px;
        text-align: center;
        color: #ff0000;
        background: yellow;
        margin: 0;
    }
    .conten-wrapper .text-Golden {

        color: #ff0000;
        font-size: 14px;
        margin-bottom: 6px;
        text-align: center;
        background: #ffbc00;
    }
    .conten-wrapper .text-white {

        color: #ffffff;
        font-size: 14px;
        margin-bottom: 6px;
        text-align: center;
       background: #ff0000;

    }
    .conten-wrapper .price {
      text-align: center;
        font-size: 16px;
        color: #ffffff;
      background: #ff0000;
    }
</style>
