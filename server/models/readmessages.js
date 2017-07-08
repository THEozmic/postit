'use strict';
module.exports = function(sequelize, DataTypes) {
  var ReadMessages = sequelize.define('ReadMessages', {
    user_id: DataTypes.STRING,
    message_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ReadMessages;
};