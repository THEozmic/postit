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
    readBy: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'Normal',
      allowNull: true,
      validate: {
        isIn: [['Normal', 'Urgent', 'Critical']]
      }
    }
  });
  return Messages;
};
