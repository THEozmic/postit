export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [['Public', 'Private']]
      }
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
