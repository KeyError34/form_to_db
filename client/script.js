document
  .querySelector('.prodForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    const description = document.querySelector('.description').value;

    const data = { name, price, description };

    try {
      const response = await fetch('http://127.0.0.1:3345/prodact_add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const responseData = await response.json();
      console.log('Server response:', responseData);

      document.querySelector('.message').innerHTML = `
        <span class="success">${responseData.message}</span>
      `;

      document.querySelector('.prodForm').reset();
    } catch (error) {
      console.error('Error:', error);
      document.querySelector('.message').innerHTML = 
       `<span class="error">${error.message}</span>`
      ;
    }
  });
