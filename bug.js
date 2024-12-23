const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Incorrect usage of res.send, sending an object without stringification
  res.send({ message: 'Hello!' });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});