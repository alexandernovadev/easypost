import { NextFunction, Request, Response } from 'express'

export const testPoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    
    res.status(200).json({ user: '' })
  } catch (error) {
    next(error)
  }
}
