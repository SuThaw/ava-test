const express = require('express');
const app = express();

app.post('/users',(req,res) => {

    return res.send({status: true, message: 'success'});
});

module.exports = app;
