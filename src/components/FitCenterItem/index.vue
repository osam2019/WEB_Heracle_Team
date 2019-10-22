<template>
  <div class="item">
    <p>{{ center.name }}</p>
    <p>{{ center.address }}</p>
    <el-rate v-model="center.grade" disabled show-score />
  </div>
</template>
<script>
export default {
  props: ['center']
}
</script>
<style scoped>
.item {
  margin: 10px;
  border: 1px solid black;
}
</style>
