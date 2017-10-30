import bcrypt from 'bcrypt-nodejs';

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
      beforeCreate(user) {
        user.hashPassword(user);
      },
      beforeUpdate(user) {
       /* eslint-disable no-underscore-dangle */
        if (user._changed.password) {
          user.hashPassword(user);
        }
      }
    }
  });

  Users.associate = (models) => {
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

  Users.prototype.hashPassword = (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(5));
  };

  Users.prototype.isValidPassword = (password, user) =>
    bcrypt.compareSync(password, user.password);

  Users.prototype.filterUserDetails = (user) => {
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
