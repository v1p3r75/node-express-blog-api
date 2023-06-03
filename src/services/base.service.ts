import Database from "../database"

class BaseService {

    protected db = new Database().get()

    protected catchError<T>(promise: Promise<T>) {

        return promise.catch((error: Error) => {
                return { error: error.message }
            })
    }

}

export default BaseService;