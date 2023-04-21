import { Post } from "../database/models/post";
import BaseService from "./base.service";

class PostService extends BaseService {

    protected model = Post
}

export default PostService;