'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubTask.init({
    taskId: {
      type : DataTypes.INTEGER,
      references: { model: 'tasks', key: 'id' },
      field: 'task_id',
    },
    subtaskName: {
      type : DataTypes.STRING,
      field: 'subtask_name',
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SubTask',
    tableName : 'subtasks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return SubTask;
};