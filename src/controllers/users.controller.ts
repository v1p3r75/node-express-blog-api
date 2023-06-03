import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import { validate } from "../middlewares/dataValidator";
import { createUser, deleteUser, updateUser } from "../validations/users.vdt";
const bcrypt = require('bcrypt');

const UserController = Router();

const model = new UserService();

UserController.get('/', async (req: Request, res: Response) => {

    const users = await model.getAll();

    return res.status(200).json({status: true, message: 'List of Users', data: users});
})

UserController.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await model.getById(Number(id));

    if (!user) {

        return res.status(404).json({status: false, message: 'User Not Found', data: []});
    }

    return res.status(200).json({status: true, message: 'User Found', data: user});
})

UserController.post('/register', validate(createUser), async (req: Request, res: Response) => {

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {...req.body, password}

    const result = await model.create(data);

    return res.status(201).json({status: true, message: 'User created succefully', data: result});
});

UserController.post('/edit', validate(updateUser), async (req: Request, res: Response) => {

    const { id } = req.body

    const result = await model.update(Number(id), req.body);

    return res.status(200).json({status: true, message: 'User updated succefully', data: result});
});


UserController.post('/delete', validate(deleteUser), async (req: Request, res: Response) => {

    const { id } = req.body

    const result = await model.delete(Number(id));

    return res.status(200).json({status: true, message: 'User deleted succefully', data: result});
});

export default UserController;