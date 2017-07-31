module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      to_group: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      priority: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['Normal', 'Urgent', 'Critical']]
        }
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
    queryInterface.dropTable('Messages');
  }
};
