export default (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    fromUser: {
      type: DataTypes.STRING,
      allowNull: false
    },
    toGroup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
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
