<template>
  <div class="familymanage">
      <div class="all">
        <div class="title">
          <img src="../../assets/pic/maohao.png" alt="">
          <span>请选择功能</span>
        </div>
        <div class="buttons">
           <ul>
             <li @click="addfamily" class="bor li1"><div class="d1"><img src="../../assets/pic/xixi.png" alt=""><span>增加族谱</span></div></li>
             <li @click='delfamily' class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>删除族谱</span></div></li>
             <li @click='editfamily' class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>修改族谱</span></div></li>
             <li @click="serfamily"><div><img src="../../assets/pic/xixi.png" alt=""><span>查找族谱信息</span></div></li>
           </ul>
        </div>
      </div>
      <!-- 增加成员 -->
      <el-dialog title="请输入新增的族谱信息" :visible.sync="dialogFormVisible">
        <el-form :model="memberinfo">
          <el-form-item label="家族ID" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="族谱名称" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族姓氏" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.familyName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族简介" :label-width="formLabelWidth" >
            <el-input v-model="memberinfo.intro" autocomplete="off" type="textarea"  :rows="3"></el-input>
          </el-form-item>
          <el-form-item label="家族代数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.birth" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族现存人数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.number" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmadd">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 删除成员  -->
       <el-dialog title="请在下面要删除的族谱名称或id" :visible.sync="delFormVisible">
         <el-form :model="delform">
          <el-form-item label="待删除族谱ID" :label-width="formLabelWidth">
            <el-input v-model="delform.familyid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="待删除族谱名称" :label-width="formLabelWidth">
            <el-input v-model="delform.name" autocomplete="off"></el-input>
          </el-form-item>
         </el-form>
         <div slot="footer" class="dialog-footer">
          <el-button @click="delFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmdel">确 定</el-button>
        </div>
         </el-dialog>
      <!-- 修改成员 -->
      <el-dialog title="请输入要修改的族谱信息" :visible.sync="editFormVisible">
        <el-form :model="memberinfo">
         <el-form :model="memberinfo">
          <el-form-item label="家族ID" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="族谱名称" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族姓氏" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.familyName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族简介" :label-width="formLabelWidth" >
            <el-input v-model="memberinfo.intro" autocomplete="off" type="textarea"  :rows="3"></el-input>
          </el-form-item>
          <el-form-item label="家族代数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.birth" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族现存人数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.number" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmedit">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 查找成员信息 -->
       <el-dialog title="请输入待查询的成员信息" :visible.sync="outerVisible">
          <el-dialog
            width="30%"
            :title="sertitle"
            :visible.sync="innerVisible"
            append-to-body>
            <ul class="data1">
              <li>家族ID</li>
              <li>族谱名称</li>
              <li>家族姓氏</li>
              <li>家族代数</li>
              <li>家族现存人数</li>
              <li>家族简介</li>
            </ul>
            <ul class="data2">
              <li>{{serform2.id}}</li>
              <li>{{serform2.familyName}}</li>
              <li>{{serform2.familyid}}</li>
              <li>{{serform2.birth}}</li>
              <li>{{serform2.number}}</li>
              <li>{{serform2.intro}}</li>
            </ul>
          </el-dialog>
          <el-form :model="serform">
            <el-form-item label="家族姓氏" :label-width="formLabelWidth">
             <el-input v-model="serform.familyname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家族ID" :label-width="formLabelWidth">
             <el-input v-model="serform.familyid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家训" :label-width="formLabelWidth">
             <el-input v-model="serform.saying" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家族名称" :label-width="formLabelWidth">
             <el-input v-model="serform.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="goser">开始查询</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memberinfo: {
        id: '',
        familyName: '',
        familyid: '',
        birth: '',
        number: '',
        intro: ''
      },
      serform2: {
        id: '002',
        familyName: '成都陈家',
        familyid: '陈',
        birth: '16',
        number: '150',
        intro: '一个默默无闻的家族'
      },
      delform: {
        familyid: '',
        name: ''
      },
      serform: {
        saying: '',
        familyid: '',
        name: '',
        familyName: ''
      },
      dialogFormVisible: false,
      delFormVisible: false,
      editFormVisible: false,
      outerVisible: false,
      innerVisible: false,
      formLabelWidth: '120px',
      sertitle: ''
    }
  },
  methods: {
    addfamily () {
      this.dialogFormVisible = true
    },
    confirmadd () {
      this.$confirm('确认添加吗？').then(() => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
        this.dialogFormVisible = false
      })
    },
    delfamily () {
      this.delFormVisible = true
    },
    confirmdel () {
      let name = this.delform.name
      let id = this.delform.familyid
      let msg = '确认要删除id为：' + id + ' 名称为：' + name + ' 的族谱吗？'
      this.$confirm(msg).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.delFormVisible = false
        this.memberinfo.name = ''
      })
    },
    editfamily () {
      this.editFormVisible = true
    },
    confirmedit () {
      this.$confirm('确认修改信息无误吗？').then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.editFormVisible = false
        this.serform2.number = '148'
      })
    },
    serfamily () {
      this.outerVisible = true
      this.serform.name = ''
    },
    goser () {
      if (this.memberinfo.name !== '成都陈家' || this.serform.name !== '成都陈家') {
        this.$message('没有该族谱的信息，请重新检查后输入!')
      } else {
        this.sertitle = this.serform.name + '  族谱信息查询结果'
        this.innerVisible = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.familymanage{
  width: 550px;
  height: 600px;
  position: relative;
  left: 450px;
  top: 100px;
  .title{
    span{
      font-size: 35px;
      position: relative;
      top: -22px;
      left: 100px;
    }
  }
  .buttons{
    background-color: #FAFBFC;
    margin-top: 30px;
    border-radius: 5%;
    .li1{
        height: 100px;
        .d1{
          padding-top: 20px;
        }
    }
    li{
      cursor: pointer;
        div{
          margin-top: 20px;
          margin-left: 40px;
        }
        height: 80px;
        line-height: 80px;
      span{
        font-size: 20px;
        position: relative;
        top: -14px;
        left: 50px;
      }
    }
    .bor{
      border-bottom: 10px solid #9EA6B7;
    }
  }
}
.data1,.data2{
  li{
    float: left;
    width: 59px;
  }
}
.data1{
  width: 600px;
  height: 60px;
  li{
    border: 1px solid beige;
  }
}
.data2{
  width: 580px;
  height: 150px;
  li{
    border: 1px solid beige;
    height: 150px;
  }
}
</style>
