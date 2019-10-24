<template>
  <div>
    <el-dialog
      v-if="dialogVisible"
      title="제품 리뷰 등록"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <ProductReviewAdd :product="product" :on-done="handleClose" :add-review="addReview" />
    </el-dialog>
    <el-row>
      <el-col class="product-info" :span="10">
        <img :src="product.img">
        <p class="brand-name">브랜드: {{ product.brand }}</p>
        <p class="product-name">
          <b>제품명: {{ product.name }}</b>
        </p>
        <hr>
        <div class="align-left">
          <p>
            <b class="title">평점</b>
          </p>
          <div class="flex">
            <el-rate v-model="product.rating" class="rate" disabled show-score />
            <p>{{ (product.reviews ? product.reviews.length : 0) }}개 후기가 남겨져있습니다.</p>
          </div>
        </div>
        <div class="align-left">
          <p class="title">
            <b>정가</b>
          </p>
          <p>{{ product.price }} 원</p>
        </div>
        <el-button class="full-btn" type="primary" @click="linkWithNewTab(product.buy_url)">구매하러 가기</el-button>
        <hr>
        <el-collapse v-model="activeNames">
          <el-collapse-item title="성분" name="1">
            <ProductComponent />
          </el-collapse-item>
          <el-collapse-item title="섭취 방법" name="2">
            <p>{{ product.eat_way }}</p>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col class="product-detail" :span="14">
        <ProductReviewList :reviews="product.reviews ? product.reviews : []" />
        <el-button type="primary" class="review-btn" @click="openAddReviewForm">리뷰 남기기</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProductReviewAdd from './ProductReviewAdd'
import ProductComponent from './ProductComponent'
import ProductReviewList from './ProductReviewList'

export default {
  components: {
    ProductReviewAdd,
    ProductComponent,
    ProductReviewList
  },
  props: ['product'],
  data() {
    return {
      dialogVisible: false,
      activeNames: ['1']
    }
  },
  methods: {
    handleClose(done) {
      this.dialogVisible = false
      done()
    },
    openAddReviewForm() {
      this.dialogVisible = true
    },
    addReview(review) {
      console.log(review)
      this.product.reviews.push(review)
    },
    linkWithNewTab(url) {
      console.log(url)
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: table;
}
.title {
  color: black;
  font-size: 18px;
}
.rate {
  margin-top: 10px;
}
.align-left {
  text-align: left;
}
.full-btn {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.product-info {
  padding: 20px;
  text-align: center;
  img {
    height: 250px;
  }
}
.brand-name {
}
.product-name {
  color: black;
}
.review_btn {
  width: auto;
  margin: 0 auto;
}
</style>
