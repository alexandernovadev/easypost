import { User } from '../../../../interfaces/User'

export interface CardPostProps {
  text?: string
  content?: string
  date?: Date
  user?: User | null | undefined
}
