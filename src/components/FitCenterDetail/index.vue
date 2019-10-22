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
      <ul>
        <li v-for="r of focusCenter.reviews" :key="r.id" class="col-md-6">
          <CenterReviewItem />
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
  mounted() {}
}
</script>

<style lang="scss" scoped>
.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
