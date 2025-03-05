import mongoose from "mongoose";
import dot from "./dot.js";
 

async function connectdb () {
 
 try {
       
 const response =  await mongoose.connect(`${dot.DB_URI}`);
 console.log("Databse connected with id", response.connection._connectionString);
    
 } catch (error) {
     console.log("DB COnnection failed", error);
 }
 
}

export default connectdb;
