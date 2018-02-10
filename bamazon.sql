create database bamazon_db;

use bamazon_db;

create table products(
    item_id integerauto_increment,
    product_name varchar(100),
    department_name varchar(100),
    price float(10, 4),
    stock_quantity integer(25),
    primary key(item_id)
);

    insert into products(product_name, department_name, price, stock_quantity)
    values('FIFA 2018 - PC', 'Video Games', 59.99, 10);

    insert into products(product_name, department_name, price, stock_quantity)
    values('LG 65inch 4k TV', 'Electronics', 2696.99, 5);

    insert into products(product_name, department_name, price, stock_quantity)
    values('FitBit Charge 2', 'Electronics', 99.99, 10);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Computer Programming For Dummies', 'Books', 13.99, 5);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Nerf Gun', 'Toys', 19.99, 1);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Lego Death Star', 'Toys', 499.99, 3);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Authentic Batman Costume', 'Clothing', 59.99, 10);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Porg Plush Toy', 'Toys', 19.99, 5);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Elon Musk Flame Thrower', 'Weapons', 599.99, 10);

    insert into products(product_name, department_name, price, stock_quantity)
    values('Game of Thrones LongClaw Sword', 'Weapons', 249.99, 5);

    SELECT * FROM products
