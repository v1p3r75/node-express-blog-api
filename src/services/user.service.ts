import {User} from "../database/models/user";

class UserService {

    async getUser(id : number) {

        return await User.findAll()
    }
}

export default UserService;