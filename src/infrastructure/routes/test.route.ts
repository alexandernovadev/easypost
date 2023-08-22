import { Router } from 'express'
import * as testController from '../controllers/test.controller'

const router = Router()

router.get('/' ,testController.testPoint)




export default router
