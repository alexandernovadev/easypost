import { IUser } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/interfaces/user.repository.interface'
import mongoose, { Schema, Document, model } from 'mongoose'

export interface IMongoUser extends Document, IUser {}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Number },
})

const User = model<IMongoUser>('User', UserSchema)

export class UserRepository implements IUserRepository {
  async getAll(): Promise<IUser[]> {
    return await User.find()
  }

  async get(id: string): Promise<IUser | null> {
    return await User.findById(id)
  }

  async create(user: IUser): Promise<IUser> {
    return await User.create(user)
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user, { new: true })
  }

  async delete(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id)
  }

  async findUserByEmail(email: string): Promise<IUser | undefined> {
    const user = await User.findOne({ email })
    return user || undefined
  }
}
