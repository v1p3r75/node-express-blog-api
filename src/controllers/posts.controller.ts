import { Router } from "express";
import { Request, Response } from "express";
import { Post } from "../database/models/post";


const PostController = Router();


PostController.get('/', async (req : Request, res : Response) => {

    const resp : Post[] = await Post.findAll().then((data) => {
        return data;
    })
    return res.send(resp[0])
})

export default PostController;