const express = require('express');
const app =express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());





app.get('/' , function(req,res){
    res.send("Welcome to my hotel ....how i can help you")
})



// IMOORT THE ROUTER FILES
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// USE THE ROUTERS 
app.use('/person',personRoutes);
app.use('/menu' ,menuRoutes);


app.listen(3000,()=>{
    console.log('listining to the port at 3000')
})




