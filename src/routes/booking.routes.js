import express from 'express';
import bookingController from '../controllers/booking.controller.js';

const router = express.Router()


router
 .route('/:id')
 .get(
    bookingController.getUserBooking
 )


router
 .route('/add')
 .post(
    bookingController.addBooking
 )

router
 .route('/update/:id')
 .patch(
    bookingController.updateBooking
 )



export default router;