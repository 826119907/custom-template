<template>
 <div id="user-delails">
     <el-button type="primary" size="mini" class="back-btn">返回</el-button>
  <el-card class="path-delails-card">
    <div slot="header">
         <span>途径调查</span>
    </div>
    <div>
        <el-row class="el-row">
          <el-col :span="6" class="el-col-left">您是通过什么渠道了解到我们？</el-col>
          <el-col :span="18" class="el-col-right">你猜</el-col>
        </el-row>
        <el-row class="el-row">
          <el-col :span="6" class="el-col-left">您加入海归之家主要需要哪些帮助？</el-col>
          <el-col :span="18" class="el-col-right">你猜</el-col>
        </el-row>
    </div>
  </el-card>
  <el-card class="path-delails-card">
    <div slot="header">
     <span>基础信息</span>
    </div>
  </el-card>
  <el-card class="path-delails-card">
    <div slot="header">
     <span>教育背景</span>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-col :span="8" >海归背景：</el-col>
            <el-col :span="16">华侨女子</el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-col :span="8">留学国家：</el-col>
            <el-col :span="16">日本</el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-col :span="8">出国时间：</el-col>
            <el-col :span="16">2007.05</el-col>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
  <el-card class="path-delails-card">
    <div slot="header">
     <span>社会背景</span>
    </div>
  </el-card>
  <el-card class="path-delails-card">
    <div slot="header">
     <span>备注</span>
    </div>
  </el-card>
 </div>
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
      option: ''
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
      this.$router.push({ name: 'memberManagementDetails', params: { ...row } })
    }
  }
}
</script>

<style scoped>
   .el-row {
       padding-top: 10px;
   }
   .path-delails-card {
       margin-top: 10px;
   }
   .back-btn{
       margin-top: 15px;
   }
</style>
