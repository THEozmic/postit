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
        // associations can be defined here
        Groups.hasMany(models.GroupMembers, {
          through: {
            model: 'Users'
          }
        });
      }
    }
  });
  return Groups;
};
