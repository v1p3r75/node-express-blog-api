import { Router, Request, Response } from "express";
import UserService from "../services/user.service";


const UserController = Router();

const user = new UserService();

UserController.get('/', async (req: Request, res: Response) => {

    await user.getUser(1).then(data => {
        console.log(data); 
    })
})

export default UserController;