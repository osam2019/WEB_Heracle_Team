<template>
  <div class="grid">
    <span v-for="(o, index) in mockData" :key="index" @click="onClickCardItem(o)">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="img-container">
          <img :src="o.img" class="image">
        </div>
        <div style="padding: 14px;">
          <span>{{ o.title }}</span>
        </div>
      </el-card>
    </span>
    <!-- <span
      class="card-body-container"
      v-for="(o, index) in mockData"
      :key="index"
      v-on:click="onClickCardItem(o)"
    >
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="img-container">
          <img :src="o.img" class="image" />
        </div>
        <div style="padding: 14px;">
          <span>{{ o.title }}</span>
        </div>
      </el-card>
      <div class="body-container">
        <span class="span-title">{{ o.title }}</span>
      </div>
    </span>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      mockData: [
        {
          img:
            'http://mblogthumb4.phinf.naver.net/20130630_167/andra12_1372566785198ypbEs_JPEG/j4_body2balance.jpg?type=w2',
          title: '등근육 운동 탄탄한 뒤태 만들기 위한 방법',
          url: 'https://blog.naver.com/kuexolove/221639348896'
        },
        {
          img:
            'http://health.chosun.com/site/data/img_dir/2018/05/28/2018052800570_0.jpg',
          title: '단백질 보충제 먹으면 정말 효과가 있나요?',
          url:
            'http://health.chosun.com/site/data/html_dir/2018/05/28/2018052800573.html'
        },
        {
          img:
            'http://gagyeonghealth.itpage.kr/user/g/gagyeonghealth/20171128094201_d30Ugj6i.jpg',
          title:
            '헬스 ( 웨이트 트레이닝) 초보자(헬린) 가이드 운동법 tip -마른편',
          url:
            'http://blog.naver.com/PostView.nhn?blogId=skdmeb12&logNo=221249080304&proxyReferer=https%3A%2F%2Fwww.google.com%2F'
        },
        {
          img: 'https://pbs.twimg.com/media/EEfAq1AVAAUzz4Y.jpg',
          title: '근력 운동을 반드시 해야 하는 6가지 놀라운 효과',
          url: 'https://brunch.co.kr/@tenbody/1135'
        },
        {
          img:
            'https://news.samsung.com/kr/wp-content/uploads/2015/05/S%ED%97%AC%EC%8A%A412.jpg',
          title: '가장 흔하게 틀리는 운동 자세 7',
          url: 'https://1boon.kakao.com/styleade/wrong'
        },
        {
          img: 'https://ak8.picdn.net/shutterstock/videos/29108998/thumb/1.jpg',
          title: '과학자들이 밝힌 가장 효과적인 다이어트 방법',
          url: 'https://fav76.tistory.com/2481'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    initialize() {},
    onClickCardItem(item) {
      this.linkWithNewTab(item.url)
    },
    linkWithNewTab(url) {
      console.log(url)
      var win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.img-container {
  position: relative;
  padding-top: 70%; /* 1:1 ratio */
  .image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    height: 100%;
  }
}
// .card-view-container {
//   text-align: left; /* 문자들의 가운데 정렬을 해제 */
//   width: 100px;
// }
.txt-title {
  margin: 10px;
}
.card-body-container {
  margin: 10px;
  //   padding: 20px;
  text-align: center;
  //   border-radius: 20px;
  //   background: white;
  //   border: 3px solid #f0f2f5;

  //   height: 270px;
  height: auto;
  .card-body {
    height: 50%;
    margin: 0;
  }
  .img-container {
    position: relative;
    padding-top: 100%; /* 1:1 ratio */
    overflow: hidden;
    .image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      height: 50%;
    }
  }
}
.body-container {
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .span-title {
    font-size: 20px;
  }
  .span-body {
    font-size: 10px;
  }
}
.image {
  width: 100px;
  height: 50px;
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
  clear: both;
}
</style>
