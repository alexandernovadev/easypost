import { IUser } from './../../../../../../back/src/domain/entities/user.entity'
export interface CardPostProps {
  text?: string
  content?: string
  date?: number | string
  user?: IUser | null 
}
