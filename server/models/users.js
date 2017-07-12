export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        // Users.hasMany(models.GroupUsers, {
        //   foreignKey: {
        //     name: 'user_id',
        //     onDelete: 'CASCADE'
        //   }
        // });
      }
    }
  });
  return Users;
};
