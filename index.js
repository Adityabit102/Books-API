const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));

  if (bookIndex !== -1) {
    books[bookIndex] = { id: parseInt(id), title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
