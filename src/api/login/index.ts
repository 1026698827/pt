import request from '@/utils/request'
import type { userInfoType } from '@/types/Login/index.d.ts'
const userLogin = (data: object) => {
  return request<userInfoType>('/api/login', 'post', data)
}
export { userLogin }
