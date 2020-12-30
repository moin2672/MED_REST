const express = require('express');

const router = express.Router();

const Member = require('../models/member');


//GET ALL MembericineList
router.get('/', async (req, res)=>{
    try{
        const members = await Member.find();
        res.json(members)
    }catch(err){
        res.json({message:err});
    }
});

//GET A SPECIFIC Membericine
router.get('/:memberId',async (req, res)=>{
    //console.log(req.params.memberId)
    try{
        const member = await Member.findById(req.params.memberId);
        res.json(member)
    }catch(err){
        res.json({message:err});
    }
});

// UPATE A Membericine
router.patch('/:memberId', async (req, res) => {
    try{
        const updatedMember = await Member.updateOne({_id: req.params.memberId},
            {$set: {
                memberID: req.body.memberID,
                memberName: req.body.memberName,
                memberLocation: req.body.memberLocation,
                memberPhoneNo:req.body.memberPhoneNo,
                memberWhatsApp:req.body.memberWhatsApp
            }});
        res.json(updatedMember);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE A SPECIFIC Membericine
router.delete('/:memberId',async (req, res)=>{
    //console.log(req.params.memberId)
    try{
        const removeMember = await Member.deleteOne({_id: req.params.memberId});
        //res.json(post)
        //res.json({message:"id= "+ req.params.memberId + " Deleted Successfully!!"}).statusCode(200);
        res.json(removeMember);
    }catch(err){
        res.json({message:err});
    }
});


//SUBMIT A NEW Membericine
router.post('/', async (req, res)=>{
    
    const member= new Member({
        memberID: req.body.memberID,
        memberName: req.body.memberName,
        memberLocation: req.body.memberLocation,
        memberPhoneNo:req.body.memberPhoneNo,
        memberWhatsApp:req.body.memberWhatsApp
    });
    try{
        const savedMember = await member.save();
        res.json(savedMember);
    } catch(err){
        res.json({message: err});
    }
        
})

module.exports = router;