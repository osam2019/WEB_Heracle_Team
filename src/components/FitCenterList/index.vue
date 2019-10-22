<template>
  <div>
    <div class="input">
      <form @submit="onSubmit(address);">
        <input v-model="address" placeholder="Address">
        <button class="btn" type="submit">검색</button>
      </form>
    </div>
    <div class="container">
      <ul>
        <li v-for="center of centers" :key="center.id" class="col-md-6">
          <FitCenterItem :center="center" @click="onCenterItemClicked(center)" />
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
        { id: 3, name: 'RH휘트니스', address: '서울시 용산구', grade: 10 },
        { id: 4, name: '한창헬스크럽', address: '경기도 시흥시 은행동' },
        { id: 5, name: '코리아헬스', address: '경기도 시흥시 신천동' }
      ]
    }
  },
  methods: {
    onSubmit(address) {},
    onCenterItemClicked(item) {
      console.log(item)
    }
  }
}
</script>
