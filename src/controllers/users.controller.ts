import { Router, Request, Response } from "express";
import UserService from "../services/user.service";


const UserController = Router();

const user = new UserService();

UserController.get('/', async (req: Request, res: Response) => {

    // return user.getAll();
})

export default UserController;