-- schema.sql

-- Use the daydreamer_db database, or create it if it doesn't exist
CREATE DATABASE IF NOT EXISTS daydreamer_db;
USE daydreamer_db;

-- -- Create a table for users
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY, -- A unique ID for each user, auto-incremented
--     username VARCHAR(50) NOT NULL,     -- The user's username
--     email VARCHAR(100) NOT NULL,       -- The user's email address
--     password VARCHAR(255) NOT NULL,    -- The user's hashed password
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- When the user was created
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- When the user was last updated
-- );

-- -- Create a table for dreams
-- CREATE TABLE dreams (
--     id INT AUTO_INCREMENT PRIMARY KEY, -- A unique ID for each dream, auto-incremented
--     title VARCHAR(100) NOT NULL,       -- The title of the dream
--     description TEXT NOT NULL,         -- The description of the dream
--     user_id INT NOT NULL,              -- The ID of the user who posted the dream
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- When the dream was created
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- When the dream was last updated
--     FOREIGN KEY (user_id) REFERENCES users(id) -- A foreign key linking to the user's ID
-- );

-- Add more tables or modify as per application needs
