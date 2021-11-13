<template>
	<div class="login">
    <img src="../../components/images/EBIC.png"  class="logo" alt="EBIC">
		<div class="from-login">
			<form>
				<div class="username"><input type="text" name="username" v-model.trim="name" placeholder="请输入用户名"/></div>
				<div class="pwd"><input type="password" name="password" v-model.trim="password" placeholder="密码"/></div>
				<div class="sub" ><el-button @click.prevent="handlelogin"  class="btn" type="primary">登录</el-button></div>
			</form>
		</div>
		<div class="party"><span> 或使用以下账号登录</span></div>
		<ul class="help-links">
			<li><a href="#" @click.prevent="handleregister">免费创建EBIC账号 </a></li>
			<li><a href="#">无法登录？</a></li>
			<li><a href="#">安全令重新同步 </a></li>
		</ul>



		<vfoot/>
	</div>
</template>

<script>
import vfoot from '@/components/footer/footer.vue'
import  Reg from '../../views/register/register.vue'



export default {
	name: 'login',
	data(){
		return {
      name:"",
      password:"",
      st:"false",//false为不保存登录
			}
		},
		methods:{
      handlelogin:function()
      {
        if(this.name===localStorage['name'] && this.password===localStorage['password'])
        {
          this.$router.replace('/');//如果输入的名字以及密码正确路由跳转至个人页面
        }
        else if(this.name==='')//名字为空
        {
          alert('用户名不为空');
        }
        else if(this.password==='')//密码为空
        {
          alert('密码不为空');
        }
        else{
          alert('账号不存在，请注册后登录');//查无此号
        }
      },
      handleregister:function()
      {
        this.$router.replace('/register')//点击注册按钮，跳转至注册页面
      },
      //点击保持登录状态触发handlesave
      handlesave:function(){
        this.st="true";//修改登录状态为true
        localStorage.setItem('s',this.st);
        console.log(localStorage.s);
      }

		},
		components:{
			vfoot,Reg
		},


};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.login {
	background: #585757;
	text-align: center;
}
.login .logo {
  width: 250px;
  height: 100px;
	margin-top: 55px;
	margin-bottom: 20px;
}
#footlogo{
	display:none;
}

.clearall {
	clear: both;
}
.username,.pwd{
	margin: 0 auto;
	width: 360px;
	height: 50px;
}
input{
	width: 360px;
	height: 40px;
	padding: 0 10px;
	font-size: 17px;
	line-height: 20px;
	height: 40px;
	border-color: rgba(255,255,255,0.5);
	background-color: rgba(0,0,0,0.5);
	color: rgba(255,255,255,0.7);
	border: 1px solid rgba(255,255,255,0.3);
}
.sub{
		margin: 0 auto;
		width: 360px;
}

.btn{
	width: 380px;
	height: 40px;
	font-size: 20px;
    color: #fff;
    border: 1px solid #10a1de;
    box-shadow: 0 0 rgba(0,0,0,0);
    border-radius: 0;
    transition: background-color .2s,box-shadow .2s,background-color .2s,border-color .2s,color .2s;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.15) inset;
}

.party{
		position: relative;
	    font-size: 13px;
	    color: rgba(255,255,255,.3);
	    text-transform: uppercase;
	    display: block;
	    overflow: hidden;
	    white-space: nowrap;
	    margin: 14px 0 20px;
}
.party span:before,.party span:after {
    content: "————————";
    height: 1px;
    background-color: #fff;
    background-color: rgba(255,255,255,.1);
    position: absolute;
    top: 50%;
}

.party span:before{
	left: 39%;
}
.party span:after{
	right: 38%;
}
.wyicon{
	margin-top: 20px;
	margin-bottom: 15px;
}

.help-links{
	list-style-type: none;
	margin: 10px 0;
}
.help-links li{
	line-height: 25px;
}
.help-links li a{
	font-size: 18px;
	color: #ffffff;
	transition: color .2s;
	text-decoration: none;
}

</style>
