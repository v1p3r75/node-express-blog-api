import { Sequelize } from "sequelize";
import { getEnv } from "../utils/helper.utils";


const Database = new Sequelize(
    getEnv('DB_NAME'),
    getEnv('DB_USERNAME'),
    getEnv('DB_PASSWORD'),
    {
        host: getEnv('DB_HOST'),
        dialect: 'mysql'
    }
);

Database.authenticate()
.then(() => console.log('Database connected successfully'))
.catch((error) => console.error(error));