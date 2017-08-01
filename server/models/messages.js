export default (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    from_user: {
      type: DataTypes.STRING,
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
  });
  return Messages;
};
