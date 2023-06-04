import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
import { validate } from "../middlewares/dataValidator";
import { createUser, deleteUser, updateUser } from "../validations/users.vdt";
import { ApiResponse } from "../utils/helper.utils";
import CommentService from "../services/comment.service";

const UserController = Router();

const model = new CommentService();

UserController.get('/', async (req: Request, res: Response) => {

    const users = await model.getAll();

    return ApiResponse.handleResult(res, users, "List Of users");

})

UserController.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await model.getById(Number(id));

    if (!user) {

        return ApiResponse.error(res, "User not found", [], 404);
    }

    return ApiResponse.handleResult(res, user, "User found");
})

UserController.patch('/edit', validate(updateUser), async (req: Request, res: Response) => {

    const { id } = req.body

    delete req.body.id

    const result = await model.update(Number(id), req.body);

    return ApiResponse.handleResult(res, result, "User updated successfully");

});


UserController.delete('/delete', validate(deleteUser), async (req: Request, res: Response) => {

    const { id } = req.body

    const result = await model.delete(Number(id));

    return ApiResponse.handleResult(res, result, "User deleted successfully");

});

export default UserController;