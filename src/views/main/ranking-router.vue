<template>
  <div class="ranking-router-container">
    <div class="ranking-header">인기 게시물</div>
    <div class="ranking-list">
			<ul>
        <li v-for="(o, index) in mockData" :key="index">
					{{ index+1 }}. {{ o }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
        mockData : [
            '트와이스 운동법',
            '신발 제대로 신기',
            '덤벨 2세트',
            '3대 500 이하 언더아머 금지',
            '하체 운동 강화'
        ]

    }
  },
  methods: {
    initialize(){}

  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
.ranking-router-container{
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .ranking-header{
        font-size : 22px;
        color : #000;

    }
		.ranking-list ul{
			padding : 0;
			list-style-type: none;
			
			li{
				font-size : 20px;
				line-height : 45px;

				&:hover{
					background-color : #e6e6e6;
					cursor : pointer;
				}
			}
			

		}
}

</style>
