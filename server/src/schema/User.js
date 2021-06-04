const Sequelize = require("sequelize");

const defaultAvatar =
  "https://res.cloudinary.com/tylerdurden/image/upload/v1602657481/random/pngfind.com-default-image-png-6764065_krremh.png";
const UserSchema = {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { min: 6 },
  },
  fullname: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  lastOnline: { type: Sequelize.DATE },
  title: { type: Sequelize.STRING },
  avatar: { type: Sequelize.STRING, defaultValue: defaultAvatar },
  resetPassHash: { type: Sequelize.STRING },
  resetPassExpire: { type: Sequelize.STRING },
  accessToken: { type: Sequelize.STRING },
  deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
};
module.exports = UserSchema;
