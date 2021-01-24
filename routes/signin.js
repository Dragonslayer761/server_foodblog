var express = require('express');
const knex = require('knex');


//database connection
const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '1234',
      database : 'databaseColorRecognition'
    }
  });

  db.select('email').from('users').then(data => {
    console.log(data);
  });

var router = express.Router();

//signin function
router.post('/',(req, res)=>{  
    const {email,password} = req.body;
    res.json("sigin in working");
})

module.exports = router;