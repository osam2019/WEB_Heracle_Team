<template>
  <div class="dashboard-editor-container">
    <div class="health-care-dashboard">
      <h1>헬스 케어 대시보드</h1>
      <el-button class="record" type="primary" @click="centerDialogVisible = true">이번 주 기록하기</el-button>
      <el-dialog 
        title="이번 주 기록하기"
        :visible.sync="centerDialogVisible"
        width="700px"
        center>
        <record-form v-on:close-dialog="dialogClose" ></record-form>

      </el-dialog>

    </div>
    <panel-group />

    <el-row :gutter="8">
      <el-col  :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <h2>다이어트 식단 모음</h2>
        <transaction-table />
      </el-col>
      <el-col :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <h2>운동 리스트</h2>
        <todo-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import RecordForm from './components/RecordForm'

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    RecordForm
  },
  data() {
    return {
      centerDialogVisible: false,
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    dialogClose(){
      this.centerDialogVisible = false
    }

  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  margin : 50px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .health-care-dashboard{
    display : flex;
    justify-content: space-between;

    .record{
      font-weight : bold;
      font-size : 16px;
    }

  }

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
