const mongoose=require("mongoose")
const usersSchema=mongoose.Schema({
name:String,
email:String,
password:String,
country:String,
city:String,

},{
    versionKey:false
}
)


const UsersModel=mongoose.model("user",usersSchema)

module.exports={
    UsersModel
}