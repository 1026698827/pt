<script setup lang="ts"></script>

<template>
  <div>
    <el-link :underline="false" href="/" type="danger"
      >callback PageHome</el-link
    >
  </div>
</template>

<style lang="scss" scoped>
div {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/c7b3c23e55924e8ab4eaef28c5cb402a.png');
  background-size: 100% 100%;
  text-align: center;
  line-height: 100vh;
  .el-link {
    font-size: 50px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
