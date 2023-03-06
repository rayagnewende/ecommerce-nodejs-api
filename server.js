const http = require('http'); 
const dotenv = require('dotenv'); 
const app = require('./app');
const databaseConnection=  require('./config/database');

dotenv.config({path:'config/config.env'});

databaseConnection().then( result => console.log("connexion reussie"))
                    .catch( error => console.log(error));

                    
app.listen(3000, () => {
    console.log(`Le server est lancé sur le port: ${process.env.PORT}`);
}); 