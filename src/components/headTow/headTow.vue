<template>
  <nav class="navBorder"
       id="boxFixed"
       :class="{'is_fixed':isFixed}">
    <el-menu class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect2">

      <el-menu-item class="myicon"
                    index="1" @click="butlink('/')"></el-menu-item>

      <el-menu-item index="1"
                    @click="butlink('/')">
        <game-icon class="iconMargin"
                   :size="4"
                   :type="3"></game-icon>
        商城
      </el-menu-item>

      <popup v-bind:data="ListIcon"
             num="2"
             title="游戏" />
      <popup v-bind:data="server"
             num="3"
             title="服务" />




      <el-menu-item class="right"
                    index="5">
        <game-icon class="iconMargin"
                   :size="4"
                   :type="2"></game-icon> 心愿单
      </el-menu-item>

      <popup class="right"
             v-bind:data="ds"
             num="7"
             title="游戏E币" />



      <el-submenu :popper-append-to-body="false"
                  class="right"
                  index="5">
        <template slot="title" >
            {{sname}}
        </template>
        <el-menu-item class="popup">
          <el-button v-if='islogin'
                     class="login_but"
                     type="primary"
                     @click="butlink('/login')" :style="{ display: visibleLine }" >登陆</el-button>
          <div v-else>cc</div>
        </el-menu-item>
        <el-menu-item class="account" @click="butlink('/userCenter/overview')" :style="{ display: visibleSubmit }">
          <game-icon :size="3"
                     :type="0">
          </game-icon>
                  <a>账户</a>
        </el-menu-item>

        <el-menu-item class="register" @click="butlink('/register')" :style="{ display: visiblePublish }">
          <game-icon :size="3"
                     :type="0"></game-icon>
          <a>免费注册</a>
        </el-menu-item>

        <el-button class="tuichu" @click.prevent="logout" :style="{ display: visibleCancel }">
          <game-icon :size="3"
                     :type="0"></game-icon>
          <a>退出</a>
        </el-button>


      </el-submenu>

    </el-menu>



  </nav>

</template>

<script>

  import popup from './popup.vue'
  import GameIcon from '@/components/GameIcon/GameIcon'
  import { getHome } from '@/api'

  export default {
    data () {
      return {
        visibleCancel: '',   //显示
        visiblePublish: '',   //显示
        visibleSubmit: '',   //显示
        visibleLine: 'none',  //隐藏
        sname:localStorage.getItem('name'),
        isAuth:"",//是否保持登录状态
        activeIndex: '1',
        activeIndex4: '1',
        isFixed: false,
        islogin: true,
        // myServe: [],
        ListIcon: [
          {
            "GameName": "守望先锋",
            "icon": "...",
            "type": 0,
            "Jump": "#"
          },
          {
            "GameName": "魔兽世界",
            "icon": "...",
            "type": 1,
            "Jump": "#"
          },
          {
            "GameName": "英雄联盟",
            "icon": "...",
            "type": 2,
            "Jump": "#"
          },
          {
            "GameName": "绝地求生",
            "icon": "...",
            "type": 3,
            "Jump": "#"
          },
          {
            "GameName": "地下城与勇士",
            "icon": "...",
            "type": 4,
            "Jump": "#"
          },
          {
            "GameName": "CS:GO",
            "icon": "...",
            "type": 5,
            "Jump": "#"
          },
          {
            "GameName": "穿越火线",
            "icon": "...",
            "type": 7,
            "Jump": "#"
          },
          {
            "GameName": "元神",
            "icon": "...",
            "type": 8,
            "Jump": "#"
          }
        ],
        server: [{
          GameName: "EBIC昵称修改",
          type: 0,
          size: 4
        }, {
          GameName: "使用兑换码",
          type: 1,
          size: 4
        }],
        ds: [
          { GameName: "充值E币", type: 1, size: 4 },
          { GameName: "赠送E币", type: 5, size: 4 },
          { GameName: "兑换点卡", type: 6, size: 4 },
          { GameName: "充值历史", type: 7, size: 4 },
          { GameName: "EBIC游戏E币帮助", type: 8, size: 4 },
        ]
      };
    },
    created () {

    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },

    methods: {

      handleSelect2 (key, keyPath) {
        // console.log(key, keyPath);
      },
      butlink (path) {
        this.$router.push(path)
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#boxFixed').offsetTop;
        this.isFixed = scrollTop > offsetTop ? true : false;
      },
      //当点击退出按钮，将不保存登录状态
      logout:function()
      {
        this.isAuth="false";//修改登录状态
        localStorage.setItem('s',this.isAuth);
        this.$router.replace('/login');//页面跳转至登录页面
      },
      init (id,state,flag) {
        this.dataForm.id = id || 0
        //如果点详情
        if (flag === 1) {
          this.disable = true
          //如果已发布状态，显示按钮：下线
          if (state === 1) {
            this.visiblePublish = 'none'
            this.visibleSubmit = 'none'
            this.visibleLine = ''
            this.visibleCancel = 'none'
          }else {
            this.visiblePublish = 'none'
            this.visibleSubmit = 'none'
            this.visibleLine = 'none'
            this.visibleCancel = 'none'
          }
        }
      }




    },
    components: {
      popup,
      GameIcon,
    }
  }

</script>

<style>
  .route {
    text-decoration: none;
  }
  * {
    list-style: none;
    user-select: none;
  }
  .is_fixed {
    position: fixed;
    z-index: 10;
    top: 0;
  }
  .navBorder {
    z-index: 100;
    width: 100%;
    height: 70px;
  background: #808080;
  }

  .navBorder .right {
    position: relative;
    left: 770px;
  }
  .navBorder .el-menu-demo {
    width: 1610px;
    margin: auto;
  }

  .navBorder .myicon {
    background: url(../images/EBIC.png) no-repeat;
    background-size: 100% 100%;
    width: 180px;
    height: 70px;
    background-position: center;
  }


  .navBorder .el-menu.el-menu--horizontal.el-menu {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }


  .navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .navBorder .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
  }
  .navBorder .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border: none;
    color: #ffffff;
  }
  .navBorder .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
  .navBorder .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    color: #fff;
  }
  .navBorder .el-menu--horizontal .el-menu-item .is-active {
    border: none;
    color: #909399;
    min-width: 120px;
  }
  .navBorder .el-menu--popup {
    padding: 0px;
  }
  .navBorder .el-menu--horizontal .el-menu--popup .is-active:hover {
    color: #fff;
    background-color: rgba(58, 63, 74, 1);
  }
  .navBorder .el-submenu .el-menu-item {
    min-width: 120px;
  }
  .navBorder ul li {
    margin-left: 0px !important;
    display: block !important;
    text-align: left;
  }
  .navBorder
  .el-submenu
  .el-menu--horizontal
  .el-menu-item:not(.is-disabled):focus,
  .navBorder
  .el-submenu
  .el-menu--horizontal
  .el-menu-item:not(.is-disabled):hover {
    background-color: rgba(60, 66, 77, 1);
    border: 0px;
  }
  .navBorder .el-menu--horizontal > .el-menu-item.is-active {
    border: 0px;
  }
  .navBorder .iconMargin {
    padding-left: 5px;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    border-bottom: 0px;
    color: #ffffff;
  }
  .el-submenu__title i{
    color: #ffffff;
  }
  .navBorder .el-menu--horizontal>.el-menu-item{
    font-size: 18px;
    float: left;
    height: 70px;
    line-height: 70px;
    margin: 0;
    border-bottom: 2px;
    color: #ffffff;
  }
  .navBorder .el-menu--horizontal>.el-menu-item li{
    font-size: 20px;
  }


  navBorder .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    min-width: 130px;
  }


  .myhead .el-menu--horizontal .el-menu .el-menu-item,
  .navBorder .el-menu--horizontal .el-menu .el-submenu__title {
    margin: 0px;
    text-align: center;
    padding: 10px;
    height: auto;
    background-color: rgba(0, 0, 0, 0);
  }

  .navBorder .right .el-menu--popup-bottom-start {
    margin: 0px;
    padding: 0px;
    left: 0px;
    background-image: linear-gradient(rgba(35, 44, 59, 1), rgba(20, 24, 33, 1));
    border: 1px solid #2a2323;
    border-top: 0px;
  }

  .navBorder .el-menu--horizontal .el-menu .el-menu-item, .navBorder .el-menu--horizontal .el-menu .el-submenu__title {
    margin: 0px;
    padding: 10px;
    height: auto;
    background: #2a2323;
  }

  .navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .navBorder .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .navBorder .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: #409EFF;
    color: #f6f6f6;
  }
  .navBorder .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border: none;
    color: #ffffff;
  }
  .navBorder .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
  .navBorder .el-menu--horizontal > .el-submenu:hover .el-submenu__title {
    /*color: #fff;*/
  }
  .navBorder .el-menu--horizontal .el-menu-item .is-active {
    border: none;
    color: #909399;
    min-width: 120px;
  }

  .navBorder .el-menu--horizontal .el-menu--popup .is-active:hover {
    color: #fff;
    /*background-color: rgba(58, 63, 74, 1);*/
  }
  .navBorder .el-submenu .el-menu-item {
    min-width: 120px;
  }
  . ul li {
    margin-left: 0px !important;
    display: block !important;
    text-align: left;
  }

  .navBorder .el-menu--horizontal>.el-submenu .el-submenu__title {
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    border-bottom: 2px
    solid transparent;
    color: #ffffff;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color: #00aeff;
  }

  .tuichu{
    margin: 0px;
    padding: 10px;
    height: auto;
    background: #2a2323;
    border: 0px;
    min-width: 100%;
    color: #909399;
  }


  .tuichu:hover{
    background-color: rgba(60, 66, 77, 1);
    border: 0px;
  }
  .tuichu span{
    float: left;
  }

  .tuichu a{
    float: left;
    height: 19px;
    line-height: 19px;
    text-decoration: none;
  }



</style>
