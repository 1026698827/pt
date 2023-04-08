import type { MockMethod } from 'vite-plugin-mock'
import type { userInfoType } from '@/types/Login'
import Mock from 'mockjs'
const Random = Mock.Random
Random.cname()
Random.ctitle(3, 5)
// const timeout = 2000
const result_code = 200

const List: userInfoType[] = [
  {
    username: 'admin',
    name: Mock.mock('@cname'),
    password: '12345',
    role: 'admin',
    roleId: '1',
    permissions: ['*.*.*'],
    token: '123456789'
  },
  {
    username: 'test',
    password: 'test',
    name: Mock.mock('@cname'),
    role: 'test',
    roleId: '2',
    permissions: ['example:dialog:create', 'example:dialog:delete'],
    token: '987654321'
  }
]

export default [
  // 登录接口
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    response: ({ body }) => {
      const data = body
      let hasUser = false
      for (const user of List) {
        if (
          user.username === data.username &&
          user.password === data.password
        ) {
          hasUser = true
          return {
            code: result_code,
            message: 'success',
            data: user
          }
        }
      }
      if (!hasUser) {
        return {
          code: '500',
          message: '账号或密码错误'
        }
      }
    }
  },
  // 退出接口
  {
    url: '/api/loginOut',
    method: 'get',
    // timeout,
    response: () => {
      return {
        code: result_code,
        data: null
      }
    }
  }
  // // 列表接口
  // {
  //   url: '/user/list',
  //   method: 'get',
  //   response: ({ query }) => {
  //     const { username, pageIndex, pageSize } = query

  //     const mockList = List.filter((item) => {
  //       if (username && item.username.indexOf(username) < 0) return false
  //       return true
  //     })
  //     const pageList = mockList.filter(
  //       (_, index) =>
  //         index < pageSize * pageIndex && index >= pageSize * (pageIndex - 1)
  //     )

  //     return {
  //       code: 200,
  //       data: {
  //         total: mockList.length,
  //         list: pageList
  //       }
  //     }
  //   }
  // },
] as MockMethod[]
