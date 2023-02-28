
const router=require('express').Router()
const bodyparser=require('body-parser')
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:true}))

const Contact=require('../Contact-Manager-API/models/Contact')

router.post("/v1/contacts",async(req,res)=>{
    
    try {
        const result=await Contact.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
        })
        res.status(201).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})

router.get('/v1/contacts',async(req,res)=>{
    try {
        const result=await Contact.find()
        res.status(200).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})
router.get('/v1/contacts/:id',async(req,res)=>{
    try {
        const result=await Contact.find({_id:req.params.id})
        res.status(200).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.status(404).json({
            status:"There is no contact with that id",
            message:e.message
        })
    }
})


router.patch("/v1/contacts/:id",async(req,res)=>{
    
    try {
        const result=await Contact.updateOne({_id:req.params.id},{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
        })
        res.status(201).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})

router.put("/v1/contacts/:id",async(req,res)=>{
    
    try {
        const result=await Contact.updateMany({_id:req.params.id},{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
        })
        res.status(201).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})
router.delete("/v1/contacts/:id",async(req,res)=>{
    
    try {
        const result=await Contact.deleteOne({_id:req.params.id})
        res.status(204).json({
            status:"Success",
            result
        })
    } catch (e) {
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})

module.exports=router;
