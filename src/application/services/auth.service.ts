import jwt from 'jsonwebtoken'
import config from '../../config/jwtConfig'

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, config.secret, {
    expiresIn: config.expiresIn,
  })
}

export const verifyToken = (token: string): any => {
  return jwt.verify(token, config.secret)
}
