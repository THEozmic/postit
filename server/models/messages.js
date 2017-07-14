export default (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    from_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_group: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Normal', 'Urgent', 'Critical']]
      }
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
