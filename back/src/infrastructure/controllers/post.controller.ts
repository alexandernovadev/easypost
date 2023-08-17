import { NextFunction, Request, Response } from 'express'
import { PostRepository } from '../repositories/post.repository'
import { PostService } from '../../application/services/post.service'
import { NotFoundError } from '../../domain/errors/NotFoundError'

const postService = new PostService(new PostRepository())

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = {
      title: req.query.title as string,
      createAt: Number(req.query.createAt),
      user: req.query.user as string,
    }
    const posts = await postService.getAllPosts(filters)
    res.status(200).json(posts)
  } catch (error) {
    next(error)
  }
}

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.createPost(req.body)
    res.status(201).json(post)
  } catch (error) {
    next(error) // Pass the error to the error-handling middleware
  }
}

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await postService.getPost(req.params.id)
    res.json(post)
  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(404).json({ message: error.message })
    } else {
      next(error)
    }
  }
}

export const updatePost = async (req: Request, res: Response) => {
  const updatedPost = await postService.updatePost(req.params.id, req.body)
  res.json(updatedPost)
}

export const deletePost = async (req: Request, res: Response) => {
  const deletedPost = await postService.deletePost(req.params.id)
  res.json(deletedPost)
}
