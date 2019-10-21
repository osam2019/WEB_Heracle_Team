<template>
<<<<<<< HEAD
  <div class="main-view-container">
    <el-row class="main-header">
      <div class="logo-container"><img :src="logoImg"/></div>
      <div class="serach-container">
        <el-input class="search"   size="large" placeholder="Please input" v-model="input"></el-input>
      </div>
      <el-button class="icon" icon="el-icon-search" circle></el-button>
    </el-row>
    <el-row class="main-body" :gutter="20">
      <el-col :span="5">
        <div class="left-main">
          <div class="user-info">
            <UserInfo :user="user"></UserInfo>
          </div>
          <div class="post-category">
            <h3> 여기는 포스트 카테고리 입니다.</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="center-main">
          <div class="logo-button-router">
            <h3>여기는 로고 버튼이 들어갈 자리입니다.</h3>
          </div>
          <div class="card-view-container">
            <h3> 여기는 카드뷰 컨테이너 입니다.</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-main">
          <div class = "rank-router">
            <h3>여기는 랭킹 라우터가 들어갈 자리입니다.</h3>
          </div>
        </div>
      </el-col>
    </el-row>

=======
  <div class="main-container">
      <h1> This is main page</h1>
>>>>>>> add basig routing setting
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex'
import logoImg from '@/assets/image/title.svg'
import UserInfo from '@/views/main/user.vue'

export default {
  components: {
    UserInfo
  },
  created() {
    this.getUser()
  },
  data() {
    return {
      logoImg : logoImg,
      input : ""

    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main-view-container{
  margin : 30px 50px;
  .main-header{
    display : flex;
    margin-bottom : 20px;
    .logo-container{
      width : 300px;
      height : 50px;
      border : 1px solid red;
      margin-right : 20px;
      img{
        margin : 0 auto;
        width  : auto;
        height : 100%;
      }
    }
    .serach-container{
      width : 1000px;
      height : 50px;
      border : 1px solid yellow;
      .search{
        width : 100%;
        height : 100%;
        input{
          height : 100% !important;
        }
      }

    }
  }

  .main-body{
    .left-main{
      border : 1px solid black;
      .user-info{
        width : 100%;
        height : 300px;
        border : 1px solid purple;
      }
      .post-category{
        margin-top : 20px;
        width : 100%;
        height : 500px;
        border : 1px solid brown;
      }
    }
    .center-main{
      .logo-button-router{
        width : 100%;
        height : 150px;
        border : 1px solid blue;
      }
      .card-view-container{
        margin-top : 20px;
        width : 100%;
        height : 650px;
        border : 1px solid red;
      }
    }

    .right-main{
      .rank-router{
        width : 100%;
        height : 300px;
        border : 1px solid brown;
      }
    }

  }

}

@media(max-width : 1024px){
  .main-view-container{
    margin : 30px;
  }
}

</style>
=======

export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>



</style>
>>>>>>> add basig routing setting
