<template>
  <div>
    <p>총 성분 {{ components.all.length }} 개</p>
    <p>질병 주의 성분 {{ components.warn.length }} 개</p>
    <p>알러지 주의 성분 {{ components.allergy.length }} 개</p>
    <!-- <p class="title">
      <b>상품 성분</b>
    </p>-->
    <div class="allergy-container">
      <el-alert class="allergy-noti" title="우유" type="error" effect="dark" :closable="false" />
      <el-alert class="allergy-noti" title="대두" type="error" effect="dark" :closable="false" />
    </div>

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
.allergy-container {
  display: flex;
  margin: 10px 10px;
}
.allergy-noti {
  width: 100px;
  margin-left: 10px;
  display: table-cell;
  vertical-align: middle;
}
.title {
  color: black;
}
</style>
