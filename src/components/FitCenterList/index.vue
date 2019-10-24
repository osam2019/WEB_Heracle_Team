<template>
  <div class="fit-center-list">
    <div class="input">
      <form>
        <gmap-autocomplete placeholder="주소 검색" @place_changed="setPlace" />
      </form>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>추천 헬스장</span>
      </div>
      <div v-for="o in 3" :key="o" class="text item" @click="onCenterItemClicked(centers[o])">
        <FitCenterItem :center="centers[o]" />
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>주변 헬스장</span>
      </div>
      <div class="container">
        <ul class="fit-list">
          <li
            v-for="center of centers"
            :key="center.id"
            class="col-md-6"
            @click="onCenterItemClicked(center)"
          >
            <FitCenterItem :center="center" />
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { FETCH_CENTERS, SEARCH_CENTERS } from '@/store/actions.type'
import { SET_FOCUS_CENTER } from '@/store/mutations.type'
import FitCenterItem from '@/components/FitCenterItem'

export default {
  components: {
    FitCenterItem
  },
  props: ['onItemClicked'],
  computed: mapState({
    centers: state => state.fitCenters.centers
  }),
  mounted() {
    this.$store.dispatch(FETCH_CENTERS)
  },
  methods: {
    onCenterItemClicked(item) {
      this.$store.commit(SET_FOCUS_CENTER, item)
      this.onItemClicked()
    },
    setPlace(place) {
      const cur = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      console.log(cur)
      this.$store.commit('SET_PLACE', cur)
      this.$store.dispatch(SEARCH_CENTERS, cur)
    }
  }
}
</script>
<style lang="scss" scoped>
.fit-center-list {
  width: 100%;
  height: 100%;

  .input {
    width: 100%;
    input {
      border-radius: 15px;
      width: 100%;
      height: 60px;
      border: 10px solid #f0f2f5;
      // box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      padding: 10px;
    }
  }

  .fit-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
