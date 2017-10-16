'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ['[a-z]', 'i']
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeCreate: function beforeCreate(user) {
        user.hashPassword(user);
      },
      beforeUpdate: function beforeUpdate(user) {
        /* eslint-disable no-underscore-dangle */
        if (user._changed.password) {
          user.hashPassword(user);
        }
      }
    }
  });

  Users.associate = function (models) {
    Users.belongsToMany(models.Groups, {
      through: 'GroupUsers',
      as: 'groups',
      foreignKey: 'userId'
    });
  };

  // this is very uncool but the user parameter has to
  // be passed to the instance methods to get them working
  // the normal implementation would be to use "this"
  // unfortunately, "this" doesn't work with arrow functions

  Users.prototype.hashPassword = function (user) {
    user.password = _bcryptNodejs2.default.hashSync(user.password, _bcryptNodejs2.default.genSaltSync(5));
  };

  Users.prototype.isValidPassword = function (password, user) {
    return _bcryptNodejs2.default.compareSync(password, user.password);
  };

  Users.prototype.filterUserDetails = function (user) {
    user = {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt };
    return user;
  };

  return Users;
};
//# sourceMappingURL=users.js.map