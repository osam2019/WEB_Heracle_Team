<template>
  <div>
    <hr>
    <el-row>
      <el-col span="1">
        <img class="product-img" :src="product.img">
      </el-col>
      <el-col span="8">
        <p>{{ product.brand }}</p>
        <p class="product-name">
          <b>{{ product.name }}</b>
        </p>
      </el-col>
    </el-row>
    <hr>
    <div class="unit">
      <p class="title">
        <b>평점을 선택해주세요.</b>
      </p>
      <el-rate v-model="rate" class="rate" />
    </div>
    <hr>
    <div class="unit">
      <div class="ic-title">
        <img class="ic" :src="smiling">
        <p class="title">
          <b>좋았던 점</b>
        </p>
      </div>
      <el-input type="textarea" :rows="4" placeholder="좋았던 점을 입력해주세요(최소 10자 이상)" />
    </div>
    <div class="unit">
      <div>
        <img class="ic" :src="crying">
        <p class="title">
          <b>아쉬운 점</b>
        </p>
        <el-input type="textarea" :rows="4" placeholder="아쉬운 점을 입력해주세요(최소 10자 이상)" />
      </div>
    </div>
    <el-button class type="primary">제출하기</el-button>
  </div>
</template>
<script>
import Crying from '@/assets/image/crying.png'
import Smiling from '@/assets/image/smiling.png'

export default {
  props: ['product'],
  data() {
    return {
      rate: 3,
      smiling: Smiling,
      crying: Crying
    }
  },
  mounted() {
    console.log('fasdf')
  }
}
</script>
<style>
.ic-title {
  display: flex;
}
.ic {
  width: 30px;
  height: 30px;
}
.unit {
  margin-bottom: 20px;
}
.rate {
  size: 20px;
}
.title {
  color: black;
  font-size: 20px;
}
.product-img {
  width: 60px;
  height: 60px;
}
.product-name {
  color: black;
}
</style>
