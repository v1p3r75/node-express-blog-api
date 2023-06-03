import BaseService from "./base.service";

class UserService extends BaseService {

    public async getAll(columns?: string[]) {

        const results = await this.db.user.findMany()

        return results;

    }

    public async getById(id: number) {

        const results = await this.db.user.findFirst({ where : {id}})

        return results;
    }

    public async create(data: any) {

        const results = await this.db.user.create({ data })

        return results;
    }

    public async update(id : number, data: any) {

        const results = await this.db.user.update({ where: { id }, data})

        return results;

    }

    public async delete(id : number) {

        const results = await this.db.user.delete({ where: { id } })

        return results;
    }

}

export default UserService;