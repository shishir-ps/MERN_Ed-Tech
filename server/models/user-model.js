import mongoose from "mongoose";


const userSchema =new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        require: false,
    },
    
});


const User = new mongoose.model("User",userSchema);

 export default User;