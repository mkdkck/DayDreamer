// Dream.js

// This function will define the Dream model/schema
module.exports = function(sequelize, DataTypes) {
    const Dream = sequelize.define('Dream', {
        // Defining the fields of the Dream model
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            // This field will act as a foreign key linking to the User model
        }
    }, {
        timestamps: true,
        freezeTableName: true
    });

    // Assuming there is a User model, this will link Dream to a User
    Dream.belongsTo(require('./User')(sequelize, DataTypes), { foreignKey: 'user_id' });

    // Returning the Dream model
    return Dream;
};