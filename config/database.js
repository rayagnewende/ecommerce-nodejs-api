const mongoose = require("mongoose"); 
const dotenv = require('dotenv'); 


dotenv.config({path:'config.env'});

const databaseConnection= async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URL); 
        console.log("connexion reussie!!");
    } catch (error) {
         console.log(error);
    }
}

module.exports = databaseConnection ; 