const Sequelize = require("sequelize");
const CompanySchema = {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  address: { type: Sequelize.STRING },
  postalCode: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  country: { type: Sequelize.STRING },
  phone: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  web: { type: Sequelize.STRING },
};
module.exports = CompanySchema;
