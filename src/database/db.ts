import { Dialect, Sequelize } from "sequelize";
import { getEnv } from "../utils/helper.utils";


const db = new Sequelize(
    getEnv('DB_NAME'),
    getEnv('DB_USERNAME'),
    getEnv('DB_PASSWORD'),
    {
        host: getEnv('DB_HOST'),
        dialect: getEnv('DB_DIALECT', 'mysql') as Dialect
    }
);

export default db;