<template>
  <div>
    <el-carousel height="400px" type="card">
      <span v-if="focusCenter.imgs">
        <el-carousel-item v-for="item in focusCenter.imgs" :key="item">
          <img :src="item" style="width: 500px; height: auto;">
        </el-carousel-item>
      </span>
    </el-carousel>
    <FitCenterItem :center="focusCenter" />

    <div class="reviews">
      <h2>리뷰</h2>
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
      <hr>
      <ul>
        <li v-for="r of focusCenter.reviews" :key="r.id" class="col-md-6">
          <CenterReviewItem :review="r" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FitCenterItem from '@/components/FitCenterItem'
import CenterReviewItem from '@/components/CenterReviewItem'
import { mapState } from 'vuex'
import { ADD_CENTER_REVIEW_TO_FOCUS } from '@/store/mutations.type.js'

export default {
  components: {
    CenterReviewItem,
    FitCenterItem
  },
  data() {
    return {
      textarea: '',
      grade: 1
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

      this.$store.commit(ADD_CENTER_REVIEW_TO_FOCUS, {
        user,
        text: this.textarea,
        grade: this.grade
      })

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
.el-dialog {
  border-radius: 15px;
}
.input {
  width: 100%;
  height: 100px;
  display: table;
}
hr {
  border: 1px solid #f0f2f5;
}
.input-box {
  height: 100%;
}
.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reviews {
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .reviews-form {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.focus-container {
  .item-name {
    display: block;
    font-size: 35px;
    color: black;
    margin-bottom: 10px;
  }
  .item-address {
    display: block;
    color: #999999;
    margin-bottom: 5px;
  }
}
</style>
