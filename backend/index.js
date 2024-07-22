const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {connectDB} = require('./database/db.js');
connectDB();
app.get('/', (req, res) => {
    res.json({message : 'This is my portfolio website'});
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})