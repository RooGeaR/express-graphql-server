'use strict';
module.exports = function(sequelize, DataTypes) {
    var comment = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
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
            return comment.create({});
        })
        .then(function () {
            return comment.find({});
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

    comment.associate = function(models) {
        models.comments.belongsTo(models.users, { foreignKey: "user_id", targetKey: "id" });
    }

    return comment;
}
