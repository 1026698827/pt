<script setup lang="ts">
import layoutAside from './components/layoutAside.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutMain from './components/layoutMain.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header>
          <layout-header></layout-header>
        </el-header>
        <el-main>
          <layout-main></layout-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-main {
  padding: 0;
}
.el-header {
  padding: 0;
}
</style>
