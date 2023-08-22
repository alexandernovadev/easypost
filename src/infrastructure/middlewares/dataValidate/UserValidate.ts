import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const userSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.base': '"name" should be a type of string',
      'string.pattern.base': '"name" should contain only letters and spaces',
      'any.required': 'Nombre es requerido',
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Por favor ingresa un email válido',
      'string.email': 'Por favor ingresa un email válido',
      'any.required': 'Email es requerido',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': '"password" should be a type of string',
      'string.min': 'La contraseña debe tener mínimo 8 caracteres',
      'any.required': 'Password es requerido',
    }),
})

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = userSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  next()
}
