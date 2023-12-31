import { IPost, IPostMock } from '../../domain/entities/post.entity'

export interface IPostRepository {
  getAll(filters?: {
    title?: string
    createAt?: string
    user?: string
    limit?: number
    page?: number
  }): Promise<{ posts: IPost[]; totalCount: number }>

  get(id: string): Promise<IPost | null>
  create(post: IPost): Promise<IPost>
  update(id: string, post: IPost): Promise<IPost | null>
  delete(id: string): Promise<IPost | null>
  inserManyPosts(posts: Array<IPostMock>): Promise<Array<IPostMock> | undefined>
}
