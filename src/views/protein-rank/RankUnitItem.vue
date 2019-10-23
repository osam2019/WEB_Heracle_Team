<template>
  <el-row class="item-container">
    <el-col :span="3">
      <img :src="medalIcons[idx]">
    </el-col>
    <el-col :span="3">
      <img class="product-img" :src="product.img">
    </el-col>
    <el-col :span="3" class="product-info-container">
      <p>{{ product.brand }}</p>
      <p>{{ product.name }}</p>
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
<style>
.item-container {
}
.product-img {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.product-info-container {
}
</style>
