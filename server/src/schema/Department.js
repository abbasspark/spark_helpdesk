const Sequelize = require("sequelize");
const DepartmentSchema = {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  priority: { type: Sequelize.INTEGER },
};

module.exports = DepartmentSchema;
