import { Router, Request, Response } from "express";


const UserController = Router();

UserController.get('/', function(req: Request, res: Response){

    return res.json({
        message: 'Hello World!'
    })
})

export default UserController;