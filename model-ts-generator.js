const pluralize = require('pluralize')

function capitalizeString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Param must be string value!');
  }

  if (str.length === 0) {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function modelTSConstructor() {
  'use strict'
  const fs = require('fs')
  const args = require('yargs').argv
  let name = args.name
  let date = new Date()
  let dateStamp =
    date
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '') +
    date
      .toISOString()
      .slice(11, 19)
      .replace(/:/g, '')
  let fileMigration = name
    .replace(/(?:^|\.?)([A-Z])/g, (x, y) => {
      return '_' + y.toLowerCase()
    })
    .replace(/^_/, '')
  let fileName = name + '.ts'
  let attributes
  let data = ''

  attributes = args.attributes.split(',').map(item => {
    return item.split(':')
  })

  let types = attributes.map(type => {
    if (type[1] === 'integer' || type[1] === 'real' || type[1] === 'bigint') {
      return `public ${type[0]}!: number`
    } else if (type[1] === 'date') {
      return `public ${type[0]}!: Date`
    } else {
      return `public ${type[0]}!: ${type[1]}`
    }
  })
  types.unshift(`public id!: number`)
  types = types.concat([
    'public readonly createdAt?: Date',
    'public readonly updatedAt?: Date | null',
    'public readonly deleteAt?: Date | null'
  ])

  let typeConstructor = attributes.map(type => {
    return `${type[0]}: {type: DataTypes.${type[1].toUpperCase()}}`
  })
  let typeSequelizeConstructor = attributes.map(type => {
    return `${type[0]}: {type: Sequelize.${type[1].toUpperCase()}}`
  })

  let writeFirstStream = fs.createWriteStream(`./src/database/models/${fileName}`)
  writeFirstStream.write(
    `import { Model, Association, DataTypes, Sequelize } from 'sequelize'
        export class ${capitalizeString(name)} extends Model {
        ${types.join('\n')}
        public static _init = (sequelize: Sequelize): void => {
            ${capitalizeString(name)}.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ${typeConstructor.join(', ')}
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
            tableName: '${pluralize(name)}',
            paranoid: true,
            sequelize: sequelize, 
            });
        }
    }`
  )
  let writeSecondStream = fs.createWriteStream(
    `./src/database/migrations/${dateStamp + '-' + 'create' + '-' + pluralize(fileMigration) + '-' + 'table'  + '.js'}`
  )
  writeSecondStream.write(`
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('${pluralize(name)}', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ${typeSequelizeConstructor},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('${pluralize(name)}');
  }
};
`)
}

modelTSConstructor()