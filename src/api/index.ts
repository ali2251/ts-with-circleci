import { Router } from 'express'
import authHandler from './auth'
import profileHandler from './profile'
import rootHandler from './root'

const router = Router()

authHandler(router.route('/auth'))
profileHandler(router.route('/profile'))
rootHandler(router.route('/'))

export default router
