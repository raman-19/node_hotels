const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem')



// Post method for menuItem
router.post('/',async(req,res) =>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("Data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('dta fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


// make here how many sweet items and how nay soure items and spicyitems

// comment added for testing purposes

module.exports = router;
