<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll= new BScroll (this.$refs.wrapper,{
      probeType:this.probeType,
      observeDOM:true,
      click:true
      })
    this.scroll.on('scroll',(position)=>{
      console.log(position);
      this.$emit('scroll',position)
    })
    this.scroll.scrollTo(0,0)

  },
  methods:{
    scrollTo(x,y,time=500) {
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>

</style>
