<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物项目app</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <div>
        <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
      </div>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" @itemClick="tabClick"
                   class="top-control"></tab-control>
      <goods-list :goods="showgoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isshow"/>
  </div>
</template>

<script>
import {getHomeMultidata} from "@/network/home";
import {getHomeGoods} from "@/network/home";
import HomeSwiper from "@/views/Home/childComps/HomeSwiper";
import RecommendView from "@/views/Home/childComps/RecommendView";
import FeatureView from "@/views/Home/childComps/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "@/components/common/navbar/NavBar";
import BackTop from "@/components/content/packtop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";
export default {
name: "home",
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isshow:false
    }
  },
  components:{
    HomeSwiper,
    NavBar,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  },
  created() {
  getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list;
    this.recommends=res.data.recommend.list;
  })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
  getHomeGoods(type){
    const page=this.goods[type].page+1
    getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1
    })
  },
    tabClick(index){
      console.log(index);
      switch (index){
        case 0:
          this.currentType='pop';
          break
        case 1:
          this.currentType='new';
          break
        case 2:
          this.currentType='sell';
          break
      }
    },
    backclick(){
      console.log('backclick');
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isshow = (-position.y)>1000
    }
  }

}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9
}
.top-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;

 }
</style>
