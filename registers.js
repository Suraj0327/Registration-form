const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
});
const Register=new mongoose.model("Register",studentSchema);
module.exports=Register;