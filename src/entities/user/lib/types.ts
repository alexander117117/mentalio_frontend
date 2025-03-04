export interface Credentials {
  login: string
  password: string
}

export interface UserRole {
  id: number
  role_name: string
  permissions: number[]
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  avatar: string
  icon: string
  role: UserRole
  role_permissions: string[]
}
