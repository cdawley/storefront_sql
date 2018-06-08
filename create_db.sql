-- For creation of database 'bamazon' and table 'products', w/ mock products --

DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(60) NULL,
  department_name VARCHAR(30) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

-- ### Alternative way to insert more than one row --

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ("Mother American Night", "Books", 24.99, 100),
VALUES ("Biblia Sagrada Nova Versao Internacional", "Books", 40.00, 33),
VALUES ("Style Wars", "Films", 24.99, 7),
VALUES ("Workingman's Dead", "Music", 13.00, 13),
VALUES ("Eloquent Javascript 2nd Ed.", "Books", 39.95, 64),
VALUES ("Ken Park (Uncut Uncensored NTSC Region Free!)", "Films", 14.99, 100),
VALUES ("Nameless Book on Nothing Special", "Books", 15.00, 0),
VALUES ("Roads to Koktebel", "Films", 20.00, 9),
VALUES ("National Geographic", "Magazines", 6.99, 13),
VALUES ("Data Structures, Algorithms & Software Principles in C", "Books", 59.99, 1);
