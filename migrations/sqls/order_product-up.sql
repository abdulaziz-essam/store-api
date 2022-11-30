CREATE TABLE order_products(
        quantity INTEGER NOT NULL,
  user_id   INTEGER NOT NULL REFERENCES users (id),
  product_id INTEGER NOT NULL REFERENCES products (id),
)