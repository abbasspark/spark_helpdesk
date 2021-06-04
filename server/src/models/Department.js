const sequelize = require("../config").sequelize;
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const schema = require("../schema/Department");

/**
 * Department Schema
 * @module models/Department
 * @class Department
 * @property {object} id ```Required``` ```unique```  Object ID
 * @property {String} name ```Required``` ```unique``` Name of Department
 */

class Department extends Model {}
Department.init(schema, {
  sequelize,
  modelName: "Department",
  freezeTableName: true,
  logging: false,
  timestamps: false,
});
Department.associate = (models) => {
  Department.hasMany(models.User);
};
module.exports = () => Department;
