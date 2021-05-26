'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Board.hasMany(models.Taks, { as : 'taks', foreignKey : 'board_id' })
    }
  };
  Board.init({
    boardName: {
      type : DataTypes.STRING,
      field: 'board_name',
    }
  }, {
    sequelize,
    modelName: 'Board',
    tableName : 'boards',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Board;
};