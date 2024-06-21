const mongoose=require('mongoose')

const connectDB=async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log(`Server running Successfully with mongoose ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB