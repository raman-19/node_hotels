const mongoose = require('mongoose');

// define url of mongodb connection

const mongoURL = 'mongodb://localhost:27017/hotels';

// set up mongodb connection 
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

// Get the default connection
// Momgoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

// Define event listner for database
db.on('connected' ,()=>{
    console.log('Connected to mongodb server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

// Export database connection
module.export = db;