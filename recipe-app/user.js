let mongoose= require('mongoose')

let userSchema= mongoose.Schema({
    userName:{
        type:String

    },
    email:{
        type:String
    },
    passWord:{
        type:String
    },

    // for rolecheck
    role: {
        type: String,
        enum: ["user", "admin", "instructor"],
        default: "user"
    },
    resetToken: String,
    resetTokenExpiry: Date
})


   let User=   mongoose.model("user",userSchema)

   module.exports=User