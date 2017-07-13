export default (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    from_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'Users',
        key: 'id'
      }
    },
    to_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'Users',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Messages.belongsTo(models.Group, {
          onDelete: 'CASCADE',
          foreignKey: 'group_id'
        });
      }
    }
  });
  return Messages;
};
