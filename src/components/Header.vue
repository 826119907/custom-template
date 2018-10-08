<template>
  <div id="header">
    <img
      class="fas"
      src="../assets/menufold.png"
      @click="toggleNavbar"
    />
    <div class="flex-spacer"/>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    collapse: Boolean
  },
  methods: {
    toggleNavbar () {
      this.$emit('toggle', !this.collapse)
    }
  }
}
</script>

<style lang="less" scoped>
#header {
  background: white;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  flex-direction: row;

  .flex-spacer {
    flex-grow: 10;
  }

  i {
    font-size: 24px;
    width: 24px;
    height: 24px;
    padding: 18px 20px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: silver;
    }
  }

}
.fas {
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 15px;
}
</style>
