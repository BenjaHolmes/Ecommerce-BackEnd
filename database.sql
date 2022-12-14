CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATE
 );

CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(50),
  price MONEY,
  category VARCHAR(50),
  stock int NOT NULL,
);

CREATE TABLE cart (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGSERIAL REFERENCES users(id),
  created_at DATE
);

CREATE TABLE cart_item (
  product_id BIGSERIAL REFERENCES products(id),
  cart_id BIGSERIAL REFERENCES cart(id),
  quantity INTEGER,
  primary key (product_id, cart_id)
);

CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGSERIAL REFERENCES users(id),
  cart_id BIGSERIAL REFERENCES cart(id),
  price_total MONEY,
  complete BOOLEAN,
  completed_at DATE
);