const mongoose  = require('mongoose')

// Define the mongodb connection URL

const mongoUrl = 'mongodb://localhost:27017/hotels' //Replace 'ntdatanase' with your database name

// set up MongoDb connection
mongoose.connect(mongoUrl,{
    // userNewUrlParser:true,
    // useUnifiedTopology:true
})

// get default connection 
// mongoose maintains a default connection representing the mongoDB connection

const db = mongoose.connection;

db.on('connected' ,()=>{
    console.log('connected to MongoDb server');
})

db.on('error',(err)=>{
    console.error('MongoDB connection error',err);
})

db.on('disconnected',()=>{
    console.log('MongoBD disconnected')
})

module.exports=db;