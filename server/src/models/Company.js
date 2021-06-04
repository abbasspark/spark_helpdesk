const sequelize = require("../config").sequelize;
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const schema = require("../schema/Company");

/**
 * Company Schema
 * @module models/Company
 * @class Company
 *
 * @property {object} id ```Required``` ```unique```  Object ID
 * @property {String} name ```Required``` ```unique``` Name of Company
 * @property {String} address ``` address of Company
 * @property {String} postalCode ``` postalCode of Company
 * @property {String} city ``` city of Company
 * @property {String} state ``` state of Company
 * @property {String} country ``` country of Company
 * @property {String} phone ``` phone of Company
 * @property {String} email ``` email of Company
 * @property {String} web ``` web of Company
 */

class Company extends Model {}
Company.init(schema, {
  sequelize,
  modelName: "Company",
  freezeTableName: true,
  logging: false,
  timestamps: false,
});
Company.associate = (models) => {
  Company.hasMany(models.User);
};

module.exports = () => Company;
