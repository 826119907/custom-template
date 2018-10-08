<template>
  <el-menu
    id="navbar"
    v-bind:default-active="activeIndex"
    class="el-menu full-height el-menu-vertical"
    :router='true'
    :collapse="collapse"
    :style="style">
    <img
      id="logo"
      :src="imageSource"
      alt="logo"
      :class="{collapse}" />
    <el-submenu
      class="custom"
      index="learn">
      <template slot="title" class="class1-title">
        <i class="icon icon-merchant"></i>
        <span>平台管理</span>
      </template>
      <el-menu-item index="python" route="/learn/python">banner管理</el-menu-item>
    </el-submenu>
     <el-submenu
      class="custom"
      index="userManagement">
      <template slot="title" class="class1-title">
        <i class="icon icon-merchant"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="memberManagement" route="/memberManagement">会员管理</el-menu-item>
    </el-submenu>
    <el-menu-item
      class="custom"
      index="login"
      route="/login">
      <i class="icon icon-merchant"></i>
      <span slot="title">登录</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    collapse: Boolean
  },
  data: function () {
    return {
      selected: ''
    }
  },

  computed: {
    activeIndex () {
      const path = this.$route.path
      return path.substr(path.lastIndexOf('/') + 1)
    },
    style () {
      const width = this.collapse ? '' : '200px'
      return {
        width
      }
    },
    imageSource () {
      if (this.collapse) {
        return require('../assets/mini-logo.png')
      } else {
        return require('../assets/logo.png')
      }
    }
  },

  methods: {}
}
</script>

<style lang="less">
@import (reference)  "../styles/varible.less";

#navbar {
  left: 0;
  display: block;
  top: 0;
  height: 100%;
  background: @navbar-background;
  overflow: hidden;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05);
  .custom,
  .custom > .el-submenu__title {
    box-sizing: border-box;
    border-left: 3px solid transparent;
  }
  .custom.is-active.is-opened {
    & > .el-submenu__title {
      border-left: 3px solid @color-primary;
    }
    .el-menu .el-submenu__title {
      height: 40px;
      line-height: 40px;
      text-indent: 20px;
    }
  }
  .page{
    background-color: white;
  }
  .out-login-btn{
    position:absolute;
    line-height: 40px;
    text-align: center;
    right: 5px;
    top:40px;
    border: none;
    border-radius: 10px;
  }
  .buttonhappy{
    line-height: 40px;
    text-align: center;
    float: right;
    border-radius: 50%;
    border:none;
    padding:9px 20px;
  }
  .el-menu-vertical {
    border-right: none;
    box-shadow: 5px 0 4px #f5f5f5;
    z-index: 10;
    height: 100%;
    &:not(.el-menu--collapse) {
      width: 200px;
    }
    .logo {
      object-fit: contain;
      height: 41px;
      display: block;
      margin: 20px auto;
    }
    .el-menu-item {
      width: 100%;
      svg {
        margin-right: 10px;
      }
      &.is-active {
        background-color: #393F64 !important;
        border-left: 3px solid @color-primary;
      }
    }
    .el-submenu {
      svg {
        margin-right: 10px;
      }
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        background-color: @el-menu-item !important;
        text-align: left;
      }
    }
  }
  .el-menu-item {
    border-left: 20px solid transparent;
    height: 40px;
    line-height: 40px;
  }
  .el-header {
    background-color:@el-header-background-color;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid @color-border;
    .icon-menu-fold {
      width: 24px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
    }
    .icon-refresh {
      width: 24px;
      display: inline-block;
      cursor: pointer;
      vertical-align: middle;
      margin-left: 1em;
    }
  }
  .el-main {
    background: @color-bg;
  }
  .el-breadcrumb {
    margin-bottom: 1rem;
  }
}

#logo {
  padding: 15px 0;
  margin: 0 auto;
  width: 96px;
  display: block;
  &.collapse {
    width: auto;
  }
}

.el-menu {
  border: none;
  text-align: left;
}

.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}

.icon-merchant {
  background-image: url('../assets/icon/icon_nav_01_n@2x.png');
}

.is-active {
  .icon-merchant {
    background-image: url('../assets/icon/icon_nav_01_p@2x.png');
  }
}
</style>
