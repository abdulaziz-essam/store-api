


# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index `/products/index` [POST]
- Create `/products/create` [POST] [token required]
- show `/products/show` [GET]


#### Users
- Index `/users/index` [POST] [token required]
- Create `/users/create` [POST]
- show `/users/show`  [token required]


#### Orders
- Index `/orders/index` [POST]
- Create `/orders/create` [POST]
-show '/show' 
-add order to product '/orders/addproduct'



## Data Shapes
#### Product
Table: *products*
- id `SERIAL PRIMARY KEY`
- name `VARCHAR`
- price `INTEGER`

#### User
Table: *users*
- id `SERIAL PRIMARY KEY`
- username `VARCHAR`
- firstname `VARCHAR`
- lastname `VARCHAR`
- password `VARCHAR`

#### Orders
Table: *orders*
- id `SERIAL PRIMARY KEY`
- user_id `INTEGER` `REFERENCES users(id)`
- status `varchar` (complete or active)

### order_products
Table: *order_products*
- order_id `INTEGER` `REFERENCES orders(id)` 
- product_id `INTEGER` `REFERENCES products(id)`
- quantity `INTEGER`