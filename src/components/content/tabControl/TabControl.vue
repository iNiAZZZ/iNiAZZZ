<template>
<div class="tab-control">
  <div v-for="(item, index) in title" class="tab-control-item" :class="{active:index == currentIndex}"
       @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex:0
    }
  },

  props:{
    title:{
      type:Array,
      default:[]
      }
},
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('itemClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  z-index: 8;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: var(--color-high-text);

}
.tab-control-item span{
  padding: 5px;
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>
