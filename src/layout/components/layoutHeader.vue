<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
let router = useRouter()
const store = useUserStore()
</script>
<template>
  <div class="headerBox">
    <div class="breadcrumb">
      <el-icon>
        <i-ep-Expand></i-ep-Expand>
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="router.currentRoute.value.matched[0]">
          {{ router.currentRoute.value.matched[0].meta.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="router.currentRoute.value.matched[1]">
          {{ router.currentRoute.value.matched[1].meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="UserInfo">
      <span class="avatarName">
        <el-avatar
          shape="square"
          :size="50"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span>
          <el-text>你好！{{ store.user?.name }},欢迎回来。</el-text>
          <br />
        </span>
      </span>
      <el-dropdown trigger="click">
        <el-icon class="el-icon--right">
          <i-ep-Tools />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ store.user?.username }}</el-dropdown-item>

            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//
.headerBox {
  height: 100%;
  .breadcrumb {
    float: left;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    .el-icon {
      margin-right: 5px;
    }
  }
  .UserInfo {
    height: 100%;
    float: right;
    display: flex;
    justify-content: start;
    align-items: center;
    .avatarName {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-right: 50px;
      .el-avatar {
        margin-right: 20px;
      }
    }
    .el-dropdown {
      .el-icon {
        font-size: 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>
