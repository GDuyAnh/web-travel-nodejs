import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';
import initAPIROUTE from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();




const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 8080;
// Setup view engine
configViewEngine(app);
initWebRouter(app);
initAPIROUTE(app);

console.log('>>> ', port);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} `)
})
