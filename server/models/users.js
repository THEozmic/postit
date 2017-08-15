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
    },
    lastSeenTrigger: {
      allowNull: true,
      type: DataTypes.STRING
    }
  });
  Users.associate = (models) => {
    Users.belongsToMany(models.Groups, {
      through: 'GroupUsers',
      as: 'groups',
      foreignKey: 'userId'
    });
  };
  return Users;
};
