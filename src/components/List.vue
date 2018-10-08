<template>
  <div class="common-list">
    <div class="listName">
      <slot name="listName"/>
    </div>
    <div class="header">
      <el-form :inline="true" :rules="searchRules" ref="searchForm" :model="searchForm" class="search-form" label-position="right" label-width="80px" size="small">
        <slot name="form"></slot>
        <slot name="action">
          <el-button type="primary" @click="handleSubmit" size="small">搜索</el-button>
          <el-button @click="reset" size="small">清空</el-button>
          <!-- <el-button @click="refreshCurrentPage" size="small">刷新</el-button> -->
        </slot>
        <div class="action-wrapper">
          <slot name="extra-action"/>
        </div>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      border
      v-loading="loadingList"
      element-loading-text="拼命加载中"
      style="width: 100%"
      stripe
      ref="table"
    >
      <slot name="table"></slot>
    </el-table>
    <div class="padding">
      <slot name="footer-action"/>
    </div>
    <el-row v-if="showPagination">
      <div class="block">
        <el-pagination
          background
          :current-page="currentPage"
          :page-size="pagesize"
          :page-sizes="pageSizes"
          :layout="pageLayout"
          :total="totalCount"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        >
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    searchRules: Object,
    searchForm: Object,
    params: {
      type: Object,
      default () {
        return {
          page: 1,
          pagesize: 20
        }
      }
    },
    showPagination: {
      type: Boolean,
      default () {
        return true
      }
    },
    pageSizes: {
      type: Array,
      default () {
        return [20, 30, 50]
      }
    },
    pageLayout: {
      type: String,
      default: 'total, prev, pager, next, jumper'
    },
    fetchList: {
      type: Function,
      required: true
    },
    targetId: {
      type: Number,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      tableData: [],
      totalCount: 0,
      pagesize: 20,
      currentPage: 1,
      loadingList: true
    }
  },
  beforeCreated () {
    this.pagesize = this.params.pagesize
  },
  mounted () {
    if (this.tableData.length === 0) {
      this.fetch()
    }
  },
  methods: {
    fetch (data = {}) {
      this.loadingList = true
      const params = this.targetId ? Object.assign(this.params, this.searchForm, data, { id: this.targetId }) : Object.assign(this.params, this.searchForm, data)
      this.fetchList(params)
        .then(data => {
          this.tableData = data.content || data.data || data || []
          this.totalCount = data.meta ? data.meta.total : this.tableData.length
          this.loadingList = false
        })
        .catch(() => {
          this.loadingList = false
        })
    },
    refreshList () {
      const page = (this.currentPage = 1)
      this.fetch({ page })
    },
    refreshCurrentPage () {
      this.fetch()
    },
    handleSizeChange (pagesize) {
      this.pagesize = pagesize
      this.fetch({ pagesize })
    },
    handleCurrentChange (page) {
      this.currentPage = page
      this.fetch({ page })
    },
    handleSubmit () {
      if (this.rules) {
        this.$refs.searchForm.validate(valid => {
          if (valid) {
            this.submit()
          } else {
            return false
          }
        })
      } else {
        this.submit()
      }
    },
    submit () {
      this.currentPage = 1
      const page = this.currentPage
      this.fetch({ page })
    },
    reset () {
      this.$refs.searchForm.resetFields()
      this.refreshList()
    }
  }
}
</script>
<style lang="less">
.common-list {
  padding: 30px 30px;
  background: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  .search-form {
    /deep/ .el-input .el-input__inner {
      width: 150px;
    }
  }
  .el-pagination {
    text-align: right;
    margin-top: 1em;
  }
  .el-form-item__label {
    text-align: left;
  }
  .action-wrapper {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 16px;
  }
  .padding {
    margin-top: 8px;
  }
}
</style>
