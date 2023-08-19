import { User } from './User'

export interface Post {
  id_?: number | string
  title?: string
  content?: string
  createAt?: number
  user?: string | User 
}
