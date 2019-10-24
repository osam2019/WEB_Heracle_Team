<template>
  <div>
    <p>총 성분 {{ components.all.length }} 개</p>
    <p>질병 주의 성분 {{ components.warn.length }} 개</p>
    <p>알러지 주의 성분 {{ components.allergy.length }} 개</p>
    <!-- <p class="title">
      <b>상품 성분</b>
    </p>-->
    <div class="progress">
      <el-progress
        :percentage="(components.all.length / components.all.length + components.warn.length) * 100"
        status="success"
      />
      <el-progress :percentage="100" status="warning" />
      <el-progress
        :percentage="(components.allergy.length / components.all.length + components.warn.length) * 100"
        status="exception"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ['components']
}
</script>
<style scoped>
.title {
  color: black;
}
</style>
