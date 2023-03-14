import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter = (app) => {

    router.get('/', homeController.getHomepage);

    router.get('/place/:cityid', homeController.getplace);

    router.get('/account')

    router.get('/login', homeController.login)

    router.post('/checklogin', homeController.checklogin)

    router.get('/userdetail/:userID', homeController.showUserID)

    router.get('/placedetail/:placeid', homeController.getplaceDetail)

    router.get('/register', homeController.registerUser)

    router.post('/checkregister', homeController.checkregister)




    router.get('/about', (req, res) => {
        res.send('Im DUY ANH')
    })

    router

    return app.use('/', router)

}
export default initWebRouter;

//module.exports = initWebRouter;