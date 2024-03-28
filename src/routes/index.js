import express from 'express';
import userRoute from './user.routes.js'
import bookingRoute from './booking.routes.js'
import roomRoute from './room.routes.js'
const router = express.Router();

const defaultRoutes = [
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/booking',
        route:bookingRoute
    },
    {
        path: '/room',
        route:roomRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
});

export default router;