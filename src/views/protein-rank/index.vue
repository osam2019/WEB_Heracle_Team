<template>
  <div>
    <div class="protein-rank-header">
      <el-input placeholder="상품을 검색하세요..." prefix-icon="el-icon-search" />
    </div>
    <div class="protein-rank-container">
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
      items: [
        {
          title: '지방이 없는 단백질 보충체 랭킹',
          subtitle: '보충제 랭킹',
          ranker: [
            {
              id: 1,
              img:
                'https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp',
              name: '단백질 보충제',
              brand: '마이오틴',
              rating: 4.5
            },
            {
              id: 2,
              name: '임팩트 웨이 프로틴',
              brand: '마이 프로틴',
              img:
                'https://s1.thcdn.com/productimg/300/300/10530943-4414674035314392.jpg'
            },
            {
              id: 3,
              name: '퍼펙트 파워쉐이크',
              brand: '칼로바이',
              img:
                'https://thumbnail14.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8cc0/e45f49b996d9559f106965966b6e946fa8624ae6f6a01e1bc356f66b7dcf.jpg'
            }
          ]
        },
        {
          title: '맛 대신 건강을 위한 보충제 랭킹',
          subtitle: '보충제 랭킹',
          ranker: [
            {
              id: 1,
              img:
                'https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp',
              name: '단백질 보충제',
              brand: '마이오틴',
              rating: 4.5
            },
            {
              id: 2,
              name: '임팩트 웨이 프로틴',
              brand: '마이 프로틴',
              img:
                'https://s1.thcdn.com/productimg/300/300/10530943-4414674035314392.jpg'
            },
            {
              id: 3,
              name: '퍼펙트 파워쉐이크',
              brand: '칼로바이',
              img:
                'https://thumbnail14.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8cc0/e45f49b996d9559f106965966b6e946fa8624ae6f6a01e1bc356f66b7dcf.jpg'
            }
          ]
        }
      ],
      list: null,
      listMockUp: [
        {
          id: 1,
          img:
            'https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp',
          name: '마이오틴',
          rating: 4.5,
          review:
            'As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.',
          buyLink:
            'http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4'
        },
        {
          id: 1,
          img:
            'https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp',
          name: '마이오틴',
          rating: 4.5,
          review:
            'As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.',
          buyLink:
            'http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4'
        },
        {
          id: 1,
          img:
            'https://static.wixstatic.com/media/9f158a_556ada69b99a4a24897491f740c47bd8.jpg/v1/fill/w_106,h_182,al_c,lg_1,q_80/9f158a_556ada69b99a4a24897491f740c47bd8.webp',
          name: '마이오틴',
          rating: 4.5,
          review:
            'As the best protein powder, Myotein has been known for its ability to Increase lean muscle mass and speed recovery. Myotein features 6 different blends of protein and is loaded with 26g of pure protein. Try the #1 choice in taste with the delicious chef-approved XPI Myotein.',
          buyLink:
            'http://browse.gmarket.co.kr/search?keyword=%EB%A7%88%EC%9D%B4%EC%98%A4%ED%8B%B4'
        }
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
.protein-rank-header {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.protein-rank-container {
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
