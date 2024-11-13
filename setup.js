import connection from './db.js';

const createProductTable = `
  CREATE TABLE IF NOT EXISTS prodacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    description VARCHAR(255)
  );`;
connection.query(createProductTable, (err, results) => {
  if (err) {
    console.error('Error creating users table:', err.stack);
    return;
  }
  console.log('Users table created successfully');
});

connection.end();
