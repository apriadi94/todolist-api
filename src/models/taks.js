'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.hasMany(models.SubTask, { as : 'subtask', foreignKey : 'taskId' })
    }
  };
  Task.init({
    boardId: {
      type : DataTypes.INTEGER,
      references: { model: 'boards', key: 'id' },
      field: 'board_id',
    },
    taskName: {
      type : DataTypes.STRING,
      field: 'task_name',
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName : 'tasks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Task;
};