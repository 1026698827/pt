<script setup lang="ts"></script>

<template>
  <div>
    <ElAside>
      <ElScrollbar>
        <ElMenu
          router
          unique-opened
          active-text-color="#cf6567"
          default-active="/homePage"
        >
          <a href="/login" class="logo">
            <img src="@/assets/logo.svg" />
            <h1>商家后台管理系统</h1>
          </a>
          <el-sub-menu index="1">
            <template #title>
              <i-ep-Monitor></i-ep-Monitor>
              <span>首页</span>
            </template>
            <el-menu-item index="/homePage">
              <i-ep-DataAnalysis></i-ep-DataAnalysis>
              <span>数据台</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <i-ep-Crop></i-ep-Crop>
              <span>业务管理</span>
            </template>
            <el-menu-item index="/Identity">
              <i-ep-Postcard></i-ep-Postcard>
              <span>实名认证</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <i-ep-Avatar></i-ep-Avatar>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/userList">
              <i-ep-Document></i-ep-Document>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="/userInfo">
              <i-ep-User></i-ep-User>
              <span>用户信息</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <i-ep-Goods></i-ep-Goods>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/release">
              <i-ep-Sell></i-ep-Sell>
              <span>发布商品</span>
            </el-menu-item>
            <el-menu-item index="/goodSList">
              <i-ep-ShoppingBag></i-ep-ShoppingBag>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="/classification">
              <i-ep-ShoppingTrolley></i-ep-ShoppingTrolley>
              <span>商品分类</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <i-ep-List></i-ep-List>
              <span>订单管理</span>
            </template>
            <el-menu-item index="/orderList">
              <i-ep-Checked></i-ep-Checked>
              <span>订单列表</span>
            </el-menu-item>
            <el-menu-item index="/orderFaild">
              <i-ep-Failed></i-ep-Failed>
              <span>退还列表</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <i-ep-Tools></i-ep-Tools>
              <span>系统设置</span>
            </template>
            <el-menu-item index="/power">
              <i-ep-Menu></i-ep-Menu>
              <span>权限设置</span>
            </el-menu-item>
          </el-sub-menu>
        </ElMenu>
      </ElScrollbar>
    </ElAside>
  </div>
</template>

<style lang="scss" scoped>
$asideColor: #eee;
.el-aside {
  width: auto;
  height: 100vh;
  margin-right: 10px;
  // box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  border-right: 1px solid #dddfe6;

  .el-menu {
    width: 200px;
    border-right: none;
    &.el-menu--collapse {
      width: 60px;
      height: 100%;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    counter-reset: #cf6567;
    height: 60px;
    img {
      width: 32px;
      height: 32px;
    }
    h1 {
      color: black;
    }
  }
}
svg {
  margin-right: 5px;
}
</style>
