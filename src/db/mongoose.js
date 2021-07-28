// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

const mongoose = require('mongoose');
const dbName = "task-manager-api";
const url = `mongodb://localhost:27017/${dbName}`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully connected.");
    }
})