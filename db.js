import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "666777",
  database: "products_db"
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database successfully');
});


const createProductTable = `
  CREATE TABLE IF NOT EXISTS prodacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    description VARCHAR(255))`
  
;

connection.query(createProductTable, (err, results) => {
  if (err) {
    console.error('Error creating products table:', err.stack);
    return;
  }
  console.log('Products table created successfully');
});

export default connection;