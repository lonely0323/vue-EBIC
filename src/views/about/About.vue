<template>
  <div class="about">
	  <headtow/>
	  <div class="about_main">
		  <img class="icon" :src="icon">
		<div class="shop"><shopping/></div>
	 </div>
    <pro/>
	<vfoot/>
  </div>
</template>
<script>
	import headtow from '../../components/headTow/headTow.vue'
	import vfoot from '@/components/footer/footer.vue'
	import pro from './Product_info.vue'
	import shopping from './shopping.vue'
	export default{
		name:'About',
		components:{
			headtow,
			shopping,
			pro,
			vfoot
		},
		data(){
			return {
				icon:'https://img1.baidu.com/it/u=4199885165,302507773&fm=26&fmt=auto',
				bgimg:''
			}
		}
	}
</script>
<style scoped>
.about{
	background-color: #585757;
}



.about_main{
	background-image:url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0147245951c445a8012193a304f8d0.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639292720&t=779fe085dc846072c65a244c32a775ed') ;
	transform: translate3d(0px, 0px, 0px);
	position: relative;
	box-shadow: inset 0 -30px 60px rgba(0,0,0,.3);
	width: 100%;
	height: 600px;
	display: block;
}
.about_main .shop{
	position: absolute;
	 right: 190px;
	  top: 290px;
}
.about_main .icon{
	position: absolute;
	height: 160px;
	width: 250px;
	top: 100px;
	right: 265px;
}
.el-tabs__nav{
	margin-left: 15px;
}
</style>
