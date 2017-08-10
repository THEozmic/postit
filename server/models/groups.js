export default (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    desc: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'no description',
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
