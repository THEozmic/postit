export default (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'Users',
        key: 'id'
      }
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refrences: {
        model: 'Groups',
        key: 'id'
      }
    }
  });
  return GroupUsers;
};
