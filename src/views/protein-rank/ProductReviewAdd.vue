<template>
  <div>
    <hr>
    <div class="prduct-info-container">
      <span>
        <img class="product-img" :src="product.img">
      </span>
      <div class="wrapper">
        <span class="info-container">
          <p>{{ product.brand }}</p>
          <p class="product-name">
            <b>{{ product.name }}</b>
          </p>
        </span>
      </div>
    </div>
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
          <b>좋았던 점(최소 10자 이상)</b>
        </p>
      </div>
      <el-input v-model="pros" type="textarea" :rows="4" placeholder="좋았던 점을 입력해주세요" />
    </div>
    <div class="unit">
      <div class="ic-title">
        <img class="ic" :src="crying">
        <p class="title">
          <b>아쉬운 점(최소 10자 이상)</b>
        </p>
      </div>
      <el-input v-model="cons" type="textarea" :rows="4" placeholder="아쉬운 점을 입력해주세요" />
    </div>
    <el-button class type="primary" @click="onSubmit">제출하기</el-button>
  </div>
</template>
<script>
import Crying from '@/assets/image/crying.png'
import Smiling from '@/assets/image/smiling.png'

export default {
  props: ['product', 'onDone', 'addReview'],
  data() {
    return {
      pros: '',
      cons: '',
      rate: 3,
      smiling: Smiling,
      crying: Crying
    }
  },
  mounted() {
    console.log('fasdf')
  },
  methods: {
    onSubmit() {
      if (this.pros.length < 10) {
        this.$message({
          message: '좋았던 점이 10글자 이상이어야 합니다.',
          type: 'error',
          offset: 1000
        })
        return
      }

      if (this.cons.length < 10) {
        this.$message({
          message: '아쉬운 점이 10글자 이상이어야 합니다.',
          type: 'error',
          offset: 1000
        })
        return
      }

      this.$message({
        message: '리뷰가 성공적으로 등록되었습니다!',
        type: 'success',
        offset: 1000
      })

      this.addReview({
        writer_name: this.$store.state.user.name,
        writer_age: 20,
        pros: this.pros,
        cons: this.cons,
        rating: this.rate
      })
      this.onDone()
    }
  }
}
</script>
<style scoped>
.ic-title {
  height: auto;
  display: flex;
}
.ic {
  width: 30px;
  height: 30px;
  margin-right: 10px;
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

.wrapper {
  margin-left: 30px;
  display: table;
}

.product-img {
  width: 100px;
  height: 100px;
}

.product-name {
  color: black;
}

.prduct-info-container {
  padding: 10px;
  display: flex;
}

.info-container {
  text-align: center;
  vertical-align: middle;
}
</style>
