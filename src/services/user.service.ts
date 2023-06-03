import BaseService from "./base.service";

class UserService extends BaseService {

    public async getAll(columns?: string[]) {

        const results = this.db.user.findMany()

        return this.catchError(results);

    }

    public async getById(id: number) {

        const results = this.db.user.findFirst({ where: { id } })

        return this.catchError(results);
    }

    public async create(data: any) {

        const results = this.db.user.create({ data })

        return this.catchError(results);
    }

    public async update(id: number, data: any) {

        const results = this.db.user.update({ where: { id }, data })

        return this.catchError(results);

    }

    public async delete(id: number) {

        const results = this.db.user.delete({ where: { id } })

        return this.catchError(results);
    }

}

export default UserService;