import express from 'express';
import roomController from '../controllers/room.controller.js';

const router = express.Router()


router
 .route('/')
 .get(
    roomController.getAllRooms
 )


router
 .route('/add')
 .post(
    roomController.addRoom
 )

router
 .route('/update/:id')
 .patch(

 )



export default router;