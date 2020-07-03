<template>
  <div class="basicmanage">
      <div class="all">
        <div class="title">
          <img src="../../assets/pic/sec.png" alt="">
          <span>请选择查找信息</span>
        </div>
        <div class="secform">
          <el-form ref="memberinfo" :model="memberinfo" label-width="80px">
            <el-form-item label="个人id">
              <el-input v-model="memberinfo.id" placeholder="请输入个人id"></el-input>
            </el-form-item>
            <el-form-item label="家族id">
              <el-input v-model="memberinfo.familyid" placeholder="请输入家族id"></el-input>
            </el-form-item>
            <el-form-item label="姓名" >
              <el-input v-model="memberinfo.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
               <el-radio v-model="memberinfo.sex" label="男">男</el-radio>
               <el-radio v-model="memberinfo.sex" label="女">女</el-radio>
            </el-form-item>
          </el-form>
        </div>
        <div class="title">
          <img src="../../assets/pic/sec.png" alt="">
          <span>请选择查找功能</span>
        </div>
        <div class="buttons">
           <ul>
             <li @click='serrelation' class="bor li1"><div class="d1"><img src="../../assets/pic/xixi.png" alt=""><span>查询近亲</span></div></li>
             <li @click='serfenzi' class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>查询分支</span></div></li>
             <li @click='sermoment' class="bor"><div><img src="../../assets/pic/xixi.png" alt=""><span>查询重大事件</span></div></li>
             <li @click='sertree'><div><img src="../../assets/pic/xixi.png" alt=""><span>查询族谱全貌</span></div></li>
           </ul>
        </div>
      </div>
      <!-- 近亲查询结果-->
       <el-dialog :title="diatitle" :visible.sync="relationVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="个人id" ></el-table-column>
          <el-table-column property="date" label="姓名" ></el-table-column>
          <el-table-column property="date" label="性别" ></el-table-column>
          <el-table-column property="date" label="个人简介" ></el-table-column>
          <el-table-column property="date" label="出生日期" ></el-table-column>
          <el-table-column property="date" label="是否健在" ></el-table-column>
          <el-table-column property="name" label="关系" ></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="relationVisible = false">取 消</el-button>
          <el-button type="primary" @click="relationVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 分支查询结果-->
      <el-dialog :title="diatitle" :visible.sync="fenziVisible">
        我是分支查询结果
        <div slot="footer" class="dialog-footer">
          <el-button @click="fenziVisible = false">取 消</el-button>
          <el-button type="primary" @click="fenziVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 重大事件查询结果-->
      <el-dialog :title="diatitle" :visible.sync="bigVisible">
        <el-table :data="gridData">
          <el-table-column property="date" label="姓名" ></el-table-column>
          <el-table-column property="date" label="性别" ></el-table-column>
          <el-table-column property="date" label="事件" ></el-table-column>
          <el-table-column property="date" label="重大事件" ></el-table-column>
          <el-table-column property="date" label="发生日期" ></el-table-column>
          <el-table-column property="name" label="发生地点" ></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="bigVisible = false">取 消</el-button>
          <el-button type="primary" @click="bigVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 族谱树形图-->
      <el-dialog :title="diatitle" :visible.sync="treeVisible">
        <el-tree default-expand-all :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <div slot="footer" class="dialog-footer">
          <el-button @click="treeVisible = false">取 消</el-button>
          <el-button type="primary" @click="treeVisible = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      memberinfo: {
        id: '',
        familyid: '',
        name: '',
        sex: ''
      },
      name: '谭哈哈',
      id: '0020005',
      diatitle: '',
      relationVisible: false,
      fenziVisible: false,
      bigVisible: false,
      treeVisible: false,
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    serrelation () {
      this.relationVisible = true
      this.diatitle = '您好！ ' + '个人ID为' + this.id + '的' + this.name + '。这是您查询的近亲：'
    },
    serfenzi () {
      this.fenziVisible = true
      this.diatitle = '您好！ ' + '个人ID为' + this.id + '的' + this.name + '。这是您查询的分支信息：'
    },
    sermoment () {
      this.bigVisible = true
      this.diatitle = '您好！ ' + '个人ID为' + this.id + '的' + this.name + '。这是您查询的重大事件：'
    },
    sertree () {
      this.treeVisible = true
      this.diatitle = '您好！ ' + '个人ID为' + this.id + '的' + this.name + '。这是您查询的树形图信息：'
    },
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style lang='scss' scoped>
.basicmanage{
  .secform{
    width: 550px;
    height: 200px;
    background-color: #FAFBFC;
  }
  width: 550px;
  height: 600px;
  position: relative;
  left: 450px;
  top: 10px;
  .el-form{
    width: 350px;
    .el-form-item{
      margin-bottom: 10px;
    }
  }
  .title{
    margin-top: 20px;
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
</style>
