export default (sequelize, DataTypes) => {
  const ReadCount = sequelize.define('ReadCount', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  return ReadCount;
};
