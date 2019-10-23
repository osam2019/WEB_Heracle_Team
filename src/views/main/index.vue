<template>
  <div class="main-view-container">
    <el-row class="main-header">
      <div class="logo-container"><img :src="logoImg"/></div>
      <div class="serach-container" @click="routerToMap($event)">
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
            <PostCategory/>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="center-main">
          <div class="logo-button-router">
            <CardRouter/>
          </div>
          <div class="card-view-container">
            <CardView/>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-main">
          <div class = "rank-router">
            <RankingRouter/>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logoImg from '@/assets/image/title.svg'
import UserInfo from '@/views/main/user.vue'
import CardView from '@/views/main/card-view.vue'
import CardRouter from '@/views/main/card-router.vue'
import RankingRouter from '@/views/main/ranking-router.vue'
import PostCategory from '@/views/main/post-category.vue'

export default {
  components: {
    UserInfo,
    CardView,
    CardRouter,
    RankingRouter,
    PostCategory
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
        age : 22,
        weight : 80,
        height : 184,
        latest : '2019-10-06',
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    },
    routerToMap($event){
      console.log("asdf")
      this.$router.push('/map')
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
      .user-info{
        width : 100%;
        height : 300px;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
      }
      .post-category{
        margin-top : 20px;
        width : 100%;
        height : 500px;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
      }
    }
    .center-main{
      .logo-button-router{
        width : 100%;
      }
      .card-view-container{
        margin-top : 20px;
        width : 100%;
        height : 650px;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
      }
    }

    .right-main{
      .rank-router{
        width : 100%;
        height : 300px;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
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