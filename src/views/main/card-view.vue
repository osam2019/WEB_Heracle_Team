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
            'https://i.pinimg.com/564x/67/8f/10/678f10a141dd2fcc61a55923cf17d306.jpg ',
          title: '트와이스 운동법',
          url: 'https://www.naver.com'
        },
        {
          img:
            'https://i.pinimg.com/564x/fb/19/e3/fb19e3cdaa2cf2a9e3443dfb2e815a54.jpg',
          title: '신발 제대로 신기 ',
          url: ''
        },
        {
          img:
            'https://i.pinimg.com/564x/90/2b/a3/902ba3bd15a3c73d9c8c18f1b1d219b9.jpg ',
          title: '덤벨 2세트',
          url: ''
        },
        {
          img:
            'https://i.pinimg.com/564x/8c/9b/69/8c9b69342c348530df9e9973dee911f0.jpg ',
          title: '3대 500이하 언더아머 금지',
          url: ''
        },
        {
          img:
            'https://i.pinimg.com/564x/eb/f7/30/ebf730d3f0b4be520ec5ec6b350697d6.jpg ',
          title: '하체 운동 강화',
          url: ''
        },
        {
          img:
            'https://i.pinimg.com/564x/4d/e3/c5/4de3c59095f264547be5815308859b15.jpg ',
          title: '사랑해요 트와이스 ',
          url: ''
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
