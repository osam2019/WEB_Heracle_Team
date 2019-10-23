<template>
  <div>
    <el-row>
      <el-col :span="8">
        <img :src="product.img">
        <p>브랜드: {{ product.brand }}</p>
        <p>제품 명: {{ product.name }}</p>
        <el-rate v-model="product.rating" disabled show-score />
        <ProductComponent />
      </el-col>
      <el-col :span="16">
        <ProductReviewList />
        <ProductReviewInput />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProductComponent from './ProductComponent'
import ProductReviewList from './ProductReviewList'
import ProductReviewInput from './ProductReviewInput'

export default {
  components: {
    ProductComponent,
    ProductReviewList,
    ProductReviewInput
  },
  props: ['product']
}
</script>
