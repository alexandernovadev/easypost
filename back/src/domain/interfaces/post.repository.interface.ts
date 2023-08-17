import { IPost } from '../../domain/entities/post.entity'

export interface IPostRepository {
  getAll(): Promise<IPost[]>
  get(id: string): Promise<IPost | null>
  create(post: IPost): Promise<IPost>
  update(id: string, post: IPost): Promise<IPost | null>
  delete(id: string): Promise<IPost | null>
}
