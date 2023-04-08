<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
let router = useRouter()
const store = useUserStore()

console.log('router', router.currentRoute.value)
</script>
<template>
  <el-card class="box-card">
    <el-header>
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
    </el-header>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {
  margin-top: 10px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .breadcrumb {
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .UserInfo {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatarName {
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        margin-right: 10px;
      }
    }
    .el-dropdown {
      .el-icon--right {
        font-size: 30px;
        color: #97979e;
      }
    }
  }
}
</style>
