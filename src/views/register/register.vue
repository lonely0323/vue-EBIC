<template>
	<div class="reg">
		<img class="logo" :src="logo" />
		<div class="title">
			<h1>创建账号</h1>
			<button class="wy">EBIC</button>
			<div class="party"><span>或</span></div>
			<div class="tip"><p>创建EBIC游戏通行证，开启您的冒险旅程。</p></div>
		</div>
		<div class="clearall"></div>
		<form class="from-reg">
			<input type="ID" v-model.trim="ID" @click="checkedid(checkid)" v-model="userid" placeholder="身份证号码" maxlength="18"  />
			<br />

			<input type="text" v-model.trim="text" v-model="username" placeholder="姓名" />
			<br />
			<input type="email" v-model.trim="email" v-model="useremail" placeholder="电子邮箱" />
			<br />
			<input type="password"  v-model.trim="password" @click="checkedpwd(checkpwd)" v-model="userpwd" placeholder="密码" />



      <div class="capt">
        <input class="cap1" type="name" v-model.trim="name" v-model="captcha" placeholder="昵称" />
      </div>

			<div class="phone_num">
				<input class="phone1" type="text"  disabled placeholder="+86" />
				<input class="phone2" @click="checkednum(chenum)" type="Telephone"  v-model.trim="Telephone"  v-model="phone_num" placeholder="手机号码" />
			</div>



			<div class="hread">
				<div class="tip" >
					<el-checkbox>
            <p>我已阅读并接受</p></el-checkbox>
					<a :href="hrlink">
						隐私政策
						<i class="el-icon-link"></i>
					</a>
				</div>
			</div>
			<div class="clearall"></div>
			<div class="from-btn">

        <el-row class="btn1">
          <el-button type="primary"  @click.prevent="handlefinish">注册EBIC账号</el-button>
        </el-row>
        <el-row class="btn2">
          <el-button type="info" @click.prevent="Tologin" >已经有账号了？那就登录吧</el-button>
        </el-row>


			</div>
			<div class="fine-print">
				<p>
					点击“免费注册EBIC账号”即表示我同意并接受
					<a target="_blank" :href="hrlink">
						EBIC用户许可协议
						<i class="el-icon-link"></i>
					</a>
					。
				</p>
			</div>
		</form>
	</div>
</template>

<script>
import Login from "@/views/login/login";

export default {
	name: 'register',
  props: {
    msg: String
  },
	data() {
		return {
      input: '',
			logo: '',
			hrlink: '#',
			userid: '',
			username: '',
			useremail: '',
			userpwd: '',
			phone_num: '',
			captcha: '',
			checkid: false,
			checkpwd: false,
			chenum: false,
      ID:'',
      text:'',
      email:'',
      password:'',
      name:'',
      Telephone:'',
		};
	},
	methods: {
		checkedid: function(che) {
			return (this.checkid = !che);
		},
		checkedpwd: function(che) {
			return (this.checkpwd = !che);
		},
		checkednum: function(che) {
			return (this.chenum = !che);
		},
    //点击完成按钮触发handlefinish
    handlefinish:function()
    {
      if(localStorage['name']===this.name)
      {
        alert("用户名已存在");//如果用户名已存在则无法注册
      }
      else if(this.name==='')
      {
        alert("用户名不能为空");
      }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('ID',this.ID);
        localStorage.setItem('text',this.text);
        localStorage.setItem('email',this.email);
        localStorage.setItem('password',this.password);
        localStorage.setItem('name',this.name);
        localStorage.setItem('Telephone',this.Telephone);
        localStorage.setItem('s',"false");
        alert("注册成功");
        this.$router.replace('/Login');//完成注册后跳转至登录页面
      }
    },
    Tologin:function (){
      this.$router.push('/Login')
    }
  }
};



</script>

<style scoped>
.reg {
	background: #565656;
	background-attachment: fixed;
	text-align: center;
}
.reg .logo {
	margin-top: 55px;
	margin-bottom: 40px;
}
.reg h1 {
	font-weight: 300;
	font-size: 35px;
	line-height: 40px;
	color: #fff;
	margin-bottom: 28px;
}
a {
	text-decoration: none;
}
.title,
.hread {
	max-width: 500px;
	margin: 20px auto;
}
.clearall {
	clear: both;
}
.wy {
	color: #ffffff;
	width: 450px;
	height: 30px;
	background-color: rgb(193, 41, 46);
	border: 1px solid #f22a2f;
	white-space: nowrap;
	font-size: 15px;
	line-height: 20px;
}

.party {
	position: relative;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.3);
	text-transform: uppercase;
	display: block;
	overflow: hidden;
	white-space: nowrap;
	margin: 20px 0 20px;
}
.party span:before,
.party span:after {
	content: '————————————————';
	height: 1px;
	background-color: #fff;
	background-color: rgba(255, 255, 255, 0.1);
	position: absolute;
	top: 50%;
}
.party span:before {
	left: 0%;
}
.party span:after {
	right: 0%;
}

.tip {
	color: rgba(255, 255, 255, 0.8);
	/*float: left;*/
  text-align: center;
	margin-left: 10px;
	font-size: 17px;
	line-height: 25px;
	margin-bottom: 10px;
}
.tip p{
  color: #9ef320;
}


.from-reg input {
	width: 500px;
	display: inline-block;
	vertical-align: middle;
	height: 34px;
	padding: 0 10px;
	margin-top: 20px;
	margin-bottom: 3px;
	font-size: 15px;
	line-height: 20px;
	border: 1px solid rgba(255, 255, 255, 0.3);
	background-color: rgba(0, 0, 0, 0.5);
	color: rgba(255, 255, 255, 0.7);
	box-sizing: border-box;
	border-radius: 2px;
}
.phone_num .phone1 {
	width: 70px;
}
.phone_num .phone2 {
	width: 430px;
}
.capt .cap1 {
	width: 500px;
}
.capt .cap2 {
	width: 500px;
	margin-left: 5px;
	border: 1px solid #0d639f;
}
.cap2:hover,
.from-btn .btn2 {
	background-color: rgba(0, 0, 0, 0.4);
	color: #91e4ff;
	border-color: #0e86ca;
	box-shadow: 0 0 rgba(0, 0, 0, 0);
}
.hread .tip a,.cbox a {
	color: rgb(0, 174, 255);
}
.el-checkbox__label {
	font-size: 17px;
}
.from-btn .btn1,
.from-btn .btn2 {
  text-align: center;
  width: 400px;
	margin: 20px 700px 20px 770px ;
	display: block;
	font-size: 17px;
  background: #909399;
}
.from-btn .btn1 {
	background-color: #409eff;
	color: rgba(255, 255, 255, 0.7);
	border: 1px solid rgb(16, 161, 222);
	box-sizing: border-box;
	border-radius: 2px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}
.from-btn .btn1 .el-button--primary{
  width: 400px;
}
.from-btn .btn2 .el-button--info{
  width: 400px;
}

.fine-print {
	color: rgba(255, 255, 255, 0.8);
	font-size: 17px;
	line-height: 25px;
	max-width: 500px;
	margin: 0 auto;
	min-height: 80px;
}
.fine-print a {
	color: rgb(0, 174, 255);
}

.cout {
	z-index: 100;
	width: 500px;
	height: auto;
	padding: 1px;
	margin: 10px auto;
	background-color: #272e3b;
	border: 1px solid #3d434f;
	background-clip: padding-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.75);
	color: rgba(255, 255, 255, 0.6);
}
.cout ul li {
	list-style-type: none;
	text-align: left;
	margin-left: 20px;
	padding: 10px;
}

.arrow {
	position: relative;
	display: block;
	height: 2px;
	width: 2px;
	border-width: 8px;
	z-index: 0;
	left: 50%;
	top: -20px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0);
	margin-left: -8px;
	border-bottom-color: #3d434f;
}

.arrow:after {
	top: 1px;
	margin-left: -7px;
	border-bottom-color: #272e3b;
}
.cbox {
	width: 496px;
	height: 40px;
	text-align: left;
	margin-left: 20px;
}
.cbox p {
	margin: 0 0 30px 0;
	line-height: 25px;
}
</style>
