<template>
  <div class="item">
    <span class="item-name">{{ center.name }}</span>
    <span class="item-address">{{ center.address }}</span>
    <el-rate v-model="center.grade" disabled show-score />
  </div>
</template>
<script>
export default {
  props: ['center']
}
</script>
<style lang="scss" scoped>
.item {
  background : white;
  border-bottom : 3px solid #f0f2f5;
  padding : 15px;
  &:hover{
    cursor : pointer;
  }
  
  span{
    display : block;
  }
  .item-name{
    font-size : 19px;
    color : black;

  }
  .item-address{
    color : #999999;
  }
}
</style>
