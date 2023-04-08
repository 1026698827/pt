<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus'
import type { loginType } from '@/types/Login/'
// 导入登录接口
import { userLogin } from '@/api/login'
import router from '@/router'
// 导入pinia的方法
import { useUserStore } from '@/stores'
const store = useUserStore()
const ruleForm = reactive<loginType>({
  password: '',
  username: ''
})
// 定义校验规则
const validateAdmin = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('您还没输入你的账号呢，亲！'))
  } else if (value.length !== 5) {
    callback(new Error('您输入的不规范，账号长度应该为5位。'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules>({
  username: [{ validator: validateAdmin, trigger: 'blur' }],
  password: [
    {
      min: 1,
      max: 6,
      message: '您输入的不规范。长度为1-6位',
      trigger: 'blur'
    },
    { required: true, message: '您还没输入你的密码呢，亲！' }
  ]
})
// 定义按钮状态
const isLoading = ref<boolean>(false)
// 获取表单元素
const ruleFormRef = ref<FormInstance>()
// 登录兜底校验
const submitForm = (formEl: FormInstance | undefined) => {
  isLoading.value = true
  if (!formEl) return
  formEl.validate(async (value) => {
    if (value) {
      //
      const res = await userLogin(ruleForm)
      // console.log(res)
      if (res.message === 'success') {
        ElMessage.success('登录成功')
        // 存储用户信息
        store.setUser(res.data)
        router.push('/')
      } else {
        isLoading.value = false
        ElMessage.error(res.message)
      }
    } else {
      isLoading.value = false
    }
  })
}
</script>
<template>
  <div class="loginBox">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      class="demo-ruleForm"
      label-position="top"
      :rules="rules"
    >
      <h2>Login</h2>

      <el-form-item label-width="80px" label="账号" prop="username">
        <el-input
          v-model="ruleForm.username"
          type="username"
          class="elInput"
          autocomplete="off"
          size="large"
        />
      </el-form-item>
      <el-form-item label-width="80px" label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          size="large"
          :show-password="true"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn">
          <el-button
            :loading="isLoading"
            @click="submitForm(ruleFormRef)"
            type="default"
            >登录</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.loginBox {
  // position: fixed;
  // left: 0px;
  // top: 0px;
  width: 100%;
  height: 100vh;
  background: url('@/assets/img/下载.png');
  // background-size: 100% 100%;
  // background-position: ;
  background-color: #ffffff;
  position: fixed;
  text-align: center;
  padding: 1px;
}
.demo-ruleForm {
  width: 500px;
  margin: 200px auto;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #c7c7cd;
  background: rgba(255, 255, 255, 0.7);
}

h2 {
  margin-bottom: 20px;
}
:deep(.el-input__wrapper) {
  border-radius: 25px;
  height: 50px;
}

.btn {
  width: 100%;
  padding-top: 50px;
  :deep(.el-button) {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    color: #ffffff;
    // background-color: #ffffff;
    background-color: #e45866;
    border-color: #c7c7cd;
  }
  .el-button:hover,
  .el-button:focus {
    background: #ec1f34;
  }
}
</style>
