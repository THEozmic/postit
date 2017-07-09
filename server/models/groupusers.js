export default (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    update_trigger: {
      // when the value of this is changed, the updated_at column changes too
      // it is changed each time the user logs in and opens the group
      // it is used to track the "last_seen" time of the user in the group and that is
      // used to determine the "read" status of a message
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
  return GroupUsers;
};
