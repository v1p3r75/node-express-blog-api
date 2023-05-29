import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const UserController = Router();

// const user = new UserService();

const prisma = new PrismaClient();

UserController.get('/', async (req: Request, res: Response) => {

    const users = await prisma.user.findMany();

    return res.status(200).json(users);
})

UserController.post('/register', async (req: Request, res: Response) => {

    // const result = await user.create(req.body);

    // return res.status(201).json(result);
});

export default UserController;