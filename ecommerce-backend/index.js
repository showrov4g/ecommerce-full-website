import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const PORT = process.env.PORT || 5000;

dotenv.config()
const app= express();
app.use(cors());
app.use(express.json())





app.get("/", async(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})