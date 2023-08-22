import { Router } from 'express'
import * as SessionController from "../controllers/auth.controller"
import { validateUser } from '../middlewares/dataValidate/UserValidate'

const router = Router()

router.post('/login', SessionController.login)
router.post('/register',validateUser, SessionController.register)

export default router
