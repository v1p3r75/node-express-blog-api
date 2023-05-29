import { Router, Request, Response } from "express";
import UserService from "../services/user.service";


const UserController = Router();

const user = new UserService();

UserController.get('/', async (req: Request, res: Response) => {

    const users = await user.getAll();

    return res.status(200).json(users);
})

UserController.post('/register', async (req: Request, res: Response) => {

    const result = await user.create(req.body);

    // return res.status(201).json(result);
});

export default UserController;