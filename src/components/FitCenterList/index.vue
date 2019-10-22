<template>
  <div class="fit-center-list">
    <div class="input">
      <form>
        <gmap-autocomplete placeholder="Address" @place_changed="setPlace" />
      </form>
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
  </div>
</template>
<script>
import FitCenterItem from '@/components/FitCenterItem'

export default {
  components: {
    FitCenterItem
  },
  data() {
    return {
      centers: [
        { id: 3, name: 'RH휘트니스', address: '서울시 용산구', grade: 5 },
        {
          id: 4,
          name: '한창헬스크럽',
          address: '경기도 시흥시 은행동',
          grade: 4.5,
          imgs: [
            'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/samara/facilities/fitness-spa/gym/181126-1-2000-fac-LTSM.jpg.thumb.1440.1440.jpg',
            'https://img.sbs.co.kr/newimg/news/20160829/200974474_700.jpg',
            'http://mansoospa.co.kr/app/dubu_sourcecode/docs/imgs/1506924443_DSC02884.JPG'
          ],
          reviews: [
            {
              writer: 'fasdfasd',
              contents: '헬스장 너무 좋다',
              grade: 5
            },
            {
              writer: 'fasdfa',
              contents: '좋지만 기구가 많이 없다.',
              grade: 4.7
            }
          ]
        },
        {
          id: 5,
          name: '코리아헬스',
          address: '경기도 시흥시 신천동',
          grade: 2.4,
          imgs: []
        },
        {
          id: 6,
          name: '베스트휘트니스클럽',
          address: '경기도 부천시 소사구',
          grade: 3.7,
          imgs: []
        },
        {
          id: 7,
          name: '비타민휘트니스',
          address: '경기도 부천시 소사구',
          grade: 4.7,
          imgs: []
        },
        {
          id: 8,
          name: '새마을휘트니스 부천점',
          address: '경기도 부천시 소사구',
          grade: 1.7,
          imgs: []
        }
      ]
    }
  },
  methods: {
    onCenterItemClicked(item) {
      this.$store.commit('SET_FOCUS_CENTER', item)
    },
    setPlace(place) {
      this.$store.commit('SET_PLACE', {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      })
    }
  }
}
</script>
<style>
.fit-list {
  list-style-type: none;
}
.fit-center-list {
  width: 100%;
  height: 100%;
}
</style>
