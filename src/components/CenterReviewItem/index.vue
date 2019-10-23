<template>
  <div class="item">
    <span class="item-writer">{{ review.writer }}님 리뷰</span>
    <span class="item-contents">{{ review.contents }}</span>
    <el-rate v-model="review.grade" disabled show-score />
  </div>
</template>
<script>
export default {
  props: ['review']
}
</script>
<style lang="scss" scoped>
.item {
  border-bottom : 2px solid #f0f2f5;
  padding : 8px 0;
  span{
    margin-bottom : 7px;
  }
  .item-writer{
    display : block;
    font-weight: bold;
    font-size : 15px;
    color : #999999;
  }
  .item-contents{
    display : block;
    color : #000000;
  }
}

</style>
