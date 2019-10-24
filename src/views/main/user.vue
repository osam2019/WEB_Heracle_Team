<template>
  <el-card style="margin-bottom:20px; border-radius:15px; height:300px">
    <div slot="header" class="clearfix">
      <span class="user-info">안녕하세요  {{ user.name }} 님</span>
    </div>
    <div class="card-body">
      <table class="user-table">
        <tbody>
          <template v-for="data in mockData">
            <tr :key="data.name">
              <td>{{ data.name }}</td>
              <td>{{ data.value}}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <el-button type="success" round @click="logout">로그아웃</el-button>
    </div>

  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
import { mapGetters } from 'vuex'

export default {
  components: { PanThumb },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
            name: '',
            age : '',
            weight : '',
            height : '',
            latest : '',
            email: '',
            avatar: '',
            roles: '',

        }
      }
    }
  },
  data(){
    return{
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
      {
        name : 'BMI',
        value : '25'
      }
    ],
    }
  },
  methods : {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }
 .user-info{
   font-weight : bold;
 }
 .user-table{
    width : 100%;
    font-weight: bold;
    font-size: 18px;
    
 }
 .text-muted {
   color: #777;
 }
 .card-body{
   height : 200px;
   position:relative;
 }
  .el-button{
    position:absolute;
    right : 0px;
    bottom : 0px;
  }
  .user-profile {
    span{
			display : block;
    }
   .user-name {
     font-weight: bold;
   }

   .box-center {
     padding-top: 10px;
   }

   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }

   .box-social {
     padding-top: 30px;

     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }

   .user-follow {
     padding-top: 20px;
   }
 }

 .user-bio {
   margin-top: 20px;
   color: #606266;

   span {
     padding-left: 4px;
   }

   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;

     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
 }
</style>
