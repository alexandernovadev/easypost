import mongoose, { MongooseError } from 'mongoose'
import { IUser } from '../../domain/entities/user.entity'
import { NotFoundError } from '../../domain/errors/NotFoundError'
import { IUserRepository } from '../../domain/interfaces/user.repository.interface'
import { ValidationError } from '../../domain/errors/ValidationError'
import bcrypt from 'bcrypt'

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async getAllUsers() {
    return await this.userRepository.getAll()
  }

  async getUser(id: string) {
    const user = await this.userRepository.get(id)
    if (!user) {
      throw new NotFoundError(`User with ID ${id} not found`)
    }
    return user
  }

  async createUser(user: IUser) {
    try {
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(user.password, salt)

      return await this.userRepository.create(user)
    } catch (error) {
      if (error instanceof MongooseError) {
        throw new ValidationError(
          String(error.message.replace('User validation failed:', '').trim())
        )
      }
      throw error
    }
  }

  async updateUser(id: string, user: IUser) {
    return await this.userRepository.update(id, user)
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id)
  }

  async findUserByEmail(email: string): Promise<IUser | undefined> {
    return await this.userRepository.findUserByEmail(email)
  }
}
