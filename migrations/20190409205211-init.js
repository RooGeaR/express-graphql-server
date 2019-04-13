'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    }).then(() => {
      return queryInterface.createTable('comments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      });
    }).then(() => {
      return queryInterface.addConstraint('comments', [ 'user_id' ], {
        type: 'FOREIGN KEY',
        name: 'FK_comments-users',
        references: {
            table: 'users',
            field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('comments', 'FK_comments-users').then(function() {
      return queryInterface.dropTable('comments');
    }).then(function() {
      return queryInterface.dropTable('users');
    });
  }
};
