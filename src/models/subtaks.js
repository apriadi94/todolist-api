'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubTaks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubTaks.init({
    taksId: {
      type : DataTypes.INTEGER,
      references: { model: 'taks', key: 'id' },
      field: 'taks_id',
    },
    subTaksName: {
      type : DataTypes.STRING,
      field: 'subtaks_name',
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SubTaks',
    tableName : 'subtaks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SubTaks;
};