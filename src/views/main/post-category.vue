<template>
  <div class="post-category-container">
		<div class="category-header">포스트 카테고리</div>
		 <div class="category-body">
			<template v-for="data in mockCategory" >
					<el-button class = "chips" type="primary" plain round>{{data}}</el-button>
  			</template>
		 </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
			mockCategory : [
				'운동', '하체', '덤벨', '레그 프레스', '군대 운동', '전역 330일', '김상렬', '김규환', '특급 전사','4284부대'
				,'리빅아'
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
.post-category-container{
	.category-header{
		padding : 0 10px;
		font-size : 22px;
		color : #000;
	}
	.category-body{
		display : flex;
		padding : 0 10px;
		flex-flow : wrap;
		margin-top : 20px;
		

	}
	.chips{
		margin : 2px 5px 2px 0 ;
	}

}

</style>
