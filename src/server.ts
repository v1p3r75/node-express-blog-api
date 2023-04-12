import { Request, Response } from "express";
import app from "./app";
import { getEnv } from "./utils/helper.utils";
require("dotenv").config();


app.listen(getEnv('PORT', 3000), (req : Request, res : Response) => {
   
   console.info(`App running on ${getEnv('HOSTNAME', 'localhost')}:${getEnv('PORT', 3000)}`)
});