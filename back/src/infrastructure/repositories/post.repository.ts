import { IPost } from '../../domain/entities/post.entity'
import { IPostRepository } from '../../domain/interfaces/post.repository.interface'
import mongoose, { Schema, Document, model } from 'mongoose'

export interface IMongoPost extends Document, IPost {}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createAt: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, // esto asume que tienes un modelo 'User' en tu base de datos de MongoDB
})

const Post = model<IMongoPost>('Post', PostSchema)

export class PostRepository implements IPostRepository {
  async getAll(filters?: {
    title?: string
    createAt?: number
    user?: string
    limit?: number
    offset?: number
  }): Promise<{ posts: IPost[]; totalCount: number }> {
    const query: any = {}

    if (filters?.title) {
      query.title = new RegExp(filters.title.toLowerCase(), 'i')
      // i para hacer la búsqueda insensible a mayúsculas y minúsculas
    }

    if (filters?.createAt) {
      query.createAt = filters.createAt
    }

    if (filters?.user) {
      query.user = filters.user
    }

    const limit = filters?.limit || 10
    const offset = filters?.offset ? (filters.offset - 1) * limit : 0

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
}
