'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('users', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          field: 'id'
      },
      first_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      avatar: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
  }, {
    timestamps: false,
    freezeTableName: true
  });

  /*sequelize.sync({force: true})
      .then(function () {
          return user.create({});
      })
      .then(function () {
          return user.find({});
      })
      .then(function(instance){
          return instance.updateAttributes({created_at: sequelize.literal('CURRENT_TIMESTAMP')});
      })
      .then(function () {
          process.exit(0);
      })
      .catch(function(err){
          console.log('Caught error! ' + err);
      });*/

  user.associate = function(models) {
      models.users.hasMany(models.comments, { foreignKey: "user_id", sourceKey: "id" });
  }

  return user;
}