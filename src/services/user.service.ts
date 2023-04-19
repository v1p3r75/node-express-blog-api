import {User} from "../database/models/user";
import { ModelCtor } from "sequelize-typescript/dist/model/model/model";
import BaseService from "./base.service";

class UserService extends BaseService{

    protected model = User;
    
}

export default UserService;