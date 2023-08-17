import { NextFunction, Request, Response } from 'express'
import { UserRepository } from '../repositories/user.repository'
import { NotFoundError } from '../../domain/errors/NotFoundError'
import { UserService } from '../../application/services/user.service'

const userService = new UserService(new UserRepository())

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers()
  res.json(users)
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await userService.getUser(req.params.id)
    res.json(user)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: error.message })
    } else {
      next(error)
    }
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body)
  res.json(updatedUser)
}

export const deleteUser = async (req: Request, res: Response) => {
  const deletedUser = await userService.deleteUser(req.params.id)
  res.json(deletedUser)
}
