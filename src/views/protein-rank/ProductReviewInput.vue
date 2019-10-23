<template>
  <el-row>
    <el-col :span="20">
      <el-input v-model="review" placeholder="리뷰를 남겨보세요" />
    </el-col>
    <el-col span>
      <el-button type="primary">확인</el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      review: ''
    }
  }
}
</script>
