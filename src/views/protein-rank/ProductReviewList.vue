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
        <div>
          <p>
            <b>{{ review.writer_name }}님의 리뷰</b>
            {{ review.writer_age }} 세
          </p>
          <p>{{ review.pros }}</p>
          <el-rate v-model="review.rating" disabled show-score />
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['reviews']
}
</script>
<style scoped>
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
</style>
