import app from "./app/app.js";
import dotenv from "dotenv";


// Configuring .env file
dotenv.config({path:"src/.env"});


app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server has Started at Port Number ${process.env.PORT || 3000}`);
})