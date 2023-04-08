const { Router } = require("express");
import { Request, Response } from "express";
import { getEnv } from "../utils/helper.utils";

const BlogController = Router();

BlogController.get('/', (req : Request, res : Response) => {

    return res.send('Blog Index');
})

export default BlogController;