'use strict';

module.exports = function (sequelize, DataTypes) {
  var PasswordRequests = sequelize.define('PasswordRequests', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    expiresIn: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    hash: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  });
  return PasswordRequests;
};
//# sourceMappingURL=passwordrequests.js.map