import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import connectdb from "./config/dbconnect.js";
import dot from "./config/dot.js";
const app =  express();



app.use(cors( {
    origin : "*"
}))

app.use(express.json());
app.use(cookieParser());


app.listen(dot.PORT , () => {
    connectdb();
    console.log(`server stated on  ${dot.PORT}`  )
})