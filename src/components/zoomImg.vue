<template>
  <section id="zoomImg">
    <el-dialog class="zoom_img" top="25vh" :show-close="false" @closed="$emit('closed')" :visible.sync="zoom">
      <div class="zoom_img_wrap">
        <img :src="url" alt="">
        <i class="el-icon-close" @click="zoom = false" />
      </div>
    </el-dialog>
    <div class="img-wrap pointer" @mouseover="mouseover" @mouseout="mouseout">
      <img  v-if="url"  @error="loadError" :src="url">
      <span v-if="!url" class="pic-text">{{picText}}</span>
      <transition enter-active-class="animated fadeIn mask-in" leave-active-class="animated fadeOut mask-out">
        <i v-show="icon" class="mask" />
      </transition>
      <transition enter-active-class="animated fadeIn icon-in" leave-active-class="animated fadeOut icon-out">
        <i v-show="icon" @click="zoom = true" class="el-icon-zoom-in" />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
      require: true
    },
    loadErrorUrl: {
      type: String,
      default: 'http://www.gx8899.com/uploads/allimg/2017080704/wbdeckxf0h.jpg'
    },
    picText: {
      type: String,
      default: '图片未上传'
    }
  },
  data () {
    return {
      icon: false,
      zoom: false,
      isError: false
    }
  },
  created () {
    if (!this.url) {
      this.isError = true
    }
  },
  methods: {
    loadError () {
      this.isError = true
      this.url = this.loadErrorUrl
      this.$emit('loadError')
    },
    mouseover () {
      if (this.isError) return
      this.icon = true
    },
    mouseout () {
      if (this.isError) return
      this.icon = false
    }
  }
}
</script>

<style lang="less">
  #zoomImg {
    .zoom_img {
      .el-dialog {
        background: none;
        box-shadow: none;
        text-align: center;
        width: 450px;
        height: 450px;
        border-radius: 5px;
      }
      .el-dialog__header {
        display: none;
      }
      .el-dialog__body {
        padding: 0;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .zoom_img_wrap {
      .el-icon-close {
        position: fixed;
        top: 0;
        right: 0;
        font-size: 60px;
        color: white;
        background-color: rgba(0, 0, 0, .3);
        border-bottom-left-radius: 100%;
        width: 100px;
        height: 100px;
        line-height: 100px;
        cursor: pointer;
        &::before {
          display: inline-block;
          transform: translate(25%, -10%);
        }
      }
    }
    .img-wrap {
      display: inline-block;
      margin-right: 60px;
      position: relative;
      width: 150px;
      height: 150px;
      vertical-align: text-top;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      .el-icon-zoom-in {
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        font-size: 30px;
        border: 5px solid transparent;
        z-index: 2;
        transform: translate(-50%, -50%);
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 1;
      }
    }
    .pointer {
      cursor: pointer;
    }
    .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .animated.mask-in {
      -webkit-animation-duration: 300ms;
      animation-duration: 300ms;
    }
    .animated.icon-in {
      -webkit-animation-duration: 500ms;
      animation-duration: 500ms;
    }
    .animated.icon-out {
      -webkit-animation-duration: 300ms;
      animation-duration: 300ms;
    }
    .animated.mask-out {
      -webkit-animation-duration: 500ms;
      animation-duration: 500ms;
    }
    @-webkit-keyframes fadeIn {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      } to {
        opacity: 1;
      }
    }
    .fadeIn {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
    }
    @-webkit-keyframes fadeOut {
      from {
        opacity: 1;
      } to {
        opacity: 0;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      } to {
        opacity: 0;
      }
    }
    .fadeOut {
      -webkit-animation-name: fadeOut;
      animation-name: fadeOut;
    }
  }
</style>
