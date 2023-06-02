import BaseService from "./base.service";

class UserService extends BaseService {

    public async getAll(columns? : string[]){

        const results =  await this.db.user.findMany()

        return results
    }

    public async create(data : any) {

        const results = await this.db.user.create({data : data})
    }

}

export default UserService;