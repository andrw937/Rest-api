import express from "express";
import employees from "./routes/employes.js";
import  indexRoutes  from "../src/routes/index.route.js";


import{PORT}from'./config.js'


const app = express();
app.use(express.json())
app.use(indexRoutes)
app.use('/api', employees)
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})


app.listen(PORT)
console.log("Server on port",PORT);
