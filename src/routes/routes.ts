import { Request, Response } from "express";
import { Router } from "express";
import BlogController from "../controllers/BlogController";
import UserController from "../controllers/UserController";

const AppRouter = Router();
export const ApiRouter = Router();

AppRouter.get('/', (req : Request, res : Response) => {

    return res.status(200).json({ apiName : 'BlogApi', version : '1.0' });
});

// Controller Routes

AppRouter.use('/blogs', BlogController);
AppRouter.use('/users', UserController);


ApiRouter.use('/api/v1', AppRouter);
