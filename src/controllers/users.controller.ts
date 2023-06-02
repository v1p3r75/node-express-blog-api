import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import { validate } from "../middlewares/dataValidator";
import { createUser } from "../validations/users.vdt";
const bcrypt = require('bcrypt');

const UserController = Router();

const model = new UserService();

UserController.get('/', async (req: Request, res: Response) => {

    const users = await model.getAll();

    return res.status(200).json({status: true, message: 'List of Users', data: users});
})

UserController.post('/register', validate(createUser), async (req: Request, res: Response) => {

    const password = bcrypt(req.body.password)

    const data = {...req.body, password}

    const result = await model.create(req.body);

    return res.status(201).json(result);
});

export default UserController;