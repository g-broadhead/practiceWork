const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Songs extends Model { }

Songs.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adescription: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'songs' })

module.exports = Songs
