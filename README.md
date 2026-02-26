🚀 Express Products API
A REST API built using Node.js and Express.js to manage products.
This project focuses on CRUD operations, route parameters, filtering logic, and update handling.

🚀 Github Link :
https://github.com/harshitpandya-cg/node-assignment-2

🌐 Live Deployment
Base URL:
https://node-assignment-2-zq2s.onrender.com/

Example:
https://node-assignment-2-zq2s.onrender.com/products

📄 API Documentation
Postman Documentation:
https://documenter.getpostman.com/view/50839299/2sBXcGFg1v

📌 Endpoints
GET Routes
GET /products
→ Return all products

GET /products/:id
→ Return product by ID
→ 404 if not found

GET /products/category/:categoryName
→ Return products by category
→ Returns empty array if none found

POST Route
POST /products
→ Add a new product
→ Auto-generate ID
→ Status 201
→ Return created product

Example Body: { "name": "Bluetooth Speaker", "category": "Electronics", "price": 2999, "stock": 20, "rating": 4.6 }

PUT Routes
PUT /products/:id
→ Replace entire product (except ID)
→ 404 if not found

PUT /products/:id/stock
→ Update only stock field
→ 404 if not found

PUT /products/:id/price
→ Update only price field
→ 404 if not found

🛠 Tech Stack
Node.js
Express.js
Postman
Render

▶️ Run Locally
npm install
npm start

Server runs at:
http://localhost:3000

👨‍💻 Author
Harshit Pandya
Express Backend Practice Project