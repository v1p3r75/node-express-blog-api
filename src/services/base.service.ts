import { Model, ModelStatic } from "sequelize"
import {User} from "../database/models/user";


class BaseService {

    protected model ?: ModelStatic<M>

    // constructor() {
    //     if (!this.model) throw Error('You must set a protected model attributes for service class.')
    // }

    public async getAll() {

        const result = await this.model!.findAll().then(
            (data) => {
                return data
            }
        )

        return result
    }

    public async create(data) {

        const result = await this.model!.create()
    } 
}

export default BaseService;