<template>
  <div>
    <p class="title">
      <b>상품 리뷰</b>
    </p>
    <p v-if="!reviews.length" class="status-txt">
      <b>리뷰가 존재하지 않습니다.</b>
    </p>
    <ul>
      <li v-for="review of reviews" :key="review.pros" class="review-list">
        <div class="review-container">
          <p>
            <b>{{ review.writer_name }}님의 리뷰</b>
          </p>
          <p>{{ review.writer_age }} 세</p>
          <div class="img-contents item-space">
            <el-rate v-model="review.rating" disabled />
            <p>2019.03.17</p>
          </div>

          <div class="img-contents item-space">
            <img class="ic" :src="smiling">
            <p>{{ review.pros }}</p>
          </div>
          <div class="img-contents">
            <img class="ic" :src="crying">
            <p>{{ review.cons }}</p>
          </div>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script>
import Crying from '@/assets/image/crying.png'
import Smiling from '@/assets/image/smiling.png'

export default {
  props: ['reviews'],
  data() {
    return {
      smiling: Smiling,
      crying: Crying
    }
  }
}
</script>
<style lang="scss" scoped>
.review-container {
  margin-bottom: 10px;
}
.item-space {
  margin-bottom: 10px;
}
.img-contents {
  display: flex;
  height: auto;
}
.ic {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.title {
  color: black;
  font-size: 20px;
}
.review-list {
  list-style-type: none;
}
.status-txt {
  margin: 30px;
}
ul {
  padding: 0;
}
</style>
