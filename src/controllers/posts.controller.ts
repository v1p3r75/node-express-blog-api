import { Router, Request, Response } from "express";
import { validate } from "../middlewares/dataValidator";
import { ApiResponse} from "../utils/helper.utils";
import { createPost, deletePost, updatePost } from "../validations/posts.vdt";
import PostService from "../services/post.service";

const UserController = Router();

const model = new PostService();

UserController.get('/', async (req: Request, res: Response) => {

    const posts = await model.getAll();

    return ApiResponse.handleResult(res, posts, "List Of posts");

})

UserController.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await model.getById(Number(id));

    if (!user) {

        return ApiResponse.error(res, "Post not found", [], 404);
    }

    return ApiResponse.handleResult(res, user, "Post found");
})

UserController.post('/create', validate(createPost), async (req: Request, res: Response) => {

    const result = await model.create(req.body);

    return ApiResponse.handleResult(res, result, 'Post created succefully', 201)
});

UserController.patch('/edit', validate(updatePost), async (req: Request, res: Response) => {

    const { id } = req.body

    delete req.body.id

    const result = await model.update(Number(id), req.body);

    return ApiResponse.handleResult(res, result, "Post updated successfully");

});


UserController.delete('/delete', validate(deletePost), async (req: Request, res: Response) => {

    const { id } = req.body

    const result = await model.delete(Number(id));

    return ApiResponse.handleResult(res, result, "Post deleted successfully");

});

export default UserController;