import { Router } from "express";
import { Request, Response } from "express";
import { Post } from "../database/models/post";
import PostService from "../services/post.service"

const PostController = Router();

const service = new PostService()

PostController.get('/', async (req : Request, res : Response) => {

    // return res.status(201).json({a : 'service', b : d})
})

export default PostController;