<template>
  <div class="protein-rank-container">
    <div class="rank-item-container">
      <ul>
        <li v-for="item of items" :key="item.id" class="unit-ul col-md-6">
          <rank-unit :data="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RankUnit from './RankUnit.vue'
import { fetchList } from '@/api/article'
import Logo from '@/assets/image/title.png'
import RankJson from '@/assets/json/rank.json'

export default {
  name: 'InlineEditTable',
  components: { RankUnit },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      logo: Logo,
      items: RankJson,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      console.log(data)
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-submit-btn {
  margin-left: 10px;
}

// .protein-rank-header {
//   width: 40%;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 30px;
//   display: flex;
// }
.protein-rank-container {
}

.rank-item-container {
  width: 40%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.unit-ul {
  list-style-type: none;
}

.edit-input {
  padding-right: 100px;
}
.buy-btn {
  position: absolute;
  left: 154px;
  bottom: 20px;
}
</style>
