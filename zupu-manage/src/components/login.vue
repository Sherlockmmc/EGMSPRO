<template>
  <div class="login">
      <el-row class="login-header">
        <el-col :span='8' :offset="1">
          <el-col :span='3'>
            <img src="../assets/pic/logon.png" alt="">
          </el-col>
          <el-col :span='18' class="title">电子族谱管理系统</el-col>
        </el-col>
        <el-col :span='3' :offset="10">2020年07月04日</el-col>
        <el-col :span='1'>墨刀</el-col>
        <el-col :span='1'>未登录</el-col>
      </el-row>
      <el-row class="login-main">
        <el-col :span='11' class="left">
             <el-row class="biglogo">
            <img src="../assets/pic/logon.png" alt="">
            <p>电子族谱管理系统</p>
             </el-row>
        </el-col>
        <el-col :span='8' :offset="3" class="right">
             <div class="hello">
               您好，请登录
             </div>
             <div class="logininfo">
               <el-row>
                 <el-col :span='2'><i class='el-icon-user-solid'></i></el-col>
                 <el-col :span='2'><i class='el-icon-caret-right'></i></el-col>
                 <el-col :span='20'>
                   <el-input v-model="inputName" placeholder="请输入账号"></el-input>
                 </el-col>
               </el-row>
               <el-row>
                 <el-col :span='2'><i class='el-icon-lock'></i></el-col>
                 <el-col :span='2'><i class='el-icon-caret-right'></i></el-col>
                 <el-col :span='20'>
                   <el-input v-model="inputPass" placeholder="请输入密码"></el-input>
                 </el-col>
               </el-row>
               <el-row class="repass">
                 <el-radio v-model="rempass" label="记住密码">记住密码</el-radio>
               </el-row>
               <el-row>
                 <el-button>登 录</el-button>
                 <p>忘记密码请联系公司管理员!</p>
               </el-row>
             </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      repass: '',
      inputName: '',
      inputPass: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  .login-header{
    color: azure;
    font-size: 18px;
    height: 85px;
    line-height: 85px;
    background-color: #52CAE3;
    .title{
      font-size: 24px;
    }
    img{
      width: 75px;
      margin-top: 10px;
    }
  }
  .login-main{
    position: relative;
    left: 160px;
    margin-top: 100px;
    width: 1450px;
    .left{
    height: 663px;
    background-color: #52CAE3;
    img{
      width: 220px;
      position: absolute;
      left: 215px;
      top: 200px;
    }
    p{
      position: relative;
      top: 440px;
      left: 125px;
      font-size: 50px;
    }
    }
    .right{
      .hello{
      margin-left: 180px;
      margin-top: 150px;
      margin-bottom: 50px;
      font-size: 25px;
      width: 150px;
      height: 45px;
      border-bottom: 5px solid #0B355B ;
    }
      .logininfo{
        i{
          font-size: 30px;
          color: #0B355B;
        }
        .el-row{
          margin-bottom: 20px;
        }
        .el-button{
          width: 485px;
          background-color: #0B355B;
          color: #ffffff;
        }
        p{
          margin-top:8px;
        }
      }
    }
  }
}
</style>
