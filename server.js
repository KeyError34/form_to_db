import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connection from './db.js';

const port = process.env.PORT || 3300;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Hello, World!' }));
});
app.get('/prodacts', (req, res) => {
  const query = 'SELECT * FROM prodacts';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users: ', err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.status(200).json(results);
  });
});
app.get('/prodact_add', (req, res) => {
res.send("gggggg")

});
app.post('/prodact_add', (req, res) => {
  const { name, price, description } = req.body;
  console.log('Request Body:', req.body);

  const queryCommand =
    'INSERT INTO prodacts (name, price, description) VALUES (?, ?, ?)';
  connection.query(queryCommand, [name, price, description], (err, results) => {
    if (err) {
      console.error('Error adding product: ', err.stack);
      res.status(500).send('Error adding product');
      return;
    }
    console.log('Product added:', results);
    res.status(201).json({ message: 'Product added successfully' });
  });
});
app.listen(port, () => {
  console.log(`Server is working at http://127.0.0.1:${port}`);
});
