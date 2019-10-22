<template>
  <div class="item">
    <p>{{ review.writer }}님 리뷰</p>
    <p>{{ review.contents }}</p>
    <el-rate v-model="review.grade" disabled show-score />
  </div>
</template>
<script>
export default {
  props: ['review']
}
</script>
<style scoped>
.item {
  margin: 10px;
  border: 1px solid black;
}
</style>
