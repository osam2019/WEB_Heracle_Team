<template>
  <el-table label="다이어트 식단 리스트" :data="mockList" style="width: 100%;padding-top: 15px;">
    <el-table-column min-width="200">
      <template slot-scope="scope">
        <div class="row-list" @click="linkToBlog(scope.row.url)">{{ scope.row.article }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null,
      mockList : [
        {
          article : "존 다이어트 식단 예시",
          url : "https://m.blog.naver.com/PostView.nhn?blogId=hanna667&logNo=220671061321&proxyReferer=https%3A%2F%2Fwww.google.com%2F"
        },
        {
          article : "다이어트 식단 예시",
          url : "http://blog.naver.com/PostView.nhn?blogId=safety51&logNo=110111068085"
        },
        {
          article : "다이어트 칼럼, 다이어트 식단, 이렇게 짜면 백전 백승!",
          url : "http://www.dietshin.com/community/column_view.asp?idx=241770&sub_menu_id="
        },
        {
          article : "헬린이들 식단 짜는 법 알려준다",
          url : "https://www.fmkorea.com/1164601699"
        },
        {
          article : "남자 다이어트 식단 <3주 스피드 몸만들기>",
          url : "https://post.naver.com/viewer/postView.nhn?volumeNo=11419668&memberNo=9332686"
        },
        {
          article : "84.5kg에서 69.6kg로, 직장인 다이어트 성공기",
          url : "https://www.huffingtonpost.kr/entry/story_kr_15844580"
        },
        {
          article : "다이어트 식단, 이렇게 짜면 백전백승!",
          url : "https://1boon.kakao.com/dietshin/5a2f70756a8e5100016461a1"
        },
        {
          article : "남자 다이어트 운동법과 식단 구성은?",
          url : "https://shealth.life/r/ldba"
        },

      ]
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    linkToBlog(url){
      console.log(url)
    var win = window.open(url, '_blank');
    win.focus();

    },
    // fetchData() {
    //   transactionList().then(response => {
    //     this.list = response.data.items.slice(0, 8)
    //   })
    // }
  }
}
</script>
<style lang="scss" scoped>
.row-list{
  &:hover{
    cursor : pointer;
  }
}
</style>
