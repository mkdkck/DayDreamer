// Importing the Sequelize library
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt'); // bcrypt will be used for hashing passwords

// This function will define the User model/schema
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        // Defining fields of the User model
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true // Validates that the string is an email address
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // A hook that will be executed before a User record is created,
    // used here to hash the user's password
    User.beforeCreate(user => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    // A method to check if an unhashed password entered by the user can be compared to the hashed password stored in the database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Returning the User model
    return User;
};
