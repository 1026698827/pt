<script setup lang="ts">
import layoutAside from './components/layoutAside.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutMain from './components/layoutMain.vue'
</script>
<template>
  <el-scrollbar>
    <div class="common-layout">
      <el-container>
        <el-aside width="auto">
          <layout-aside></layout-aside>
        </el-aside>
        <el-container>
          <el-header>
            <layout-header></layout-header>
          </el-header>

          <el-main
            ><el-scrollbar> <layout-main></layout-main> </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-scrollbar>
</template>
<style lang="scss" scoped>
.common-layout {
  overflow: hidden;
}
.el-aside {
  position: relative;
}
.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  min-width: 1680px;
  overflow-y: scroll;
  // padding-top: 100px;
  overflow: hidden;
}
.el-header {
  position: relative;
  max-width: 1720px;
  min-width: 1200px;
  // margin-left: -10px;
  // padding-left: 30px;
  border-bottom: 1px solid #dddfe6;
  // box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  overflow: visible;
}
</style>
