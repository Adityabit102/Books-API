# Books-API
# 📚 Books API

A simple RESTful API for managing a list of books, built using **Node.js** and **Express**.

---

## 🚀 Features

- View all books (`GET /books`)
- Add a new book (`POST /books`)
- Update an existing book (`PUT /books/:id`)
- Delete a book (`DELETE /books/:id`)

---

## 📦 Tech Stack

- Node.js
- Express
- Postman (for API testing)

---

## 📁 Project Structure

books-api/
├── index.js # Main Express server
├── package.json # npm config and dependencies
└── README.md # Project documentation


---

## 🛠️ Setup Instructions

### 1. Clone the repo or create a new folder

```bash
mkdir books-api
cd books-api
2. Initialize the project and install dependencies
npm init -y
npm install express
3. Create your server file
Create index.js.

4. Run the server
node index.js

Method	Endpoint	Description
-GET	/books	Get all books
<img width="1229" alt="Screenshot 2025-05-29 at 1 52 32 PM" src="https://github.com/user-attachments/assets/2233cf72-7d2d-45ab-865f-c3e7813b3177" />

-POST	/books	Add a new book
<img width="1241" alt="Screenshot 2025-05-29 at 1 52 45 PM" src="https://github.com/user-attachments/assets/ae5d6a20-cc34-4123-9a3f-2d552525fcac" />

-PUT	/books/:id	Update a book by ID
<img width="1240" alt="Screenshot 2025-05-29 at 1 52 59 PM" src="https://github.com/user-attachments/assets/47311726-a820-4517-92c1-d3af75b5fe39" />

-DELETE	/books/:id	Delete a book by ID
<img width="1236" alt="Screenshot 2025-05-29 at 1 53 21 PM" src="https://github.com/user-attachments/assets/80d223ab-8ce5-4dc8-b357-eb9e5718dd3f" />

Optional Enhancements

-Add data validation
-Use persistent storage (e.g., MongoDB, PostgreSQL)
-Add error handling and logging
-Write unit tests
-Deploy the API online

Author

-Built for learning and practicing RESTful API development using Node.js and Express.
