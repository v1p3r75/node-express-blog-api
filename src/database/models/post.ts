import { Model, Association, DataTypes, Sequelize } from 'sequelize'
        export class Post extends Model {
        public id!: number
public title!: string
public content!: string
public readonly createdAt?: Date
public readonly updatedAt?: Date | null
public readonly deleteAt?: Date | null
        public static _init = (sequelize: Sequelize): void => {
            Post.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {type: DataTypes.STRING}, content: {type: DataTypes.TEXT}
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
            tableName: 'posts',
            paranoid: true,
            sequelize: sequelize, 
            });
        }
    }