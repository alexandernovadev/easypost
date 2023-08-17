import { NotFoundError } from '../../domain/errors/NotFoundError'
import { IPost } from '../../domain/entities/post.entity'
import { IPostRepository } from '../../domain/interfaces/post.repository.interface'

export class PostService {
  constructor(private postRepository: IPostRepository) {}

  async getAllPosts(filters?: {
    title?: string
    createAt?: number
    user?: string
  }): Promise<IPost[]> {
    return await this.postRepository.getAll(filters)
  }

  async getPost(id: string): Promise<IPost> {
    const post = await this.postRepository.get(id)
    if (!post) {
      throw new NotFoundError(`Post with ID ${id} not found`)
    }
    return post
  }

  async createPost(post: IPost): Promise<IPost> {
    return await this.postRepository.create(post)
  }

  async updatePost(id: string, post: IPost): Promise<IPost | null> {
    return await this.postRepository.update(id, post)
  }

  async deletePost(id: string): Promise<IPost | null> {
    return await this.postRepository.delete(id)
  }
}
