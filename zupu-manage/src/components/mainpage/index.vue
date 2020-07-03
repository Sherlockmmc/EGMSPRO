<template>
  <div>
      <el-row class="mainheader">
          <el-col :span='8' :offset="1">
          <el-col :span='4'>
              <div :style="{backgroundImage:url}" class="logo"></div>
          </el-col>
          <el-col :span='18' class="title">电子族谱管理界面</el-col>
        </el-col>
        <el-col :span='3' :offset="10">2020年07月04日</el-col>
        <el-col :span='1'>admin</el-col>
        <el-col :span='1'><span>退出</span></el-col>
      </el-row>
      <el-row class="main">
          <el-col :span='4' class="left">
              <el-menu
                default-active="1">
                <el-menu-item index="1" @click="toWode">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">我的</span>
                </el-menu-item>
                <el-menu-item index="2" @click="toFamily">
                    <i class="el-icon-news"></i>
                    <span slot="title">族谱管理</span>
                </el-menu-item>
                <el-menu-item index="3" @click="toMember">
                    <i class="el-icon-money"></i>
                    <span slot="title">家庭成员管理</span>
                </el-menu-item>
                <el-menu-item index="4" @click="toSerach">
                    <i class="el-icon-search"></i>
                    <span slot="title">基本查询系统</span>
                </el-menu-item>
                </el-menu>
          </el-col>
          <el-col  :span='20' class="right">
              <router-view></router-view>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'url(' + require('@/assets/pic/logo.png') + ')'
    }
  },
  methods: {
    toWode () {
      this.$router.push({name: 'userinfo'})
    },
    toFamily () {
      this.$router.push({name: 'familymanage'})
    },
    toSerach () {
      this.$router.push({name: 'basiclook'})
    },
    toMember () {
      this.$router.push({name: 'member'})
    }
  }
}
</script>

<style lang='scss' scoped>
.mainheader{
    color: azure;
    font-size: 18px;
    height: 85px;
    line-height: 85px;
    background-color: #7492E8;
    .title{
      font-size: 24px;
    }
    span{
        cursor: pointer;
    }
    img{
      width: 75px;
      margin-top: 10px;
    }
    .logo{
        width: 90px;
        height: 80px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
}
.main{
    margin-left: 65px;
    .left{
        i{
            font-size: 30px;
        }
        span{
             font-size: 22px;
             margin-left: 20px;
        }
    }
    .right{
        background-color: #F0F2F5;
        height: 847px;
    }
}
</style>
