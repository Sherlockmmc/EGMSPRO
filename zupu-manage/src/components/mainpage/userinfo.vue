<template>
  <div class="userinfo">
     <el-row class="head">
       <el-col :span='3' :offset="1"><img class="toux" src="../../assets/pic/touxiang.png" alt=""></el-col>
       <el-col :span='6'>
         <ul>
           <li><img src="../../assets/pic/1.png" alt=""><span class="name">岳舞</span></li>
           <li><img src="../../assets/pic/2.png" alt=""><span>ID： 177293</span></li>
           <li><img src="../../assets/pic/3.png" alt=""><span>用一句话介绍自己吧</span></li>
         </ul>
       </el-col>
       <el-col :span='5' class="er">
         <p> 二维码名片:</p>
         <img src="../../assets/pic/4.png" alt="">
         </el-col>
       <el-col :span='5' :offset="2" class="edit">
          <i class='el-icon-s-tools'></i><span>修改账号信息</span>
       </el-col>
     </el-row>
     <el-row>
       <div class="info">
                <img src="../../assets/pic/5.png" alt="">
       </div>
     </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scpoed>
.userinfo{
  .head{
    .er{
      font-size: 25px;
      p{
        margin-bottom: 5px;
      }
    }
    .edit{
      span{
        font-size: 20px;
      }
      i{
        font-size: 24px;
        margin-right:20px ;
      }
    }
    margin-top: 20px;
    ul{
      li{
        span{
          font-size: 20px;
          position: relative;
          top: -5px;
          left: 5px;
        }
       .name{
         font-size: 30px;
       }
      }
    }
      .toux{
        border-radius: 50%;
        width: 140px;
        height: 140px;
      }
  }
  .info{
    margin-left: 105px;
    margin-top: 20px;
    img{
      height: 640px;
    }
  }
}
</style>
