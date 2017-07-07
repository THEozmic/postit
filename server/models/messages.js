module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    from_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to_group: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Messages;
};
