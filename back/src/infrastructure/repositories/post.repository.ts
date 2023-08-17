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
    required: true
  }, // esto asume que tienes un modelo 'User' en tu base de datos de MongoDB
})

const Post = model<IMongoPost>('Post', PostSchema)

export class PostRepository implements IPostRepository {
  async getAll(): Promise<IPost[]> {
    return await Post.find().populate('user') // .populate('user') si deseas obtener detalles completos del usuario
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
