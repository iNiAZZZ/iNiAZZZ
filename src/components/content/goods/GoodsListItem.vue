<template>
<div class="goods-item">
  <img :src="goodsItem.show.img">
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodsItem",
  props:{
    goodsItem:{
      type:Object,
      default:[]
    }
  }
}
</script>

<style scoped>
.goods-item{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 10px;
}
.goods-info{
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;

}
.goods-info p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("");
}
</style>
