const mongoose=require('mongoose');

const  contactSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true}
})

const Contact=mongoose.model('contacts',contactSchema);
module.exports=Contact;