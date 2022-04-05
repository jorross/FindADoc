DROP DATABASE IF EXISTS doctor_db;
CREATE DATABASE doctor_db;

USE doctor_db;

CREATE TABLE doctors (
    id INT AUTO_INCREMENT NOT NULL,
    doctor_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE appointment (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id)
    doctor_id FOREIGN KEY (id),
    user_id FOREIGN KEY (id)
);