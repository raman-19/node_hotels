const express = require('express')
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async(req,res)=>{

    try{
        const data = req.body  //Assuming the request body contains the person data

     // CREATE A NEW PERSON DOCUMENT USING MONGODB MODEL
     const newPerson = new Person(data);
     //  SAVE RHE NEW PERSON TO THE DATABASE
     const response= await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);



    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});

    }
    
})

router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

router.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType ; //EXTRACT THE WORK TYPE FROM THE URL PARAMETER
        if(workType ==='chef' || workType ==='manager' || workType ==='waiter'){

            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);


        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
        
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id ; //EXATRACT THE ID FROM THE URL PARAMETER
        const updatePersonData = req.body;//UPDATE DATA FOR THE PERSON

        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true, //RETURN THE UPDATED DOCUMENT
            runValidators:true,//Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('data updated');
        res.status(200).json(response);
    
 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; //EXTRACT THE PERSON ID FROM THE URL PARAMETER

        // ASSUMING YOU HAVE A PERSON MODEL

         const response = await Person.findByIdAndDelete(personId);;
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data delete');
        res.status(200).json({Message:'Person Deleted Successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})










module.exports = router;
