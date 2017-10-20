'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fromUser: {
        type: Sequelize.STRING,
        allowNull: false
      },
      toGroup: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      priority: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Normal',
        validate: {
          isIn: [['Normal', 'Urgent', 'Critical']]
        }
      },
      readBy: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ''
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
  down: function down(queryInterface /* , Sequelize */) {
    queryInterface.dropTable('Messages');
  }
};
//# sourceMappingURL=20170707101820-create-messages.js.map