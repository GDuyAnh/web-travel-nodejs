import express from "express";
import homeController from '../controller/homeController';
import APIcontroller from '../controller/APIcontroller';
let router = express.Router();

const initAPIROUTE = (app) => {

    router.get('/users', APIcontroller.getAllUser);



    return app.use('/api/v1/', router)

}
export default initAPIROUTE;

//module.exports = initWebRouter;