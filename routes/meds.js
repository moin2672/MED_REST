const express = require('express');

const router = express.Router();

const Med = require('../models/med');


//GET ALL MedicineList
router.get('/', async (req, res)=>{
    try{
        const meds = await Med.find();
        res.json(meds)
    }catch(err){
        res.json({message:err});
    }
});

//GET A SPECIFIC Medicine
router.get('/:medId',async (req, res)=>{
    //console.log(req.params.medId)
    try{
        const med = await Med.findById(req.params.medId);
        res.json(med)
    }catch(err){
        res.json({message:err});
    }
});

// UPATE A Medicine
router.patch('/:medId', async (req, res) => {
    try{
        const updatedMed = await Med.updateOne({_id: req.params.medId},
            {$set: {
                medName: req.body.medName,
                brandName: req.body.brandName,
                medType:req.body.medType,
                doseLevel:req.body.doseLevel,
                boxNo:req.body.boxNo,
                quantity:req.body.quantity
            }});
        res.json(updatedMed);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE A SPECIFIC Medicine
router.delete('/:medId',async (req, res)=>{
    //console.log(req.params.medId)
    try{
        const removeMed = await Med.deleteOne({_id: req.params.medId});
        //res.json(post)
        //res.json({message:"id= "+ req.params.medId + " Deleted Successfully!!"}).statusCode(200);
        res.json(removeMed);
    }catch(err){
        res.json({message:err});
    }
});


//SUBMIT A NEW Medicine
router.post('/', async (req, res)=>{
    
    const med= new Med({
        medName: req.body.medName,
        brandName: req.body.brandName,
        medType:req.body.medType,
        doseLevel:req.body.doseLevel,
        boxNo:req.body.boxNo,
        quantity:req.body.quantity
    });
    try{
        const savedMed = await med.save();
        res.json(savedMed);
    } catch(err){
        res.json({message: err});
    }
        
})

module.exports = router;