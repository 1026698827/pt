import type { userInfoType } from '@/types/Login'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const user = ref<userInfoType>()
    // 登录设置用户
    const setUser = (u: userInfoType) => {
      user.value = u
    }
    // 清空用户
    const delUser = () => {
      user.value = undefined
    }

    return { user, setUser, delUser }
  },
  {
    persist: true
  }
)
