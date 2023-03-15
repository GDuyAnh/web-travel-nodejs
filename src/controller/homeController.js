import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM  `city`');
    console.log('row', rows);

    return res.render('homecity.ejs', { datacity: rows, user: null })

}

let showUserID = async (req, res) => {
    let userID = req.params.userID;
    const [User, fields] = await pool.execute('SELECT * FROM `user`  WHERE `user`.ID = ? ', [userID]);
    return res.render('showinforUser.ejs', { user: User[0] })
}



let login = (req, res) => {
    return res.render('login.ejs')
}

let checklogin = async (req, res) => {

    console.log('check body', req.body);
    let username = req.body.username
    let password = req.body.password
    console.log('username', username);
    console.log('password', password);
    const [rows, fields] = await pool.execute('SELECT * FROM  `city`');
    const [User, fields1] = await pool.execute('SELECT `user`.*, USER_NAME, PASWORD FROM `user` JOIN `account` ON `user`.ID = `account`.`ID` WHERE `USER_NAME` = ? AND `PASWORD` = ?', [username, password]);

    console.log('row', User);

    return res.render('homecity.ejs', { datacity: rows, user: User })
}


let getplace = async (req, res) => {
    let cityid = req.params.cityid;

    let [place] = await pool.execute('SELECT `place`.*,  GROUP_CONCAT(image.IMAGE_URL) as imgs FROM `place` JOIN `image` ON `image`.ID_PLACE = `place`.ID GROUP BY `place`.ID HAVING ID_CITY = ?', [cityid]);
    console.log('check id CITY ', cityid);
    console.log('check param', req.params)
    return res.render('places.ejs', { dataplace: place })
    //return res.send(JSON.stringify(place))
}

let getplaceDetail = async (req, res) => {


    let placeid = req.params.placeid;

    console.log('placeid ', placeid)

    let [placeDetail] = await pool.execute('SELECT * FROM `place` WHERE id = ?', [placeid]);
    let [review] = await pool.execute('SELECT review.*,user.NAME, user.IMAGE FROM review JOIN user ON user.ID = review.ID_USER WHERE PLACE_ID = ?', [placeid]);

    console.log(placeDetail);
    return res.render('placeDetail.ejs', { dataPlace: placeDetail[0], reviewData: review })
}

let registerUser = async (req, res) => {
    let test = req.body;
    console.log(test);
    return res.render('register.ejs')

}

let checkregister = async (req, res) => {
    let name_register = req.body.name_register;
    let email_register = req.body.email_register;
    let username_register = req.body.username_register;
    let password_register = req.body.psw_register;
    let test = req.body
    console.log(test)

    console.log(name_register)
    console.log(email_register)
    console.log(username_register)
    console.log(password_register)
    const [registerUser] = await pool.execute('INSERT INTO `user`(`NAME`,  `EMAIL`, ) VALUES ( ? , ? )', [name_register, email_register]);

}

module.exports = {
    getHomepage, getplace, login, checklogin, showUserID, getplaceDetail, registerUser, checkregister
}
