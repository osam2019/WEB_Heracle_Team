<template>
  <div class="protein-rank-container">
    <h1> 단백질 보충제 순위 및 구매 </h1>
    <el-table v-loading="listLoading" :data="listMockUp" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" >
        <template slot-scope="scope">
          <img :src="scope.row.img"></img>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="제품">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
          <el-button
              class="buy-btn"
              size="large"
              type="primary"
              @click="cancelEdit(row)"
            >
						구매
          </el-button>
        </template>
      </el-table-column>

      <el-table-column min-width="400px"  label="후기">
        <template slot-scope="scope">
          <span>{{ scope.row.rating }}</span>
					<!-- 실제 rating프로그램으로 대체 할것 -->
					<span>{{scope.row.review}} </span>
        </template>
      </el-table-column>

      <!-- <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column> -->


      <!-- <el-table-column min-width="300px" label="Title">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.title" class="edit-input" size="small" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column> --> -->
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'InlineEditTable',
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
			list: null,
			listMockUp:[
				{
					id : 1,
					img : "https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp",
					name : "마이오틴",
					rating : 4.5,
					review : "As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.",
					buyLink : "http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4"
				},
				{
					id : 1,
					img : "https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp",
					name : "마이오틴",
					rating : 4.5,
					review : "As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.",
					buyLink : "http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4"
				},
				{
					id : 1,
					img : "https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp",
					name : "마이오틴",
					rating : 4.5,
					review : "As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.",
					buyLink : "http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4"
				},


			],
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
			console.log(data);
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
.protein-rank-container{
	margin : 30px 50px;
}

.edit-input {
  padding-right: 100px;
}
.buy-btn {
  position: absolute;
  left:154px;
  bottom: 20px;
}
</style>