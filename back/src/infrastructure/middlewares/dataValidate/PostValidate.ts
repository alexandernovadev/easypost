import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const postSchema = Joi.object({
  title: Joi.string().min(10).max(50).required().messages({
    'string.base': '"title" should be a type of string',
    'string.min': 'El título debe tener al menos 10 caracteres',
    'string.max': 'El título no debe superar los 50 caracteres',
    'any.required': 'Título es requerido',
  }),
  content: Joi.string().min(100).max(300).required().messages({
    'string.base': '"content" should be a type of string',
    'string.min': 'El contenido debe tener al menos 100 caracteres',
    'string.max': 'El contenido no debe superar los 300 caracteres',
    'any.required': 'Contenido es requerido',
  }),
  createAt: Joi.date().iso().required().messages({
    'date.base': '"createAt" should be a valid date',
    'date.isoDate': '"createAt" should be a valid ISO date format',
    'any.required': 'createAt es requerido',
  }),
  user: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.base': '"user" should be a type of string',
      'string.pattern.base': '"user" should be a valid MongoDB ObjectId',
      'any.required': 'Usuario es requerido',
    }), 
})

export function validatePost(req: Request, res: Response, next: NextFunction) {
  const { error } = postSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  next()
}
