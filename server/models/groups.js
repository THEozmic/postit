export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Groups.belongsToMany(models.Users, {
          through: models.GroupUsers
        });
        Groups.hasMany(models.Messages, {
          foreignKey: 'group_id',
        });
      }
    }
  });
  return Groups;
};
