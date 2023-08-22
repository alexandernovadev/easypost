import { NextFunction, Request, Response } from 'express'
import { Testservice } from '../../application/services/test.service'
import { UserRepository } from '../repositories/user.repository'
import { PostRepository } from '../repositories/post.repository'

const testService = new Testservice(new UserRepository(), new PostRepository())

export const testPoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = testService.seedData()

    res.status(200).json({ data })
  } catch (error) {
    next(error)
  }
}
