<template>
  <div class="fit-center-list">
    <div class="input">
      <form @submit="onSubmit(address);">
        <input v-model="address" placeholder="Address">
        <button class="btn" type="submit">검색</button>
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
      address: '',
      centers: [
        { id: 3, name: 'RH휘트니스', address: '서울시 용산구', grade: 5 },
        {
          id: 4,
          name: '한창헬스크럽',
          address: '경기도 시흥시 은행동',
          grade: 4.5
        },
        {
          id: 5,
          name: '코리아헬스',
          address: '경기도 시흥시 신천동',
          grade: 2.4
        },
        {
          id: 6,
          name: '베스트휘트니스클럽',
          address: '경기도 부천시 소사구',
          grade: 3.7
        },
        {
          id: 7,
          name: '비타민휘트니스',
          address: '경기도 부천시 소사구',
          grade: 4.7
        },
        {
          id: 8,
          name: '새마을휘트니스 부천점',
          address: '경기도 부천시 소사구',
          grade: 1.7
        }
      ]
    }
  },
  watch: {
    address: function(val) {
      console.log(val)
    }
  },
  methods: {
    onSubmit(address) {},
    onCenterItemClicked(item) {
      this.$emit('onFocusCenter', item)
    }
  }
}
</script>
<style>
.fit-list {
  list-style-type: none;
}
.fit-center-list {
  width: 30%;
}
</style>
