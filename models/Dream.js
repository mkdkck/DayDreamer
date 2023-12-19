// Dream.js

// Importing the Sequelize instance and DataTypes from the models folder
const { sequelize, DataTypes } = require('./index'); // Adjust the path as necessary

// Defining the Dream model/schema
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

// Establishing relationships
// Assuming there is a User model, this will link Dream to a User
Dream.belongsTo(require('./User'), { foreignKey: 'user_id' });

module.exports = Dream;
