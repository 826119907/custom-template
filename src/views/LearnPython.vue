<template>
 <el-card id="banner-page">
  <div slot="header">
    <span>banner管理</span>
  </div>
  <List
    :fetchList="getAttendanceList"
    :searchForm="searchForm"
    ref="list"
  >
    <template slot="form">
      <el-form-item prop="match">
        <el-input
          width="90px"
          v-model="searchForm.match"
          placeholder="请输入 姓名/工号 搜索"
        />
      </el-form-item>
    </template>

    <template slot="table">
      <el-table-column label="名称" prop="" align="center"></el-table-column>
      <el-table-column label="排序" prop="" align="center"></el-table-column>
      <el-table-column label="发布者" prop="" align="center"></el-table-column>
      <el-table-column label="状态" prop="" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="" align="center"></el-table-column>
      <el-table-column label="操作" prop="" align="center">
        <template slot-scope="scope" >
          <el-button type="text" @click="checkData(scope.row)" class="pointer">查 看</el-button>
          <el-button type="text" @click="deleeteData(scope.row)" class="pointer">删 除</el-button>
        </template>
      </el-table-column>
    </template>
  </List>
   </el-card>
</template>

<script>
import List from '../components/List'
// import d from 'dayjs'

export default {
  name: 'Attendance',
  components: {
    List
  },
  data () {
    return {
      searchForm: { match: undefined }
    }
  },
  methods: {
    getAttendanceList (params) {
      return Promise.resolve([])
    },
    checkData () {

    },
    deleeteData () {

    }
  }
}
</script>

<style scoped>
</style>
