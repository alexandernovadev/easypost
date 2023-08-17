import { NotFoundError } from '../../domain/errors/NotFoundError'
import { IUser, IUserLogin } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/interfaces/user.repository.interface'
import bcrypt from 'bcrypt'
import { generateToken } from './auth.service'

export class SessionService {
  constructor(private userRepository: IUserRepository) {}

  async login({ email, password }: IUserLogin) {
    try {
      const user = await this.userRepository.findUserByEmail(email)
      if (!user) {
        throw new NotFoundError('Usuario no encontrado')
      }

      // Comparar la contraseña
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        throw new NotFoundError('Contraseña no encontrado')
      }

      // Generar y retornar un token JWT usando tu función generateToken
      // @ts-ignore
      const payload = { userId: user._id, email: user.email }
      return generateToken(payload)
    } catch (error) {
      throw new NotFoundError('Contraseña o Email no validos')
    }
  }

  async register(userData: IUser) {
    try {
      // Encriptar la contraseña
      const salt = await bcrypt.genSalt(10)
      userData.password = await bcrypt.hash(userData.password, salt)

      // Registrar el usuario

      const user = await this.userRepository.create(userData)
      // @ts-ignore
      const payload = { userId: user._id, email: user.email }
      return generateToken(payload)

      // return user;
    } catch (error) {
      throw new Error('Error al registrar el usuario.')
    }
  }
}
