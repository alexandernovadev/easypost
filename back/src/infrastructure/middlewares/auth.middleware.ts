import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../../application/services/auth.service'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(403).send({ message: 'No token provided.' })
  }

  try {
    const decoded = verifyToken(token)
    // @ts-ignore
    req.userId = decoded.id // Si el payload del token tiene un 'id'
    next()
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized!' })
  }
}

export default authenticate
