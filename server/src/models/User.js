const sequelize = require("../config").sequelize;
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const SALT_FACTOR = 10;

const Model = Sequelize.Model;
const schema = require("../schema/User");

/**
 * User Schema
 * @module models/User
 * @class User
 *
 * @property {object} _id ```Required``` ```unique```  Object ID
 * @property {String} Username ```Required``` ```unique``` Username of User
 * @property {String} password ```Required``` Bcrypt password
 * @property {String} fullname ```Required``` Full name of User
 * @property {String} email ```Required``` ```unique``` Email Address of User
 * @property {String} role ```Required``` Permission role of the given User. See {@link Permissions}
 * @property {Date} lastOnline Last timestamp given User was online.
 * @property {String} title Job Title of User
 * @property {String} image Filename of User image
 * @property {String} resetPassHash Password reset has for recovery password link.
 * @property {Date} resetPassExpire Date when the password recovery link will expire
 * @property {Boolean} deleted Account Deleted
 */
class User extends Model {}
User.init(schema, {
  sequelize,
  modelName: "User",
  freezeTableName: true,
  logging: false,
  timestamps: false,
});
User.associate = (models) => {
  // associations can be defined here
  User.belongsTo(models.Company);
  User.belongsTo(models.Department);
};
User.beforeCreate(async (user, options) => {
  let salt = await bcrypt.genSalt(SALT_FACTOR);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

module.exports = () => User;
