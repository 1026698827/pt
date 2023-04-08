interface loginType {
  username: string
  password: string
}

interface userInfoType {
  username: string
  name: string
  password: string
  role: string
  roleId: string
  permissions: string | string[]
  token: string
}

export { loginType, userInfoType }
