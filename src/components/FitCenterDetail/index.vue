<template>
  <div>
    <el-carousel height="400px" type="card">
      <span v-if="focusCenter.imgs">
        <el-carousel-item v-for="item in focusCenter.imgs" :key="item">
          <img :src="item" style="width: 500px; height: auto;">
        </el-carousel-item>
      </span>
    </el-carousel>
    <p>{{ focusCenter.name }}</p>
    <p>{{ focusCenter.address }}</p>
    <el-rate v-model="focusCenter.grade" disabled show-score />
    <div class="reviews">
      <br>
      <p>리뷰</p>
      <div v-if="isEnable()" class="input-box">
        <el-input
          v-model="textarea"
          class="input"
          type="textarea"
          :autosize="{ minRows: 4}"
          placeholder="리뷰를 작성하세요..."
          maxlength="300"
          show-word-limit
        />
        <div class="reviews-form">
          <el-rate v-model="grade" />
          <el-button type="primary" round @click="onReviewSubmit">확인</el-button>
        </div>
      </div>
      <ul>
        <li v-for="r of focusCenter.reviews" :key="r.id" class="col-md-6">
          <CenterReviewItem :review="r" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CenterReviewItem from '@/components/CenterReviewItem'
import { mapState } from 'vuex'
export default {
  components: {
    CenterReviewItem
  },
  data() {
    return {
      textarea: '',
      grade: 0
    }
  },
  computed: {
    ...mapState({
      focusCenter: state => state.fitCenters.focusCenter
    })
  },
  methods: {
    isEnable() {
      const center = this.focusCenter
      if (!center.reviews) {
        return true
      }

      const username = this.$store.state.user.name

      return center.reviews.find(e => e.writer === username) === undefined
    },

    onReviewSubmit() {
      const user = this.$store.state.user

      if (this.textarea.length < 10) {
        this.$message({
          message: '본문이 10글자 이상이어야 합니다.',
          type: 'error',
          offset: 1000
        })
        return
      }

      if (this.grade < 1) {
        this.$message({
          message: '평점이 1점 이상이어야 합니다.',
          type: 'error',
          offset: 1000
        })
        return
      }

      this.$store.commit('ADD_CENTER_REVIEW', {
        user,
        text: this.textarea,
        grade: this.grade
      })

      this.$store.commit('UPDATE_FIT_CENTER', this.focusCenter)

      this.$message({
        message: '리뷰가 성공적으로 등록되었습니다!',
        type: 'success',
        offset: 1000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 80%;
  height: 100px;
  display: table;
}
.input-box {
  height: 100%;
}
.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reviews-form {
  display: flex;
}
</style>
