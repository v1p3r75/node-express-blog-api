import { Model, Association, DataTypes, Sequelize } from 'sequelize'
export class User extends Model {
        public id!: number
        public username!: string
        public phone!: string
        public email!: string
        public password!: string
        public admin!: boolean
        public readonly createdAt?: Date
        public readonly updatedAt?: Date | null
        public readonly deleteAt?: Date | null
        public static _init = (sequelize: Sequelize): void => {
            User.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {type: DataTypes.STRING(50)}, phone: {type: DataTypes.STRING(10)}, email: {type: DataTypes.STRING}, password: {type: DataTypes.STRING}, admin: {type: DataTypes.BOOLEAN}
            ,
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: true,
                type: DataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE
            }
            }, {
            tableName: 'users',
            paranoid: true,
            sequelize: sequelize, 
            });
        }
    }