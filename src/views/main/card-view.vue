<template>
<el-row>
  <el-col class="card-body-container" :span="8" v-for="(o, index) in mockData" :key="index" :body-style="{ padding: '5px' }" >
    <el-card class="card-body" :body-style="{ padding: '0px' }">
			<div class="img-container">
      			<img :src="o.img" class="image"/>
			</div>
    </el-card>
     <div class="body-container">
        <span class = "span-title">{{ o.title }}</span>
      </div>
  </el-col>
</el-row>
</template>

<script>

export default {
  data() {
    return {
			currentDate: new Date(),
			mockData: [
				{
					img : "https://i.pinimg.com/564x/67/8f/10/678f10a141dd2fcc61a55923cf17d306.jpg ",
					title : "트와이스 운동법"
				},
				{
					img : "https://i.pinimg.com/564x/fb/19/e3/fb19e3cdaa2cf2a9e3443dfb2e815a54.jpg",
					title : "신발 제대로 신기 ",
				},
				{
					img : "https://i.pinimg.com/564x/90/2b/a3/902ba3bd15a3c73d9c8c18f1b1d219b9.jpg ",
					title : "덤벨 2세트",

				},
				{
					img : "https://i.pinimg.com/564x/8c/9b/69/8c9b69342c348530df9e9973dee911f0.jpg ",
					title : "3대 500이하 언더아머 금지",
				},
				{
					img : "https://i.pinimg.com/564x/eb/f7/30/ebf730d3f0b4be520ec5ec6b350697d6.jpg ",
					title : "하체 운동 강화",
				},
				{
					img : "https://i.pinimg.com/564x/4d/e3/c5/4de3c59095f264547be5815308859b15.jpg ",
					title : "사랑해요 트와이스 ",
				},

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
	.card-body-container{
		padding : 5px;
		text-align : center;
		border-radius : 15px;
		background: white;
		border: 3px solid #f0f2f5;
	
		height : 325px;
		.card-body{
			height : 80%;
			margin : 0;
		}
		.img-container{
			position: relative; padding-top: 100%; /* 1:1 ratio */ overflow: hidden;
			.image{
			position: absolute; top: 0; left: 0; right: 0; bottom: 0; max-width: 100%; height: auto;

			}
		}
	}
	.body-container{
		padding : 10px;
	  overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
		.span-title{
			font-size : 20px;
		}
		.span-body{
			font-size : 10px;
		}
		
	}
	.image{
		width : 100px;
		height : 100px;

	}

 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
