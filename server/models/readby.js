export default (sequelize, DataTypes) => {
  const ReadBy = sequelize.define('ReadBy', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'compositeIndex'
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'compositeIndex'
    }
  });
  return ReadBy;
};
