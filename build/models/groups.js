'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Groups = sequelize.define('Groups', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    desc: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'no description'
    },
    admin: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });
  Groups.associate = function (models) {
    Groups.belongsToMany(models.Users, {
      through: 'GroupUsers',
      as: 'users',
      foreignKey: 'groupId'
    });

    Groups.hasMany(models.Messages, {
      foreignKey: 'toGroup',
      as: 'messages'
    });
  };
  return Groups;
};
//# sourceMappingURL=groups.js.map