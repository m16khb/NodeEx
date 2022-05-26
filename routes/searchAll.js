var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let connection = mysql.createConnection({
        host:'localhost',
        port:'3306',
        user: 'root',
        password: '0000',
        database: 'NodeEx'
      })
    connection.connect((err) =>{
        if(err) throw err;
        console.log('Mysql Connected with App...');
      });
      
      connection.query('SELECT * FROM user', function (err, result, fields) {
        if (err) {
          console.log('DB Query incorrect')
        } else {
          console.log(result)
        }
      })
    res.send('hello');
});

module.exports = router;
