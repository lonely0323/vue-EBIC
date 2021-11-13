<template>
	<div>
		<div class="product_media">
			<video :src="videourl" controls="controls"></video>
			<div class="left_media">
				<div class="product_title " ><h2>Hello, I'm VaMin, the planner of EBIC mall
          Here is my message to you!</h2></div><br>
				<p>Thank you for supporting EBIC. Of course, our purpose of the game is to establish free games for you, but we can't communicate clearly with businesses. Of course, we will strive to make all games free as soon as possible. Sorry! So wait for us to go online! thank you!

        </p>
			</div>

			<div class="right_media">
				<ul>
					<li><p>需要互联网连接</p></li>
					<li><a href="#">需要 EBIC 游戏通行证<i class="el-icon-link"></i></a></li>
					<li><a href="#">配置要求</a></li>
					<li><a href="#">商品详情</a></li>
				</ul>
			</div>
		</div>

		<div class="product-feature clearall">
			<div class="product_title"><h2>查看你想要的游戏</h2></div>
			<div class="product_box">
				<div  class="product_imgs" v-for="(featur,index) in featurs" :key='index'>
					<img  class="product_img" :src="featur.fimgurl">
					<h5>{{featur.ftitle}}</h5>
					<p>{{featur.description}}</p>
				</div>
			</div>
		</div>
		<div class="product_config clearall">
			<div class="product_title"><h2>配置要求</h2></div>
			<div class="tabs">
				<el-tabs v-model="activename">
					<el-tab-pane :name="system" v-for="(system,index) in systems" :key='index'>
						<span slot="label" style="color: #FFF0FF; font-size: 16px;">
							<i class="el-icon-date"></i>
							{{system}}
						</span>
						<div class="left_win">
							<h3>{{system}}最低配置</h3>
							<div class="left_box" v-for="(citem, cindex) in win_min_config" :key="cindex">
								<div class="left_tit">{{ citem.claim }}</div>
								<p>{{ citem.cinfo }}</p>
							</div>
						</div>
						<div class="right_win">
							<h3>{{system}}推荐配置</h3>
							<div class="right_box" v-for="(ritem, rindex) in win_rec_config" :key="rindex">
								<div class="right_tit">{{ ritem.rlaim }}</div>
								<p>{{ ritem.rinfo }}</p>
							</div>
						</div>
					</el-tab-pane>

				</el-tabs>
			</div>
		</div>
		<div class="product_info clearall">
			<div class="product_data">
				<div class="product_title"><h2>商品详情</h2></div>
				<div class="product_container">
					<div class="grid-content" v-for="(item, index) in htitle" :key="index">
						<h3>{{ item.title }}</h3>
						<p v-for="(info, key) in item.infos" :key="key">
							<i style="float: left;margin-right: 10px;" v-if="item.title != '类型'">•</i>
							{{ info }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="product_foot">
			<div class="letf_ft"></div>
			<div class="right_ft">
				<div class="pane">
					<p><a href="#">未成年人游戏时间保护</a></p>
				</div>
				<div><p>请注意：交易过程中如发生支付问题或拒付，您的《EBIC》账号将暂时被停用，直到此支付问题完全解决、或重新支付款项之后才能恢复正常使用。</p></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product_info',
	data() {
		return {
			videourl:'https://media.st.dl.pinyuncloud.com/steam/apps/256856452/movie480_vp9.webm?t=1634653465',
			activename: 'Windows',
			htitle: [
				{
					title: '类型',
					infos: ['游戏']
				},
				{
					title: '支持语言',
					infos: ['简体中文', '繁体中文']
				},
				{
					title: '商品要求',
					infos: ['需要互联网连接']
				},
				{
					title: '平台',
					infos: ['Windows', 'iOS', 'Android']
				},
				{
					title: '可使用的地区',
					infos: ['中国']
				}
			],
			win_min_config: [
				{
					claim: '操作系统',
					cinfo: 'Windows® 7/Windows® 10 /Windows® 11'
				},
				{
					claim: '处理器',
					cinfo: 'Intel® Pentium® D 或 AMD® Athlon™ 64 X2'
				},
				{
					claim: '显卡',
					cinfo: 'NVIDIA® GeForce® 8600 GT 或 ATI™ Radeon™ HD 2600XT 或更高'
				},
				{
					claim: '内存',
					cinfo: '8 GB '
				},
				{
					claim: '储存空间',
					cinfo: '34 GB 可用硬盘空间'
				},
				{
					claim: '网络',
					cinfo: '宽带网络'
				},
				{
					claim: '分辨率',
					cinfo: '最低 1920 x 1080'
				}
			],
			win_rec_config: [
				{
					rlaim: '操作系统',
					rinfo: 'Windows® 10 60-bit'
				},
				{
					rlaim: '处理器',
					rinfo: 'Intel Core™ 2 Duo (4.2 GHz) 或 AMD Athlon 64 X2 (3.6 GHz) 或更高'
				},
				{
					rlaim: '显卡',
					rinfo: 'NVIDIA® GTX 1050Ti® 240GT 或 ATI™Radeon™ HD 4850 或更高'
				},
				{
					rlaim: '内存',
					rinfo: '8 GB '
				},
				{
					rlaim: '储存空间',
					rinfo: '107 GB 可用硬盘空间'
				},
				{
					rlaim: '网络',
					rinfo: '宽带网络'
				},
				{
					rlaim: '分辨率',
					rinfo: '最低 1920 x 1080'
				}
			],
			featurs: [
				{
				fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
				ftitle:'敬请期待！',
				description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
				},
        {
          fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
          ftitle:'敬请期待！',
          description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
        },
        {
          fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
          ftitle:'敬请期待！',
          description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
        },
        {
          fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
          ftitle:'敬请期待！',
          description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
        },
        {
          fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
          ftitle:'敬请期待！',
          description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
        },
        {
          fimgurl:'\thttps://img2.baidu.com/it/u=1901928529,4148199522&fm=26&fmt=auto',
          ftitle:'敬请期待！',
          description:'《EBIC》平台还没又正式上线，请大家耐心等待，而且具有极其平易近人的游戏性，支持Windows、Mac和Ipad平台。'
        }
				],
			systems: ['Windows','iOS','Android']
		};

	}
};
</script>

<style scoped>
.clearall::after{
	content: "";
	display: block;
	clear: both;
}
.product_media,
.product-feature,
.product_info,
.product_config {
	position: relative;
	display: block;
	height: 430px;
	padding-top: 60px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	color: rgba(255, 255, 255, 0.8);
	min-width: 1600px;
	padding-bottom: 50px;
}
.product_config , .product-feature{
	height: auto;
}
.product-feature .product_imgs{
	width: 360px;
	float: left;
	min-height: 1px;
	box-shadow: 5px 5px 10px rgba(0,0,0,.3);
	margin-bottom: 20px;
	margin-left: 35px;
	margin-right: 15px;
}
.product_media video{
	margin-left: 190px;
	width: 400px;
	height: 300px;
	margin-bottom: 40px;
}
.product_media .left_media{
	width: 1150px;
}
.product_media .left_media p{
	margin-left: 190px;
}
.product_media .right_media{
	position: absolute;
	top:80px;
	right: 500px;
	font-size: 12.8px;
	font-weight: 400;
	color: rgba(255,255,255,0.5);
}
.right_media ul li{
	margin-bottom: 10px;
}
.right_media ul li a{
	text-decoration: none;
	 transition: color .3s;
	 color: rgb(0, 174, 255);
}


.product-feature .product_box{
	font-size: 16px;
	margin-left: 560px;
	font-weight: 400;
	font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.product_box .product_imgs p{
	margin-top: 10px;
	margin-bottom: 20px;
}
.product_box .product_imgs h5{
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 400;
}
.product_imgs .product_img{
	width: 360px;
	height: 200px;
}

.product_title h2 {
	color: #f8f9fa;
	font-size: 28px;
	font-weight: 300;
}

.product_title {
	padding-left: 190px;
}

.product_container {
	float: right;
	min-width: 1300px;
	width: 100px;
	padding-left: 20px;
}

.product_container h3 {
	color: rgba(255, 255, 255, 0.8);
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 10px;
}
.product_container .grid-content {
	float: left;
	min-width: 300px;
	width: 300px;
	height: 90px;
}
.product_container .grid-content p {
	font-size: 14px;
	font-weight: 400;
	line-height: 25px;
}
.product_foot {
	margin-top: 20px;
	height: 80px;
}

.letf_ft {
	min-width: 600px;
	height: 60px;
	float: left;
}
.right_ft a {
	text-decoration: none;
	color: #00aeff;
  font-size: 20px;
}
.right_ft p {
	margin-top: 10px;
	font-size: 14px;
	color: #ffffff;
}
.tabs {
	margin-left: 600px;
	font-size: 14px;

}
.el-tab-pane span {
	color: #ffffff;
	font-size: 16px;
}
.tabs .left_win {
	float: left;
	width: 50%;
}
.left_tit {
	margin-top: 5px;
	color: rgba(255,255,255,.7);
}
.left_box,
.right_box {
	width: 285px;
	padding-top: 10px;
	padding-right: 40px;
	float: left;
}
</style>
