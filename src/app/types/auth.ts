import { IUser } from './user'

export interface AuthState {
  user: IUser | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export interface AuthResponse {
  user: IUser
  token: string
}
