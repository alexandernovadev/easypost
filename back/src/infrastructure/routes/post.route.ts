import { Router } from 'express'
import * as PostController from '../controllers/post.controller'
import { validatePost } from '../middlewares/dataValidate/PostValidate'
import { validateObjectId } from '../middlewares/validateObjectId'
// Importa cualquier middleware que necesites, como uno para validar datos del post.

const router = Router()

router.get('/', PostController.getAllPosts)
router.post('/', validatePost, PostController.createPost)
router.get('/:id', validateObjectId, PostController.getPost)
router.put('/:id', validateObjectId, PostController.updatePost)
router.delete('/:id', validateObjectId, PostController.deletePost)

export default router
