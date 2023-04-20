import { Request, Response } from "express";
import { Router } from "express";
import PostController from "../controllers/posts.controller";
import UserController from "../controllers/users.controller";

const AppRouter = Router();
export const ApiRouter = Router();

AppRouter.get('/', (req : Request, res : Response) => {

    return res.status(200).json({ apiName : 'BlogApi', version : '1.0' });
});

// Controller Routes

AppRouter.use('/posts', PostController);
AppRouter.use('/users', UserController);


ApiRouter.use('/api/v1', AppRouter);
