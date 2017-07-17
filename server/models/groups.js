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
  });
  Groups.associate = (models) => {
    Groups.belongsToMany(models.Users, {
      through: 'GroupUsers',
      as: 'users',
      foreignKey: 'groupId'
    });
  };
  return Groups;
};
