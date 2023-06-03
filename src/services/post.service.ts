import BaseService from "./base.service";

class PostService extends BaseService {

    public async getAll(columns?: string[]) {

        const results = this.db.post.findMany()

        return this.catchError(results);

    }

    public async getById(id: number) {

        const results = this.db.post.findFirst({ where: { id } })

        return this.catchError(results);
    }

    public async create(data: any) {

        const results = this.db.post.create({ data })

        return this.catchError(results);
    }

    public async update(id: number, data: any) {

        const results = this.db.post.update({ where: { id }, data })

        return this.catchError(results);

    }

    public async delete(id: number) {

        const results = this.db.post.delete({ where: { id } })

        return this.catchError(results);
    }

}

export default PostService;