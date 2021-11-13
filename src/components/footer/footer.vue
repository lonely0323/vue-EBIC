<template>
	<div id="footer">
		<img id="footlogo" :src="logo" height="100" width="170"/>
		<div class="footnav mtbt20">
			<ul>
				<li><a href="#">加入我们</a></li>
				<li>|</li>
				<li><a href="#">关于EBIC</a></li>
				<li>|</li>
				<li><a href="#">支持EBIC</a></li>
				<li>|</li>
				<li><a href="#">EBIC引擎</a></li>
				<li>|</li>
				<li><a href="#">安全中心</a></li>
			</ul>
		</div>
		<div class="clearall"></div>
		<div class="copyright">
			<p>@2024 EBIC 有限公司版权所有。</p>
			<p>

				<a href="#">在此提及的其他所有 商标 均是其各自所有人的财产。</a>

			</p>
			<p>由EBIC游戏工作室运营。</p>
		</div>

		<div class="clearall"></div>
		<div class="addrsnum">
			<ul class="work">
				<li><a href="#">湘网文〔2017〕9633-727号</a></li>
				<li>|</li>
				<li><a href="#">电信业务经营许可证编号：湘B2－20080012</a></li>
				<li>|</li>
				<li><a href="#">湘ICP备: 湘B2－20080012</a></li>
			</ul>
		</div>
		<div class="clearall"></div>
		<div class="report">
			<ul>
				<li><p>互联网违法和不良信息举报电话：0571-28090163</p></li>
				<li><p>湘公网安备：31011502002167</p></li>
				<li><p>网上有害信息专区</p></li>
			</ul>
		</div>
		<div class="addr">
			<ul>
				<li><a href="#">适龄提示：适合18岁及以上使用 家长监护工程</a></li>
				<li>|</li>
				<li><a href="#">湖南省网络游戏行业自律公约</a></li>
			</ul>
		</div>
		<div class="addr">
			<ul>
				<li><p>湖南省长沙市岳麓区含浦街道1123号8号楼201-A</p></li>
				<li>|</li>
				<li><p>客服电话：0571-2823451</p></li>
			</ul>
		</div>
    <div class="mtbt10">
      <ul>
        <li><p><a href="#">隐私</a></p></li>
        <li><p>|</p></li>
        <li><p><a href="#">法律</a></p></li>
        <li><p>|</p></li>
        <li><p><a href="#">备案</a></p></li>
      </ul>
    </div>
		<div class="footicon mtbt10" >
			<a href="#" v-for="(isrc,key) in imgsrc" :key="key"><img :src="isrc" /></a>
		</div>
		<div class="add">
				<p>健康游戏忠告：抵制不良游戏  拒绝盗版游戏  注意自我保护  谨防受骗上当</p>
				<p>适度游戏益脑  沉迷游戏伤身  合理安排时间  享受健康生活</p>
		</div>


	</div>
</template>



<script>
	export default {
		name: "v-footer",
		data(){
			return {
				imgsrc:['http://localhost:8080/img/ia_200000055.b0fbfaad.svg',
				        'http://localhost:8080/img/ia_200000060.a76a236b.svg',
                'http://localhost:8080/img/ia_200000056.6bf45751.svg',
                'http://localhost:8080/img/ia_200000057.826cfef5.svg',
			          'http://localhost:8080/img/ia_200000058.bc1d1412.svg',
                'http://localhost:8080/img/ia_200000059.6d92ab92.svg',
                '\thttp://localhost:8080/img/ia_200000061.dbaeceb3.svg'
        ],
        logo:'https://z3.ax1x.com/2021/11/04/ImNaiq.png'
			}
		}
	}
</script>

<style scoped>
.clearall {
	clear: both;
}
#footer{

	text-align: center;
	margin-top: 100px;

}
#footlogo{
  background: url("../../components/images/EBIC.png");
  width: 140px;
  height: 120px;
}
p,
a {
	font-family: Blizzard, Arial, Helvetica, 'Segoe UI Symbol', 'Segoe MDL2 Assets', '微软雅黑', 'Microsoft YaHei', 'Hei SC', sans-serif;
	transition: color 0.2s, background-color 0.2s, border-color 0.2s;
	text-transform: uppercase;
}
p {
	margin-block-start: 0;
	margin-block-end: 0;
	font-size: 13px;
	color: rgba(255,255,255,0.3) ;
}
a {
	color: rgba(255,255,255,0.7) ;
	text-decoration: none;
	font-size: 14px;
}

.foot {
	width: 100%;
	margin: 0 auto;
	text-align: center;
	font-weight: 400;
	line-height: 1.4;
	color: #fff;
}
.el-breadcrumb {
	margin: 0 auto;
	width: 700px;
}

#footer ul {
	margin: 0 auto;
	text-align: center;
}
#footer ul li {
	margin-left: 10px;
	display: inline-block;
	list-style-type: none;
  color: #eeeeee;
}
#footer .footnav ul li a{
	font-size: 17px;
	transition: color 0.2s, background-color 0.2s, border-color 0.2s;
	text-transform: uppercase;
}
#footer ul li a:hover {
	color: #ffffff;
}
.copyright {
	color: rgb(79, 104, 134);
}
.mtbt5 {
	margin-top: 5px;
	margin-bottom: 5px;
}
.mtbt10 {
	margin-top: 10px;
	margin-bottom: 10px;
}
.mtbt20 {
	margin-top: 20px;
	margin-bottom: 20px;
}
.footicon a img{
	width: 26px;
	height: 26px;
	margin: 0 5px;
	vertical-align: top;
}
.add{
	padding-bottom: 30px;
}
</style>
