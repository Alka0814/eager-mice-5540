const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://alka:alkatrivedi@cluster0.vbeiq8d.mongodb.net/project4?retryWrites=true&w=majority")

module.exports={
    connection
}