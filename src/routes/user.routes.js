import express from 'express'
import UserController from '../controllers/user.controller.js'
const router = express.Router()

router
  .route('/')
  .post(
    UserController.createUser
  );

router
   .route('/login')
   .post(
    UserController.loginUser
   )

export default router;