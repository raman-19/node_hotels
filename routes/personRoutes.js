const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


// Post route to add a person
router.post('/',async(req,res)=>{
    // const data = req.body      //assuming the request body contains the person data

    

    try{
        const data = req.body ;

        // create the new person document using mongoose model
        const newPerson = new Person(data);

        // save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }


})


// GET method to get person

router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetch');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='chef' || workType == "manager" || workType == "waiter"){

            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})

    }
})

router.put('/:id',async(req,res) =>{
    try{
        const PersonId = req.params.id;//Extract the id from the url parameter
        const updatedPersonData = req.body;//update data for the person 

        const response = await Person.findByIdAndUpdate(PersonId,updatedPersonData,{
            new:true,//Return the update document
            runValidators:true,//run mongoose validation
        })
        console.log('data updated');
        res.status(500).json({error:'Internal Server Error'});

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})


    }
    router.delete('/:id',async(req,res)=>{
        try{
            const PersonId = req.params.id;//Extract the person ID From the url parameter
            // Assuming you have a person model
            const response = await Person.findByIdAndDelete(PersonId);
            if(!response){
                return res.status(404).json({error:'Person not found'});
            }
            console.log('data delete');
            res.status(200).json({messages:'person Deleted sucessfully'})
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Errror'})
        }

    })

})


module.exports = router;
