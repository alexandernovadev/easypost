import { User } from '../../../../interfaces/User'

export interface CardPostProps {
  text?: string
  content?: string
  date?: number | string
  user?: User | null | undefined
}
