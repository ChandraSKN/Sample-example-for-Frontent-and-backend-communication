const express = require('express'),
      cors = require('cors');


const API_PORT = process.env.PORT || 5000;

const app = express();


app.use(cors());

app.get('/api', function(req,res) {
    res.send({result:'Hi'})
})

app.get('/quit', function(req,res) {
    res.send({result: 'the end'})
})
 
app.listen(API_PORT, ()=>console.log( `working on port ${API_PORT} `));