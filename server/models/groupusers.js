export default (sequelize, DataTypes) => {
  const GroupUsers = sequelize.define('GroupUsers', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Groups',
        key: 'id'
      }
    },
    last_seen: {
      // when the value of this is changed, the updated_at column changes too
      // it is changed each time the user logs in and opens the group
      // it is used to track the "last_seen" time of the user in the group and that is
      // used to determine the "read" status of a message
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        GroupUsers.belongsTo(models.Groups, {
          foreignKey: {
            name: 'group_id',
            onDelete: 'CASCADE'
          }
        });
      }
    }
  });
  return GroupUsers;
};
