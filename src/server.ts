import { Request, Response } from "express";
import app from "./app";
require("dotenv").config();


app.listen(process.env.PORT, (req : Request, res : Response) => {
   
   console.info(`SERVER START on ${process.env.HOSTNAME}:${process.env.PORT}`)
});