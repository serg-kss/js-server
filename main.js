const express = require('express');
const picturesRouter = require('./pictures.routes');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', [picturesRouter]);

async function startServer() {
    try {
        app.listen(PORT, ()=>{
            console.log("Server is working on PORT " + PORT);
        }) 
    } catch (error) {
        console.log(error);
    }
}

startServer();