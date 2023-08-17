import { IUser } from '../entities/user.entity'

export interface IUserRepository {
  getAll(): Promise<IUser[]>
  get(id: string): Promise<IUser | null>
  create(task: IUser): Promise<IUser>
  update(id: string, task: IUser): Promise<IUser | null>
  delete(id: string): Promise<IUser | null>
}
