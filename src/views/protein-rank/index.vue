<template>
  <div class="protein-rank-container">
    <h1>보충제</h1>
      <el-row :gutter="20" class="panel-group">
        <template v-for="item of items">
          <el-col :sm="8" :lg="8" class="card-panel-col" :key="item.id">
            <div class="card-panel-info">
              <rank-unit :data="item" />
            </div>
          </el-col>
        </template>
    </el-row>
    
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

.protein-rank-container{
  min-height: 100%;
  margin : 50px;
  .panel-group{
    .card-panel-col{
      height : 800px;
      .card-panel-info{
        height : 100%;
        background : white;
        border-radius : 15px;
        padding : 20px;
      }
    }
  }
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
