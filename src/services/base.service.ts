import Database from "../database"

class BaseService {

    protected db = new Database().get()

}

export default BaseService;