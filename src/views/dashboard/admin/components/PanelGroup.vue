<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel-info">
      <h2>기본 프로필</h2>
      <img class="profile" :src="profileImg"/>
      <table>
        <tbody>
          <template v-for="data in mockData">
            <tr :key="data.name">
              <td>{{ data.name }}</td>
              <td>{{ data.value}}</td>
            </tr>
          </template>
        </tbody>
      </table>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel-info">
        <h2>BMI(Body Mass Index)</h2>
        <div class="card-panel-body">
          <span class="num"> {{ BMI }} </span>
          <img class="icon" :src="badIcon">
        </div>
        
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel-info">
        <h2>ABSI(A Body Shape Index)</h2>
        <div class="card-panel-body">
          <span class="num">{{ ABSI }}</span>
          <img class="icon" :src="goodIcon">
        </div>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel-info">
        <h2>기초 대사량</h2>
        <div class="card-panel-body">
          <span class="num">{{ BMR }}Kcal</span>
        </div>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <h2>최근 5개월 몸무게 변화</h2>
        <BarChart :graphData="mockGraphData[0]"/>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <h2>최근 5개월간 BMI 변화</h2>
        <BarChart :graphData="mockGraphData[1]"/>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <h2>최근 5개월간 ABSI 변화</h2>
        <BarChart :graphData="mockGraphData[2]"/>
      </div>
    </el-col>
    <el-col :sm="6" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <h2>최근 5개월간 기초대사량 변화</h2>
        <BarChart :graphData="mockGraphData[3]"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import BarChart from './BarChart'
import goodIcon from '@/assets/image/good.png'
import badIcon from '@/assets/image/bad.png'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex' 

export default {
  components: {
    BarChart
  },
    computed:{
      // ...mapState({
      //   'sex', 'age', 'height', 'weight', 'waistCircumference',
      // }),
			...mapGetters([
				'BMI','ABSI','BMR'
      ]),
      
    },
  data(){
    return{
      profileImg : "https://www.supaja.com/wrapkit-html/images/testimonial/5.jpg",
      goodIcon : goodIcon,
      badIcon : badIcon,
      mockGraphData : [
        {
          //최근 5개월 몸무게 변화
          color : '#00ffa6',
          name : '몸무게',
          xasis : ['2019-06', '2019-07', '2019-08,', '2019-09', '2019-10'],
          data : [88,86,84,82,84]
        },
        {
          //최근 5개월 BMI 변화
          color : '#0088ff',
          name : 'BMI',
          xasis : ['2019-06', '2019-07', '2019-08,', '2019-09', '2019-10'],
          data : [25.99, 25.4, 24.81, 24.22, 24.81]

        },
        {
          //최근 5개월 ASBI 변화
          color : '#bb54c4',
          name : 'ASBI',
          xasis : ['2019-06', '2019-07', '2019-08,', '2019-09', '2019-10'],
          data : [0.0722, 0.0734, 0.0746, 0.0711, 0.0746]
        },
        {
          //최근 5개월 기초대사량 변화
          color : '#c4546b',
          name : '기초 대사량',
          xasis : ['2019-06', '2019-07', '2019-08,', '2019-09', '2019-10'],
          data : [2047, 2020, 1992, 1965, 1992]
        },
      ],
      mockData : [
        {
          name : '성별',
          value : '남'
        },
        {
          name : '나이',
          value : '22 세'
        },
        {
          name : '키',
          value : '184 cm'
        },
        {
          name : '몸무게',
          value : '84 kg'
        },
      ],
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
    display : inline-block;
    img{
      width : 100px;
      height : 100px;
    }
   h2{
      color : black;
      font-weight : bold;
      margin : 0 0 20px 0;

    }
  }

  .card-panel {
    border-radius : 15px;
    padding : 20px;
    height: 400px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

  }
  
  .card-panel-info {
    border-radius : 15px;
    padding : 20px;
    height: 200px;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

  .card-panel-body{
    color : #000000;
    display : flex;
    align-items: center;
    justify-content: center;
    margin : 0 auto;
    height : 100px;
    // border : 1px solid red;

    .num{
      font-size : 50px;
      margin : 0 10px 0 0;
    }
    .detail{
      font-size : 15px;
    }
    .icon{
      width : 80px;
      height : 80px;
    }
  }

  table{
      display : inline-block;
      width : 150px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  
}

</style>
