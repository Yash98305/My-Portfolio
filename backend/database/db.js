const mongoose= require('mongoose');
const MONGO_URL = process.env.MONGO_URL
exports.connectDB = async()=>{
    try {
       await mongoose.connect(MONGO_URL, {
            family : 4
        });
        console.log(`database connected...`);
    } catch (error) {
        console.log(error.message);
    }
} 