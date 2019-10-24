<template>
  <el-row class="item-container">
    <el-col :span="4">
      <img class="medal-img" :src="medalIcons[idx]">
    </el-col>
    <el-col class="product-img-container" :span="10">
      <img class="product-img" :src="product.img">
    </el-col>
    <el-col :span="10" class="product-info-container">
      <p>{{ product.brand }}</p>
      <p class="product-name">
        <b>{{ product.name }}</b>
      </p>
    </el-col>
  </el-row>
</template>
<script>
import MedalFirst from '@/assets/image/medal-first.png'
import MedalSecond from '@/assets/image/medal-second.png'
import MedalThird from '@/assets/image/medal-third.png'

export default {
  props: ['product', 'idx'],
  data() {
    return {
      medalIcons: [MedalFirst, MedalSecond, MedalThird]
    }
  }
}
</script>
<style lang="scss" scoped>
.medal-img {
  width: 50px;
  height: 50px;
}
.product-name {
  color: black;
}
.item-container {
  padding: 10px;
  border-bottom: 2px solid #d7e3f5;
  &:hover {
    cursor: pointer;
  }
}
// .item-container:first-of-type{
//     border-top : 2px solid #d7e3f5;
//   }
.product-img-container {
  text-align: center;
  .product-img {
    width: auto;
    height: 100px;
  }
}

.product-info-container {
}
</style>
