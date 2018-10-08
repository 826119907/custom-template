<template>
<section id="user-page">
  <el-dialog title="批量导入数据" :visible.sync="importDialog" width="30%">
    <el-upload
      drag
      multiple
      :auto-upload="false"
      :file-list="uploadFiles"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/">
      <div class="el-upload__body">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em> 点击上传</em></div>
      </div>
    </el-upload>
    <template slot="footer">
      <el-button @click="importDialog = false">取 消</el-button>
      <el-button @click="importSubmit" type="primary">点击上传</el-button>
    </template>
  </el-dialog>
  <el-card>
    <div slot="header">
      <span>会员管理</span>
      <div class="text-right">
        <el-button type="primary" @click="importDialog = true">导入数据</el-button>
      </div>
    </div>
    <List
      :fetchList="getAttendanceList"
      :searchForm="searchForm"
      ref="list">
      <template slot="form">
        <el-form-item label="活动区域:" prop="">
        <el-select  v-model="option" placeholder="请选择活动区域">
          <el-option label="全部" value="0"></el-option>
          <el-option label="启用" value="1"></el-option>
          <el-option label="禁用" value="2"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item prop="match">
          <el-input
            width="90px"
            v-model="searchForm.match"
            placeholder="请输入关键字搜索"
          />
        </el-form-item>
      </template>

      <template slot="table">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="姓名" prop="" align="center"></el-table-column>
        <el-table-column label="手机号" prop="" align="center"></el-table-column>
        <el-table-column label="学历" prop="" align="center"></el-table-column>
        <el-table-column label="国籍" prop="" align="center"></el-table-column>
        <el-table-column label="毕业院校" prop="" align="center"></el-table-column>
        <el-table-column label="状态" prop="" align="center"></el-table-column>
        <el-table-column label="语言" prop="" align="center"></el-table-column>
        <el-table-column label="注册时间" prop="" align="center"></el-table-column>
        <el-table-column label="最近活动时间" prop="" align="center"></el-table-column>
        <el-table-column label="操作" prop="" align="center">
          <template slot-scope="scope" >
            <el-button type="text" @click="activityData(scope.row)" class="pointer">活 动 数 据</el-button>
            <el-button type="text" @click="checkData(scope.row)" class="pointer">详 情</el-button>
            <el-button type="text" @click="deleeteData(scope.row)" class="pointer">删 除</el-button>
          </template>
        </el-table-column>
      </template>
    </List>
  </el-card>
</section>
</template>

<script>
import List from '@/components/List'
// import d from 'dayjs'

export default {
  name: 'Attendance',
  components: {
    List
  },
  data () {
    return {
      searchForm: { match: undefined },
      option: '0',
      importDialog: false,
      uploadFiles: []
    }
  },
  methods: {
    getAttendanceList (params) {
      return Promise.resolve([])
    },
    checkData () {

    },
    deleeteData () {

    },
    activityData (row) {
      this.$router.push({ name: '', params: { ...row } })
    },
    importSubmit () {
      this.$refs.upload.submit()
    }
  }
}
</script>

<style lang="less">
#user-page {
  .el-upload {
    width: 100%;
    .el-upload-dragger {
      width: 80%;
      margin: 0 auto;
      height: 230px;
      &::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .el-upload__body {
        display: inline-block;
        vertical-align: middle;
        .el-icon-upload {
          margin: 0;
        }
        .el-upload__text {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
