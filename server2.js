const express = require('express');
const app = express();
const db = require('./db')

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//it store req,nody

app.get('/' ,function(res ,res){
    res.send('Welcome to my hotel ........How can i help you?, we have list of menus')
})




// Import the router files
const personRoutes = require('./routes/personRoutes');

const MenuItemRoutes = require('./routes/MenuItemRoutes')

// Use the routers
app.use('/person', personRoutes)

app.use('/menu',MenuItemRoutes)



app.listen(3001,()=>{
    console.log('listening on port 3000')
})





























// information ke get karne ke liye use karte hai get method 
// '/' forward / ka mtlb get information


// mongodb+srv://ramantiwary19:Raman19@@cluster0.rusn0.mongodb.net/