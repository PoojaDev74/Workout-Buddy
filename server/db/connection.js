const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connection established");
})
.catch((err)=>{
    console.log(`error is ${err}`)
})
