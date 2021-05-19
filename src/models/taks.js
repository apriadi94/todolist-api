'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Taks.hasMany(models.SubTaks, { as : 'subtaks', foreignKey : 'taksId' })
    }
  };
  Taks.init({
    boardId: {
      type : DataTypes.INTEGER,
      references: { model: 'boards', key: 'id' },
      field: 'board_id',
    },
    taksName: {
      type : DataTypes.STRING,
      field: 'taks_name',
    }
  }, {
    sequelize,
    modelName: 'Taks',
    tableName : 'taks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Taks;
};