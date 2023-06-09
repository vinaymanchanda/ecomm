const express= require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app= express();
const cookieParser= require("cookie-parser");
const bodyParser= require("body-parser");
const cors=require("cors");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use("/", express.static("uploads"));


//config

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"../backend/config/.env",
    });
}


//import Routes
const user= require("./controller/user");
app.use("/api/v2/user",user);


//  for error handling
app.use(ErrorHandler);
module.exports=app;