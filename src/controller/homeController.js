import pool from "../configs/connectDB"
let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM  `city`');
    console.log('row', rows);

    return res.render('home.ejs', { datacity: rows, test: 'abc string ' })



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


    const [rows, fields] = await pool.execute('SELECT user.ID , user.NAME, account.PASWORD, account.USER_NAME, user.EMAIL FROM `user` JOIN account ON user.ID = account.ID');
    console.log('row', rows);





    return res.send('abc')
}


let getplace = async (req, res) => {
    let cityid = req.params.cityid;

    let [place] = await pool.execute('SELECT * FROM  `place` WHERE ID_CITY = ?', [cityid]);
    console.log('check id CITY ', cityid);
    console.log('check param', req.params)
    return res.send(JSON.stringify(place))
}

module.exports = {
    getHomepage, getplace, login, checklogin
}