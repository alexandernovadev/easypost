import { Router } from 'express'
import * as UserController from '../controllers/user.controller'
import { validateObjectId } from '../middlewares/validateObjectId'
import { validateUser } from '../middlewares/dataValidate/UserValidate'

const router = Router()

router.get('/', UserController.getAllUsers)
router.post('/', validateUser, UserController.createUser)
router.get('/:id', validateObjectId, UserController.getUser)
router.put('/:id', validateObjectId, UserController.updateUser)
router.delete('/:id', validateObjectId, UserController.deleteUser)

export default router
