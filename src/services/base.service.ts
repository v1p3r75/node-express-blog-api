import { Model, ModelCtor } from "sequelize-typescript"
import {User} from "../database/models/user";


class BaseService {

    protected model = User

    public async getAll() {
        // const model = new this.model();
        // this.model && await model.create({
        //     'userame' : 'Kali'
        // }).then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.error(err)
        // });
    }
}

export default BaseService;