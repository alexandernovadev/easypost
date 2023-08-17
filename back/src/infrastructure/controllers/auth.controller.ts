import { NextFunction, Request, Response } from 'express'
import { UserRepository } from '../repositories/user.repository'
import { SessionService } from '../../application/services/session.service'
import { NotFoundError } from '../../domain/errors/NotFoundError'

const sessionService = new SessionService(new UserRepository())

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' })
    }

    const token = await sessionService.login({ email, password })

    return res.status(200).json({ token })
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message })
    }
    // Pasa el error al middleware de errores
    next(error)
  }
}

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body
    const usertoken = await sessionService.register(userData)

    return res.status(201).json({ token: usertoken })
  } catch (error) {
    // Pasa el error al middleware de errores
    next(error)
  }
}
