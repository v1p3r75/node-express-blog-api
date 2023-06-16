import { Router, Request, Response } from "express";
import { validate } from "../middlewares/dataValidator";
import { ApiResponse } from "../utils/helper.utils";
import CommentService from "../services/comment.service";
import { createComment, deleteComment, updateComment } from "../validations/comments.vdt";

const CommentController = Router();

const model = new CommentService();

CommentController.get('/', async (req: Request, res: Response) => {

    const users = await model.getAll();

    return ApiResponse.handleResult(res, users, "List Of comments");

})

CommentController.get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params

    const user = await model.getById(Number(id));

    if (!user) {

        return ApiResponse.error(res, "Comment not found", [], 404);
    }

    return ApiResponse.handleResult(res, user, "Comment found");
})

CommentController.post('/create', validate(createComment), async (req: Request, res: Response) => {

    const result = await model.create(req.body);

    return ApiResponse.handleResult(res, result, 'Comment created succefully', 201)
});

CommentController.patch('/edit', validate(updateComment), async (req: Request, res: Response) => {

    const { id } = req.body

    delete req.body.id

    const result = await model.update(Number(id), req.body);

    return ApiResponse.handleResult(res, result, "Comment updated successfully");

});


CommentController.delete('/delete', validate(deleteComment), async (req: Request, res: Response) => {

    const { id } = req.body

    const result = await model.delete(Number(id));

    return ApiResponse.handleResult(res, result, "Comment deleted successfully");

});

export default CommentController;