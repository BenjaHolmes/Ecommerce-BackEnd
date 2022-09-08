/* Users */

INSERT INTO users (id, first_name, last_name, email, password, created_at)
VALUES (1, 'test', 'user', 'tester@gmail.co.uk', 'password', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('James', 'Thomspon', 'JTT@Hotmail.co.uk', 'password1', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Lily', 'Sanders', 'Lily48D@AOL.com', 'password2', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Rory', 'Johnson', 'Bigrozza@gmail.co.uk', 'password3', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Lewis', 'Jackson', 'LewJack@Hotmail.co.uk', 'password4', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('James', 'Smith', 'JamieSmits@Hotmail.co.uk', 'password5', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Mark', 'Morrison', 'MoMack@gmail.com', 'password6', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Brent', 'McDonald', 'Bmac@Hotmail.co.uk', 'password7', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Gary', 'Garrison', 'DoubleGs@Hotmail.co.uk', 'password8', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Peter', 'Williams', 'PeeWill@Hotmail.co.uk', 'password9', NOW()::timestamp);

INSERT INTO users (first_name, last_name, email, password, created_at)
VALUES ('Cornelius', 'Evans', 'TheOldMan@aol.co.uk', 'password10', NOW()::timestamp);


/* Products */

INSERT INTO products (name, price, category, stock)
VALUES ('iPhone 12', '£789', 'Electronics', 500);

INSERT INTO products (name, price, category, stock)
VALUES ('Airpods', '£150', 'Electronics', 350);

INSERT INTO products (name, price, category, stock)
VALUES ('Wireless Speaker', '£79', 'Electronics', 200);

INSERT INTO products (name, price, category, stock)
VALUES ('Charging Cable', '8', 'Electronics/Accessories', 1000);

INSERT INTO products (name, price, category, stock)
VALUES ('Headphones', '£99', 'Electronics', 500);

INSERT INTO products (name, price, category, stock)
VALUES ('Vinyl Record Player', '£129', 'Audio', 600);

INSERT INTO products (name, price, category, stock)
VALUES ('Refridgerator', '£599', 'White Goods', 300);

INSERT INTO products (name, price, category, stock)
VALUES ('Washing Machine', '£399', 'White Goods', 300);

INSERT INTO products (name, price, category, stock)
VALUES ('40 Inch TV', '£799', 'Electronics', 100);

INSERT INTO products (name, price, category, stock)
VALUES ('60 Inch TV', '£999', 'Electronics', 100);

/* Carts */

INSERT INTO cart (user_id, created_at)
VALUES (1, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (2, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (3, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (4, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (5, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (6, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (7, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (8, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (9, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (10, NOW()::timestamp);

INSERT INTO cart (user_id, created_at)
VALUES (11, NOW()::timestamp);

/* Giving a user a second cart */

INSERT INTO cart (user_id, created_at)
VALUES (11, NOW()::timestamp);

/* Cart_Item */

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (1, 2, 3);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (2, 2, 3);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (3, 2, 3);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (1, 3, 2);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (2, 3, 1);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (3, 4, 10);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (1, 6, 5);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (3, 6, 4);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (1, 7, 1);

INSERT INTO cart_item (product_id, cart_id, quantity)
VALUES (2, 8, 3);

/* Orders */

INSERT INTO orders (user_id, cart_id, price_total, complete, completed_at)
VALUES (3, 4, 0, false, NOW()::timestamp);

INSERT INTO orders (user_id, cart_id, price_total, complete, completed_at)
VALUES (4, 5, 0, false, NOW()::timestamp);

INSERT INTO orders (user_id, cart_id, price_total, complete, completed_at)
VALUES (7, 8, 0, false, NOW()::timestamp);