import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import { validate } from "../middlewares/dataValidator";
import { create } from "../validations/users.vdt";

const UserController = Router();

const model = new UserService();

UserController.get('/', validate(create) , async (req: Request, res: Response) => {

    const users = await model.getAll();

    return res.status(200).json({status: true, message: 'Succefful', data: users});
})

UserController.post('/register', async (req: Request, res: Response) => {

    const result = await model.create(req.body);

    return res.status(201).json(result);
});

export default UserController;