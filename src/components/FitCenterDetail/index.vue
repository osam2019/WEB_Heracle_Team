<template>
  <div>
    <el-carousel height="400px" type="card">
      <el-carousel-item v-for="item in focusCenter.imgs" :key="item">
        <img :src="item" style="width: 700px; height: auto;">
      </el-carousel-item>
    </el-carousel>
    <p>{{ focusCenter.name }}</p>
    <p>{{ focusCenter.address }}</p>
    <el-rate v-model="focusCenter.grade" disabled show-score />
    <div class="reviews">
      <br>
      <p>리뷰</p>
      <div>
        <form>
          <input class="input" placeholder="리뷰를 작성하세요...">'
          <div class="reviews-form">
            <el-rate />
            <button @click="onReviewSubmit">확인</button>
          </div>
        </form>
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
import { mapGetters } from 'vuex'
export default {
  components: {
    CenterReviewItem
  },
  computed: {
    ...mapGetters(['focusCenter'])
  },
  mounted() {},
  methods: {
    onReviewSubmit() {
      console.log('fasdf')
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 80%;
  height: 100px;
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
