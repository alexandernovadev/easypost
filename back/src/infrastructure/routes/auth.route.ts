import { Router } from 'express'
import * as UserController from '../controllers/user.controller'
import * as SessionController from "../controllers/auth.controller"

const router = Router()

router.post('/login', SessionController.login)
router.post('/register', SessionController.register)

export default router
