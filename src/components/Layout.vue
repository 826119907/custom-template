<template>
  <el-container style="height: 100vh" id="app">
    <el-aside width="" style="overflow: visible">
      <Navbar
        :collapse="collapse"
      />
    </el-aside>
    <el-container>
      <el-header style="overflow: visible">
        <Header
          :collapse="collapse"
          v-on:toggle="collapse = $event"
        />
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="breadcrumb in breadcrumbList" :key="breadcrumb.name"
            :to="{ path: breadcrumb.path || '' }"
          >
            {{breadcrumb.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar'
import Header from './Header'

export default {
  name: 'Layout',
  data () {
    return {
      collapse: false
    }
  },
  components: {
    Navbar,
    Header
  },
  computed: {
    breadcrumbList () {
      let currentBreadcrumbs = this.$route.meta.breadcrumbs || []
      return currentBreadcrumbs.concat([{ name: this.$route.meta.name }])
    }
  }
}
</script>

<style scoped>

</style>
