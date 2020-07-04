<template>
  <div class="membermanage">
      <div class="all">
        <div class="title">
          <img src="../../assets/pic/maohao.png" alt="">
          <span>请选择功能</span>
        </div>
        <div class="buttons">
           <ul>
             <li @click="addmember" class="bor li1"><div class="d1"><img src="../../assets/pic/xixi.png" alt=""><span>增加家族成员</span></div></li>
             <li @click="delmember" class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>删除家族成员</span></div></li>
             <li @click="editmember" class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>修改家族成员</span></div></li>
             <li @click="sermember" ><div><img src="../../assets/pic/xixi.png" alt=""><span>查询家族成员信息</span></div></li>
           </ul>
        </div>
      </div>
      <!-- 增加成员 -->
      <el-dialog title="请输入新增的成员信息" :visible.sync="dialogFormVisible">
        <el-form :model="memberinfo">
          <el-form-item label="个人ID" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族id" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.familyid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="出生时间" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.birth" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="属于代数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否建在" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.alive" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="个人简介" :label-width="formLabelWidth" >
            <el-input v-model="memberinfo.intro" autocomplete="off" type="textarea"  :rows="3"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmadd">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 删除成员  -->
       <el-dialog title="请在下面要删除的家族成员名称或id" :visible.sync="delFormVisible">
         <el-form :model="delform">
          <el-form-item label="成员所属族谱ID" :label-width="formLabelWidth">
            <el-input v-model="delform.familyid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="待删除成员ID" :label-width="formLabelWidth">
            <el-input v-model="delform.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="待删除成员姓名" :label-width="formLabelWidth">
            <el-input v-model="delform.name" autocomplete="off"></el-input>
          </el-form-item>
         </el-form>
         <div slot="footer" class="dialog-footer">
          <el-button @click="delFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmdel">确 定</el-button>
        </div>
         </el-dialog>
      <!-- 修改成员 -->
      <el-dialog title="请输入要修改的成员信息" :visible.sync="editFormVisible">
        <el-form :model="memberinfo">
          <el-form-item label="个人ID" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家族id" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.familyid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="出生时间" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.birth" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="属于代数" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否建在" :label-width="formLabelWidth">
            <el-input v-model="memberinfo.alive" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="个人简介" :label-width="formLabelWidth" >
            <el-input v-model="memberinfo.intro" autocomplete="off" type="textarea"  :rows="3"></el-input>
          </el-form-item>
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
              <li>个人ID</li>
              <li>姓名</li>
              <li>姓氏</li>
              <li>性别</li>
              <li>家族id</li>
              <li>出生时间</li>
              <li>属于代数</li>
              <li>是否建在</li>
              <li>个人简介</li>
            </ul>
            <ul class="data2">
              <li>{{serform2.id}}</li>
              <li>{{serform2.name}}</li>
              <li>{{serform2.familyName}}</li>
              <li>{{serform2.sex}}</li>
              <li>{{serform2.familyid}}</li>
              <li>{{serform2.birth}}</li>
              <li>{{serform2.number}}</li>
              <li>{{serform2.alive}}</li>
              <li>{{serform2.intro}}</li>
            </ul>
          </el-dialog>
          <el-form :model="serform">
            <el-form-item label="个人ID" :label-width="formLabelWidth">
             <el-input v-model="serform.sid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家族ID" :label-width="formLabelWidth">
             <el-input v-model="serform.sfamilyid" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
             <el-input v-model="serform.sname" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
             <el-input v-model="serform.ssex" autocomplete="off"></el-input>
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
      serform1: {
        id: '001',
        name: '陈小美',
        familyName: '陈',
        sex: '女',
        familyid: '0002',
        birth: '2000-02-04',
        number: '16',
        alive: '是',
        intro: '一个默默无闻的人'
      },
      memberinfo: {
        id: '',
        name: '',
        sex: '',
        familyid: '',
        birth: '',
        number: '',
        alive: '',
        intro: ''
      },
      delform: {
        familyid: '',
        id: '',
        name: ''
      },
      serform: {
        sid: '',
        sfamilyid: '',
        sname: '',
        ssex: ''
      },
      dialogFormVisible: false,
      delFormVisible: false,
      editFormVisible: false,
      outerVisible: false,
      innerVisible: false,
      formLabelWidth: '120px',
      sertitle: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    addmember () {
      this.dialogFormVisible = true
    },
    confirmadd () {
      let _this = this
      _this.$confirm('确认添加吗？').then(() => {
        _this.$message({
          type: 'success',
          message: '添加成功!'
        })
        _this.dialogFormVisible = false
      })
      _this.serform.id = _this.memberinfo.id
      _this.serform.name = _this.memberinfo.name
      _this.serform.sex = _this.memberinfo.familyName
      _this.serform.familyid = _this.memberinfo.familyid
      _this.serform.birth = _this.memberinfo.birth
      _this.serform.number = _this.memberinfo.number
      _this.serform.alive = _this.memberinfo.alive
      _this.serform.intro = _this.memberinfo.intro
    },
    delmember () {
      this.delFormVisible = true
    },
    confirmdel () {
      let name = this.delform.name
      let id = this.delform.id
      let msg = '确认要删除id为：' + id + ' 姓名为：' + name + ' 的成员吗？'
      this.$confirm(msg).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.delFormVisible = false
        this.serform.sname = ''
        this.memberinfo.name = ''
      })
    },
    editmember () {
      this.editFormVisible = true
    },
    confirmedit () {
      this.$confirm('确认修改信息无误吗？').then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.editFormVisible = false
      })
      this.serform2.alive = '否'
      this.serform.sname = ''
    },
    sermember () {
      this.outerVisible = true
      this.serform.sname = ''
    },
    goser () {
      if (this.memberinfo.name !== '陈小美' || this.serform.sname !== '陈小美') {
        this.$message('没有该成员的信息，请重新检查后输入!')
      } else {
        this.sertitle = this.serform.name + ' 个人信息查询结果'
        this.innerVisible = true
      }
    }
  },
  computed: {
    serform2 () {
      return this.serform1
    }
  }
}
</script>

<style lang='scss' scoped>
.membermanage{
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
