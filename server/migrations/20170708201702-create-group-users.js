module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('GroupUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id'
        }
      },
      last_seen: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /* , Sequelize */) => {
    queryInterface.dropTable('GroupUsers');
  }
};
