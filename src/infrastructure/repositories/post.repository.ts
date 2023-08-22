import { IPost, IPostMock } from '../../domain/entities/post.entity'
import { IPostRepository } from '../../domain/interfaces/post.repository.interface'
import mongoose, { Schema, Document, model } from 'mongoose'

export interface IMongoPost extends Document, IPost {}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createAt: { type: Date, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, 
})

const Post = model<IMongoPost>('Post', PostSchema)

export class PostRepository implements IPostRepository {
  async getAll(filters?: {
    title?: string
    createAt?: string
    user?: string
    limit?: number
    page?: number
  }): Promise<{ posts: IPost[]; totalCount: number }> {
    const query: any = {}
    if (filters?.title) {
      query.title = new RegExp(filters.title.toLowerCase(), 'i')
    }

    if (filters?.createAt) {
      const startDate = new Date(filters.createAt)
      startDate.setHours(0, 0, 0, 0)
      query.createAt = { $gte: startDate }
    }

    if (filters?.user) {
      query.user = filters.user
    }

    const limit = filters?.limit || 10
    const offset = filters?.page ? (filters.page - 1) * limit : 0

    const posts = await Post.find(query)
      .skip(offset)
      .limit(limit)
      .populate('user')
    const totalCount = await Post.countDocuments(query)

    return { posts, totalCount }
  }

  async get(id: string): Promise<IPost | null> {
    return await Post.findById(id).populate('user')
  }

  async create(post: IPost): Promise<IPost> {
    return await Post.create(post)
  }

  async update(id: string, post: IPost): Promise<IPost | null> {
    return await Post.findByIdAndUpdate(id, post, { new: true })
  }

  async delete(id: string): Promise<IPost | null> {
    return await Post.findByIdAndDelete(id)
  }


  async inserManyPosts(posts: Array<IPostMock>): Promise<Array<IPostMock> | undefined> {
    const userPostsMany = await Post.insertMany(posts)

    return userPostsMany
  }
}
