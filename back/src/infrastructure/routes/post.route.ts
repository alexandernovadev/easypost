import { Router } from 'express'
import * as PostController from '../controllers/post.controller'
import { validatePost } from '../middlewares/dataValidate/PostValidate'
import { validateObjectId } from '../middlewares/validateObjectId'
import authenticate from '../middlewares/auth.middleware'
// Importa cualquier middleware que necesites, como uno para validar datos del post.

const router = Router()

router.get('/', authenticate, PostController.getAllPosts)
router.post('/', authenticate, validatePost, PostController.createPost)
router.get('/:id', authenticate, validateObjectId, PostController.getPost)
router.put('/:id', authenticate, validateObjectId, PostController.updatePost)
router.delete('/:id', authenticate, validateObjectId, PostController.deletePost)

export default router
